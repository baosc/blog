cd docs/.vuepress/dist
git init
git add .
git commit -m "Deploy GitHub Page"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main