#!/usr/bin/env bash

cd projects/ngx-alertify

npm --no-git-tag-version version patch

ng build ngx-alertify --prod

cd ../../dist/ngx-alertify

npm publish

cd ../../

git add .

git commit -m "new version published"

git push
