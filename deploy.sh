#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
pnpm run docs:build

# 进入组件目录
cd packages/components
# 构建组件
pnpm run build

cd ./../../
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'build'

# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
