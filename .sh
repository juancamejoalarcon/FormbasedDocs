git checkout dev
pushd ./client
ng build
popd
pushd ./server
ls
popd
git add .
git commit -m "build for deploy"
git subtree push --prefix server heroku master
