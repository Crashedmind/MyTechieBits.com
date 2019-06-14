

# Git 
'''
git clone https://github.com/Crashedmind/MyTechieBits.com.git
# Make edits
git commit -m commit-message # commit to local Git repo
git status
git push origin master 
git status
...

# Usage

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/justinformentin/gatsby-v2-tutorial-starter)

```bash
Download project

# Cloning
git clone https://github.com/Crashedmind/MyTechieBits.com.git
cd MyTechieBits.com


THEN

# Install dependencies
npm i

# Start dev server
gatsby develop

# Build for production
gatsby build

# Format with Prettier
npm format

```

## Folder structure
```bash
├──.circleci # Circleci integration
├── config # Theme and site metadata
├── content # Post markdown and images
├── src
│   ├── components
│   ├── layouts
│   ├── pages
│   ├── style
│   └── templates # For Post and Tag page generation
├── static # Images for logo and favicon, and robots.txt
├── gatsby-config.js # Plugin loading and configuration
└── gatsby-node.js # Generate posts/tags and modify webpack
```
