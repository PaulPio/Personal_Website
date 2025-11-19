---
description: How to deploy the website to Vercel
---

# Deploying to Vercel

Since you have a static HTML/Tailwind site, Vercel is a great choice. The best way is to connect Vercel to your GitHub repository so it updates automatically when you push code.

## Prerequisites

1.  **Fix Local Git State**:
    Your previous `git add` command didn't work because of a PowerShell quirk. Run these commands in your terminal to save your changes:
    ```bash
    git add .
    git commit -m "Ready for deployment"
    ```

2.  **Push to GitHub**:
    Ensure your code is pushed to a GitHub repository. If you haven't connected it yet, create a new repository on GitHub and follow the instructions to push your existing code.

## Steps on Vercel

1.  **Go to Vercel**: Visit [vercel.com](https://vercel.com) and Sign Up / Log In (continue with GitHub is easiest).
2.  **Add New Project**:
    *   Click **"Add New..."** -> **"Project"**.
3.  **Import Git Repository**:
    *   You will see a list of your GitHub repositories.
    *   Find your `Personal_Website` repo (or whatever you named it) and click **"Import"**.
4.  **Configure Project**:
    *   **Framework Preset**: It should auto-detect "Other" or "HTML". This is correct.
    *   **Root Directory**: Leave as `./`.
    *   **Build Command**: Leave empty (since you are using the CDN).
    *   **Output Directory**: Leave empty.
5.  **Deploy**:
    *   Click **"Deploy"**.
    *   Wait a few seconds, and you will get a live URL (e.g., `your-name.vercel.app`).

## Updates

Whenever you want to update your site:
1.  Make changes in VS Code.
2.  `git add .`
3.  `git commit -m "Update description"`
4.  `git push`
5.  Vercel will detect the push and automatically re-deploy your site!
