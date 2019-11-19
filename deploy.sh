############# SCRIPTS ############
# Deploy in dev: ./deploy.sh dev
# Deploy in prod: ./deploy.sh prod
##################################

############ CONSTANTS ###########
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

BLUEbg='\e[44m'
NCbg='\e[49m' # No Color

##################################

# SWITCH TO DEV BRANCH
check_if_current_branch_correct() {
    currentBranch=$(git rev-parse --abbrev-ref HEAD)
    if [[ ${currentBranch} == $1 ]]; then
        return 1
     else
        return 0
    fi
    # echo -e "${GREEN}Success:${NC} On $1 branch"
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

# BUILD AND DEPLOY
build_and_deploy() {
    pushd ./client
    ng build
    popd
    pushd ./server
    ls
    popd
    git add .
    git commit -m "Build for deploy"
    git subtree push --prefix server heroku master
}

environment=$1

# DEVELOPMENT
if [ "$environment" = 'dev' ]; then 
    echo -e "####### START DEPLOY IN DEVELOPMENT ########"
    if check_if_current_branch_correct 'dev' == 0; then
        echo -e "${RED}Error:${NC} you are not in Dev branch"
    else
        echo -e "${GREEN}Success:${NC} Correct branch"
        if are_uncommited_changes == 0; then
            echo -e "${GREEN}Success:${NC} Changes are commited"
        fi
    fi

# PRODUCTION
elif [ "$environment" = 'prod' ]; then 
    echo -e "####### START DEPLOY IN PRODUCTION ########"
    if check_if_current_branch_correct 'prod' == 0; then
        echo -e "${RED}Error:${NC} you are not in Master branch"
    else
        echo -e "${GREEN}Success:${NC} Correct branch"
        if are_uncommited_changes == 0; then
            echo -e "${GREEN}Success:${NC} Changes are commited"
        fi
    fi
fi
