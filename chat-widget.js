// AI Chat Widget for Paul's Portfolio
(function () {
  'use strict';

  let currentMode = 'chat';
  let chatMessages = [];
  let isStreaming = false;
  let widgetOpen = false;

  const projectList = typeof projects !== 'undefined' ? projects : [];

  function createWidget() {
    const style = document.createElement('style');
    style.textContent = `
      #ai-widget-btn {
        position: fixed;
        bottom: 8rem;
        left: 1.5rem;
        z-index: 9999;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: linear-gradient(135deg, #2563eb, #7c3aed);
        color: white;
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(37,99,235,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      #ai-widget-btn:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 28px rgba(37,99,235,0.5);
      }
      #ai-widget-panel {
        position: fixed;
        bottom: 11.5rem;
        left: 1.5rem;
        z-index: 9998;
        width: 400px;
        max-width: calc(100vw - 2rem);
        height: 520px;
        max-height: calc(100vh - 14rem);
        border-radius: 16px;
        overflow: hidden;
        display: none;
        flex-direction: column;
        box-shadow: 0 12px 48px rgba(0,0,0,0.2);
        font-family: 'Inter', system-ui, sans-serif;
      }
      #ai-widget-panel.open { display: flex; }

      .ai-panel-light {
        background: #ffffff;
        color: #1f2937;
      }
      .ai-panel-dark {
        background: #1e293b;
        color: #e2e8f0;
      }

      .ai-header {
        padding: 14px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid;
        flex-shrink: 0;
      }
      .ai-panel-light .ai-header { border-color: #e2e8f0; background: #f8fafc; }
      .ai-panel-dark .ai-header { border-color: #334155; background: #0f172a; }

      .ai-header-title {
        font-weight: 700;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .ai-header-title .ai-dot {
        width: 8px; height: 8px; border-radius: 50%; background: #22c55e;
        animation: ai-pulse 2s infinite;
      }
      @keyframes ai-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.4; }
      }

      .ai-close-btn {
        background: none; border: none; cursor: pointer; padding: 4px;
        color: inherit; opacity: 0.6; transition: opacity 0.2s;
      }
      .ai-close-btn:hover { opacity: 1; }

      .ai-tabs {
        display: flex;
        border-bottom: 1px solid;
        flex-shrink: 0;
      }
      .ai-panel-light .ai-tabs { border-color: #e2e8f0; }
      .ai-panel-dark .ai-tabs { border-color: #334155; }

      .ai-tab {
        flex: 1;
        padding: 10px 8px;
        font-size: 12px;
        font-weight: 600;
        text-align: center;
        cursor: pointer;
        border: none;
        background: none;
        color: inherit;
        opacity: 0.5;
        transition: all 0.2s;
        border-bottom: 2px solid transparent;
      }
      .ai-tab:hover { opacity: 0.8; }
      .ai-tab.active {
        opacity: 1;
        border-bottom-color: #2563eb;
      }
      .ai-panel-dark .ai-tab.active { border-bottom-color: #60a5fa; }

      .ai-body {
        flex: 1;
        overflow-y: auto;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        scroll-behavior: smooth;
      }

      .ai-msg {
        max-width: 88%;
        padding: 10px 14px;
        border-radius: 14px;
        font-size: 13px;
        line-height: 1.55;
        word-wrap: break-word;
        white-space: pre-wrap;
      }
      .ai-msg a { color: #3b82f6; text-decoration: underline; }
      .ai-msg-user {
        align-self: flex-end;
        background: #2563eb;
        color: white;
        border-bottom-right-radius: 4px;
      }
      .ai-panel-light .ai-msg-assistant {
        align-self: flex-start;
        background: #f1f5f9;
        color: #1e293b;
        border-bottom-left-radius: 4px;
      }
      .ai-panel-dark .ai-msg-assistant {
        align-self: flex-start;
        background: #334155;
        color: #e2e8f0;
        border-bottom-left-radius: 4px;
      }
      .ai-msg-system {
        align-self: center;
        text-align: center;
        font-size: 12px;
        opacity: 0.6;
        padding: 6px 12px;
      }

      .ai-typing {
        display: flex; gap: 4px; padding: 8px 14px; align-self: flex-start;
      }
      .ai-typing span {
        width: 6px; height: 6px; border-radius: 50%; background: #94a3b8;
        animation: ai-bounce 1.4s infinite;
      }
      .ai-typing span:nth-child(2) { animation-delay: 0.2s; }
      .ai-typing span:nth-child(3) { animation-delay: 0.4s; }
      @keyframes ai-bounce {
        0%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-6px); }
      }

      .ai-footer {
        padding: 12px 16px;
        border-top: 1px solid;
        flex-shrink: 0;
      }
      .ai-panel-light .ai-footer { border-color: #e2e8f0; background: #f8fafc; }
      .ai-panel-dark .ai-footer { border-color: #334155; background: #0f172a; }

      .ai-input-row {
        display: flex;
        gap: 8px;
        align-items: flex-end;
      }
      .ai-input {
        flex: 1;
        resize: none;
        border: 1px solid;
        border-radius: 12px;
        padding: 10px 14px;
        font-size: 13px;
        font-family: inherit;
        min-height: 40px;
        max-height: 100px;
        outline: none;
        transition: border-color 0.2s;
      }
      .ai-panel-light .ai-input {
        border-color: #d1d5db; background: #fff; color: #1f2937;
      }
      .ai-panel-light .ai-input:focus { border-color: #2563eb; }
      .ai-panel-dark .ai-input {
        border-color: #475569; background: #1e293b; color: #e2e8f0;
      }
      .ai-panel-dark .ai-input:focus { border-color: #60a5fa; }

      .ai-send-btn {
        width: 40px; height: 40px;
        border-radius: 10px;
        border: none;
        background: #2563eb;
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;
        flex-shrink: 0;
      }
      .ai-send-btn:hover { background: #1d4ed8; }
      .ai-send-btn:disabled { opacity: 0.4; cursor: not-allowed; }

      .ai-project-select {
        margin-bottom: 8px;
      }
      .ai-project-select select {
        width: 100%;
        padding: 8px 12px;
        border-radius: 8px;
        font-size: 13px;
        font-family: inherit;
        border: 1px solid;
        outline: none;
      }
      .ai-panel-light .ai-project-select select {
        border-color: #d1d5db; background: #fff; color: #1f2937;
      }
      .ai-panel-dark .ai-project-select select {
        border-color: #475569; background: #1e293b; color: #e2e8f0;
      }

      .ai-welcome {
        text-align: center;
        padding: 24px 16px;
      }
      .ai-welcome h3 {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 8px;
      }
      .ai-welcome p {
        font-size: 13px;
        opacity: 0.7;
        line-height: 1.5;
      }
      .ai-welcome-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        justify-content: center;
        margin-top: 12px;
      }
      .ai-chip {
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 12px;
        cursor: pointer;
        border: 1px solid;
        background: none;
        transition: all 0.2s;
        font-family: inherit;
      }
      .ai-panel-light .ai-chip {
        border-color: #d1d5db; color: #374151;
      }
      .ai-panel-light .ai-chip:hover {
        background: #eff6ff; border-color: #2563eb; color: #2563eb;
      }
      .ai-panel-dark .ai-chip {
        border-color: #475569; color: #cbd5e1;
      }
      .ai-panel-dark .ai-chip:hover {
        background: #1e3a5f; border-color: #60a5fa; color: #60a5fa;
      }

      @media (max-width: 480px) {
        #ai-widget-panel {
          left: 0.5rem;
          right: 0.5rem;
          bottom: 10rem;
          width: auto;
          height: 70vh;
        }
      }
    `;
    document.head.appendChild(style);

    const btn = document.createElement('button');
    btn.id = 'ai-widget-btn';
    btn.setAttribute('aria-label', 'Open AI Assistant');
    btn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M12 7v2m0 4h.01"></path></svg>';
    btn.onclick = toggleWidget;
    document.body.appendChild(btn);

    const panel = document.createElement('div');
    panel.id = 'ai-widget-panel';
    panel.innerHTML = buildPanelHTML();
    document.body.appendChild(panel);

    updateTheme();
    setupTabListeners();
    setupCloseListener();
    showWelcome();

    const observer = new MutationObserver(() => updateTheme());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }

  function buildPanelHTML() {
    return `
      <div class="ai-header">
        <div class="ai-header-title"><span class="ai-dot"></span> Ask Paul AI</div>
        <button class="ai-close-btn" aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="ai-tabs">
        <button class="ai-tab active" data-mode="chat">💬 Chat</button>
<button class="ai-tab" data-mode="walkthrough">🔍 Code Walkthrough</button>
      </div>
      <div class="ai-body" id="ai-body"></div>
      <div class="ai-footer" id="ai-footer"></div>
    `;
  }

  function updateTheme() {
    const panel = document.getElementById('ai-widget-panel');
    if (!panel) return;
    const isDark = document.documentElement.classList.contains('dark');
    panel.classList.toggle('ai-panel-dark', isDark);
    panel.classList.toggle('ai-panel-light', !isDark);
  }

  function toggleWidget() {
    const panel = document.getElementById('ai-widget-panel');
    widgetOpen = !widgetOpen;
    panel.classList.toggle('open', widgetOpen);
  }

  function closeWidget() {
    const panel = document.getElementById('ai-widget-panel');
    if (!panel) return;
    widgetOpen = false;
    panel.classList.remove('open');
  }

  function setupCloseListener() {
    const closeBtn = document.querySelector('.ai-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeWidget);
  }

  function setupTabListeners() {
    document.querySelectorAll('.ai-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        if (isStreaming) return;
        document.querySelectorAll('.ai-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentMode = tab.dataset.mode;
        showModeUI();
      });
    });
  }

  function showModeUI() {
    if (currentMode === 'chat') showChatUI();
    else if (currentMode === 'walkthrough') showWalkthroughUI();
  }

  function showWelcome() {
    showChatUI();
  }

  function showChatUI() {
    const body = document.getElementById('ai-body');
    const footer = document.getElementById('ai-footer');

    if (chatMessages.length === 0) {
      body.innerHTML = `
        <div class="ai-welcome">
          <h3>👋 Hi! I'm Paul's AI assistant</h3>
          <p>Ask me anything about Paul's skills, projects, or experience.</p>
          <div class="ai-welcome-chips">
            <button class="ai-chip" data-q="What are Paul's top projects?">Top projects</button>
            <button class="ai-chip" data-q="What tech stack does Paul use?">Tech stack</button>
            <button class="ai-chip" data-q="Tell me about Paul's work experience">Experience</button>
            <button class="ai-chip" data-q="Is Paul available for internships?">Availability</button>
          </div>
        </div>
      `;
      body.querySelectorAll('.ai-chip').forEach(chip => {
        chip.addEventListener('click', () => sendChatMessage(chip.dataset.q));
      });
    } else {
      renderChatMessages();
    }

    footer.innerHTML = `
      <div class="ai-input-row">
        <textarea class="ai-input" id="ai-chat-input" placeholder="Ask about Paul..." rows="1"></textarea>
        <button class="ai-send-btn" id="ai-send-btn" aria-label="Send">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg>
        </button>
      </div>
    `;

    const input = document.getElementById('ai-chat-input');
    const sendBtn = document.getElementById('ai-send-btn');

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (!isStreaming && input.value.trim()) sendChatMessage(input.value.trim());
      }
    });
    sendBtn.addEventListener('click', () => {
      if (!isStreaming && input.value.trim()) sendChatMessage(input.value.trim());
    });
    input.addEventListener('input', autoResize);
  }

  function autoResize() {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 100) + 'px';
  }

  function renderChatMessages() {
    const body = document.getElementById('ai-body');
    body.innerHTML = '';
    chatMessages.forEach(msg => {
      const div = document.createElement('div');
      div.className = `ai-msg ai-msg-${msg.role}`;
      div.innerHTML = formatMarkdown(msg.content);
      body.appendChild(div);
    });
    body.scrollTop = body.scrollHeight;
  }

  async function sendChatMessage(text) {
    chatMessages.push({ role: 'user', content: text });
    renderChatMessages();

    const input = document.getElementById('ai-chat-input');
    if (input) input.value = '';

    const body = document.getElementById('ai-body');
    const typing = document.createElement('div');
    typing.className = 'ai-typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    body.appendChild(typing);
    body.scrollTop = body.scrollHeight;

    isStreaming = true;
    updateSendBtn();

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: chatMessages.map(m => ({ role: m.role, content: m.content }))
        })
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      typing.remove();
      const assistantMsg = { role: 'assistant', content: '' };
      chatMessages.push(assistantMsg);

      const msgDiv = document.createElement('div');
      msgDiv.className = 'ai-msg ai-msg-assistant';
      body.appendChild(msgDiv);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        assistantMsg.content += chunk;
        msgDiv.innerHTML = formatMarkdown(assistantMsg.content);
        body.scrollTop = body.scrollHeight;
      }
    } catch (err) {
      typing.remove();
      chatMessages.push({ role: 'assistant', content: 'Sorry, I had trouble connecting. Please make sure the site is deployed on Vercel with an ANTHROPIC_API_KEY configured, or try again later.' });
      renderChatMessages();
    }

    isStreaming = false;
    updateSendBtn();
  }

  function updateSendBtn() {
    const btn = document.getElementById('ai-send-btn');
    if (btn) btn.disabled = isStreaming;
  }

  function showWalkthroughUI() {
    const body = document.getElementById('ai-body');
    const footer = document.getElementById('ai-footer');
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';

    const options = projectList.map(p =>
      `<option value="${p.id}">${p.title[lang] || p.title.en}</option>`
    ).join('');

    body.innerHTML = `
      <div class="ai-welcome">
        <h3>🔍 Code Walkthrough</h3>
        <p>Select a project and I'll explain its architecture, tech decisions, and implementation.</p>
      </div>
      <div class="ai-project-select">
        <select id="ai-project-select">
          <option value="">Choose a project...</option>
          ${options}
        </select>
      </div>
      <div id="ai-walkthrough-result"></div>
    `;

    footer.innerHTML = `
      <div class="ai-input-row">
        <textarea class="ai-input" id="ai-walkthrough-input" placeholder="Ask about the project (or leave empty for full walkthrough)..." rows="1"></textarea>
        <button class="ai-send-btn" id="ai-walkthrough-btn" aria-label="Send">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg>
        </button>
      </div>
    `;

    const input = document.getElementById('ai-walkthrough-input');
    input.addEventListener('input', autoResize);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        startWalkthrough();
      }
    });
    document.getElementById('ai-walkthrough-btn').addEventListener('click', startWalkthrough);
    document.getElementById('ai-project-select').addEventListener('change', () => {
      document.getElementById('ai-walkthrough-result').innerHTML = '';
    });
  }

  async function startWalkthrough() {
    const select = document.getElementById('ai-project-select');
    const input = document.getElementById('ai-walkthrough-input');
    const resultDiv = document.getElementById('ai-walkthrough-result');
    const btn = document.getElementById('ai-walkthrough-btn');
    const projectId = select.value;

    if (!projectId || isStreaming) return;

    isStreaming = true;
    btn.disabled = true;
    resultDiv.innerHTML = '<div class="ai-typing"><span></span><span></span><span></span></div>';

    try {
      const res = await fetch('/api/walkthrough', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectId,
          question: input.value.trim() || null
        })
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      resultDiv.innerHTML = '';
      const msgDiv = document.createElement('div');
      msgDiv.className = 'ai-msg ai-msg-assistant';
      msgDiv.style.maxWidth = '100%';
      resultDiv.appendChild(msgDiv);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let content = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        content += decoder.decode(value, { stream: true });
        msgDiv.innerHTML = formatMarkdown(content);
        document.getElementById('ai-body').scrollTop = document.getElementById('ai-body').scrollHeight;
      }
    } catch (err) {
      resultDiv.innerHTML = '<div class="ai-msg ai-msg-assistant" style="max-width:100%">Sorry, I had trouble connecting. Please make sure the site is deployed on Vercel with an ANTHROPIC_API_KEY configured.</div>';
    }

    isStreaming = false;
    btn.disabled = false;
    if (input) input.value = '';
  }

  function formatMarkdown(text) {
    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre style="background:rgba(0,0,0,0.1);padding:8px;border-radius:6px;overflow-x:auto;font-size:12px;margin:4px 0"><code>$2</code></pre>');
    html = html.replace(/`([^`]+)`/g, '<code style="background:rgba(0,0,0,0.1);padding:1px 4px;border-radius:3px;font-size:12px">$1</code>');
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    html = html.replace(/^### (.+)$/gm, '<strong style="font-size:14px;display:block;margin-top:8px">$1</strong>');
    html = html.replace(/^## (.+)$/gm, '<strong style="font-size:15px;display:block;margin-top:10px">$1</strong>');
    html = html.replace(/^- (.+)$/gm, '• $1');
    html = html.replace(/\n/g, '<br>');

    return html;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createWidget);
  } else {
    createWidget();
  }
})();
