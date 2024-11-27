### README.md Template
```markdown
# My React Blog

A blog platform built with React and Vite.

## Setup Instructions
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open http://localhost:5173 in your browser

## Project Structure
[Explain your project structure here]

## Screenshot
[Add your screenshot here]

## What I Learned
[Share 2-3 key learnings from this assignment]
```

### GitHub Repository Structure
```
react-blog/
├── .gitignore
├── README.md
├── package.json
├── vite.config.js
└── src/
    ├── components/
    │   └── Header.jsx
    ├── App.jsx
    ├── main.jsx
    └── index.css
```

## 🔍 Common Issues and Solutions

### "Module not found" Error
```bash
# Check if you're in the correct directory
pwd
# Install dependencies again
npm install
```

### Port Already in Use
```bash
# Kill the process using the port
lsof -i :5173
kill -9 [PID]
```

## 🤔 Need Help?
- Check the [React Documentation](https://react.dev)
- Use the [Vite Documentation](https://vitejs.dev)

## 🌟 Bonus Challenge
If you finish early and want to extend your learning:
1. Add a dark mode toggle to your header
2. Make the header responsive
3. Add smooth transitions to hover effects



# SETUP INSTRUCTIONS REMINDER

### 1. Check Your Development Environment
First, ensure you have the necessary tools installed. Open your terminal and run:

```bash
node --version  # Should be 14.0.0 or higher
npm --version   # Should be 6.0.0 or higher
```

### 2. Create Your Project
```bash
# Create a new project
npm create vite@latest my-blog -- --template react

# Navigate to project folder
cd my-blog

# Install dependencies
npm install

# Start development server
npm run dev
```

### 3. Understanding Project Structure
Your project will have this structure:
```
my-blog/
├── node_modules/     # Dependencies (don't modify)
├── public/          # Static files
├── src/             # Your source code
│   ├── App.jsx      # Main application component
│   ├── main.jsx     # Application entry point
│   └── index.css    # Global styles
├── package.json     # Project configuration
└── vite.config.js   # Vite configuration

### README Updates Part 1

## Components Structure
- BlogPost: Individual blog post display
- BlogList: Container for multiple posts
- Header: Navigation and site title

## Styling Approach
I kept the initial basic styling given in the assignment for now.

## New Features
Added Blog Posts with titles content date and readTime displayed

## Screenshots
![ScreenShot Part 1](https://github.com/nkepner/react_blog/blob/steps0-2/myblogpart1scrnsht.png)