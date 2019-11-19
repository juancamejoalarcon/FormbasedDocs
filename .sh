RED='\033[0;31m'
NC='\033[0m' # No Color

# git checkout dev
# pushd ./client
# ng build
# popd
# pushd ./server
# ls
# popd
# git add .
# git commit -m "build for deploy"
# git subtree push --prefix server heroku master

# CHECK IF THERE ARE ANY COMMITS
# gitStatus=$(git status)
# if [[ $gitStatus == *"Changes not staged for commit"* ]]; then
#     echo -e "${RED}Error:${NC} Uncommited changes. Please commit, and then push to Heroku"
# elif [[ $gitStatus == *"Changes to be committed"* ]]; then
#     echo -e "${RED}Error:${NC} Uncommited changes. Please commit, and then push to Heroku"
# fi

# SWITCH TO DEV BRANCH
currentBranch=$(git rev-parse --abbrev-ref HEAD)
echo "${currentBranch}"