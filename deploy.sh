# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
echo 'vue.coulsonzero.top' > CNAME

git init
git add -A
git commit -m 'deploy vue-admin-pro'

# 如果发布到https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:coulsonzero/vue-admin-pro.git master:gh-pages

cd -

rm -rf dist