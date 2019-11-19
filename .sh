RED='\033[0;31m'
GREEN='\033[0;32m'
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

# SWITCH TO DEV BRANCH
switch_to_dev_branch() {
    currentBranch=$(git rev-parse --abbrev-ref HEAD)
    echo "Current branch: ${currentBranch}"
    if [[ ${currentBranch} != "dev" ]]; then
        git checkout dev
    fi
    echo -e "${GREEN}Success:${NC} On dev branch"
}

# CHECK IF THERE ARE ANY COMMITS
are_uncommited_changes() {
    gitStatus=$(git status)
    if [[ $gitStatus == *"Changes not staged for commit"* ]]; then
        echo -e "${RED}Error:${NC} Uncommited changes. Please commit, and then push to Heroku"
        return 1
    elif [[ $gitStatus == *"Changes to be committed"* ]]; then
        echo -e "${RED}Error:${NC} Uncommited changes. Please commit, and then push to Heroku"
        return 1
    else
        return 0
    fi
}

switch_to_dev_branch
if are_uncommited_changes == 0; then
    echo -e "${GREEN}Success:${NC} Changes are commited"
fi
