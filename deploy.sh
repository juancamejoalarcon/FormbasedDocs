############# GUIDE ############

# Libreoffice config
# https://elements.heroku.com/buildpacks/bluetealondon/heroku-buildpack-libreoffice-for-heroku-18

##################################

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
    if [ "$environment" = 'dev' ]; then 
        expectedBranch='dev'
    # PRODUCTION
    elif [ "$environment" = 'prod' ]; then 
        expectedBranch='master'
    fi
    echo -e $expectedBranch
    currentBranch=$(git rev-parse --abbrev-ref HEAD)
    if [[ ${currentBranch} == $expectedBranch ]]; then
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

# SET URL ENDPOINT
set_url() {
ed ./src/environments/environment.prod.ts << END
3i
  api_url: '${url}',
.
w
q
END
sed -i '' '4d' ./src/environments/environment.prod.ts
}

set_stripe() {
ed ./src/environments/environment.prod.ts << END
4i
  stripe_key: '${stripe_key}'
.
w
q
END
sed -i '' '5d' ./src/environments/environment.prod.ts
}

# BUILD AND DEPLOY
build_and_deploy() {
    # Build angular project
    pushd ./client
    if [ "$environment" = 'dev' ]; then
        url='https://formbaseddocs-dev.herokuapp.com'
        set_url
        stripe_key='pk_test_Us1NHhQN6advqdoP2WRSXLlZ00Eqt1Kust'
        set_stripe
        npm run build:ssr
    elif [ "$environment" = 'prod' ]; then
        url='https://www.automatikdocs.com'
        set_url
        stripe_key='poner key production'
        set_stripe
        npm run build:ssr
    fi
    popd
    # Rewrite commands of Procfile
    pushd ./server
ed Procfile << END
1i
web: npm run ${1}
.
w
q
END
    sed -i '' '2d' Procfile
    popd
    git add .
    git commit -m "Build for deploy"
    # git subtree push -f --prefix server heroku master
    git push heroku `git subtree split --prefix server`:master --force
}

check_node_version() {

    currentNodeVersion=$(node -v)
    if [[ ${currentNodeVersion} == 'v13.1.0' ]]; then
        return 1
     else
        return 0
    fi
    # echo -e "${GREEN}Success:${NC} On $1 branch"
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
            if check_node_version == 0; then
                echo -e "${RED}Error:${NC} Current Node version is not correct"
            else
                echo -e "${GREEN}Success:${NC} Current Node version correct"
                heroku git:remote -a formbaseddocs-dev
                build_and_deploy ${environment}
            fi
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
            if check_node_version == 0; then
                echo -e "${RED}Error:${NC} Current Node version is not correct"
            else
                echo -e "${GREEN}Success:${NC} Current Node version correct"
                heroku git:remote -a automatikdocs
                build_and_deploy ${environment}
            fi
        fi
    fi
fi

