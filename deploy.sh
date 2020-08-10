# ############# GUIDE ############

# # Libreoffice config
# # https://elements.heroku.com/buildpacks/bluetealondon/heroku-buildpack-libreoffice-for-heroku-18

# ##################################

# ############# SCRIPTS ############
# # Deploy in dev: ./deploy.sh dev
# # Deploy in prod: ./deploy.sh prod
# ##################################

# ############ CONSTANTS ###########
# RED='\033[0;31m'
# GREEN='\033[0;32m'
# BLUE='\033[0;34m'
# NC='\033[0m' # No Color

# BLUEbg='\e[44m'
# NCbg='\e[49m' # No Color

# STRIPE_TEST_KEY="pk_test_Us1NHhQN6advqdoP2WRSXLlZ00Eqt1Kust"
# PAYPAL_TEST_KEY="AXEii_db3MBSvp9JH3Fc_q1wWqeSLIAv_QNOOh2OaTzyBygyek6lvJWe_J6ghwoJp2Xlu34NS4UyZ81P"

# ##################################

# # SWITCH TO DEV BRANCH
# check_if_current_branch_correct() {
#     if [ "$environment" = 'dev' ]; then 
#         expectedBranch='dev'
#     # PRODUCTION
#     elif [ "$environment" = 'prod' ]; then 
#         expectedBranch='master'
#     fi
#     echo -e $expectedBranch
#     currentBranch=$(git rev-parse --abbrev-ref HEAD)
#     if [[ ${currentBranch} == $expectedBranch ]]; then
#         return 1
#      else
#         return 0
#     fi
#     # echo -e "${GREEN}Success:${NC} On $1 branch"
# }

# # CHECK IF THERE ARE ANY COMMITS
# are_uncommited_changes() {
#     gitStatus=$(git status)
#     if [[ $gitStatus == *"Changes not staged for commit"* ]]; then
#         echo -e "${RED}Error:${NC} Uncommited changes. Please commit, and then push to Heroku"
#         return 1
#     elif [[ $gitStatus == *"Changes to be committed"* ]]; then
#         echo -e "${RED}Error:${NC} Uncommited changes. Please commit, and then push to Heroku"
#         return 1
#     else
#         return 0
#     fi
# }

# # SET URL ENDPOINT
# set_url() {
# ed ./src/environments/environment.prod.ts << END
# 3i
#   api_url: '${url}',
# .
# w
# q
# END
# sed -i '' '4d' ./src/environments/environment.prod.ts
# }

# set_stripe() {
# ed ./src/environments/environment.prod.ts << END
# 4i
#   stripe_key: '${stripe_key}'
# .
# w
# q
# END
# sed -i '' '5d' ./src/environments/environment.prod.ts
# }

# set_paypal() {
# lineNum="$(grep -n 'paypalKey' ./src/index.html | head -n 1 | cut -d: -f1)"
# nextLineNum="$((lineNum + 1))d"
# ed ./src/index.html << END
# ${lineNum}i
#   <script id="paypalKey" defer src="https://www.paypal.com/sdk/js?client-id=${paypal_key}&disable-funding=credit,card&currency=EUR"></script>
# .
# w
# q
# END
# sed -i '' $nextLineNum ./src/index.html
# }

# set_google_tag() {
# lineNum="$(grep -n 'googleTagIdKey' ./src/index.html | head -n 1 | cut -d: -f1)"
# nextLineNum="$((lineNum + 1))d"
# ed ./src/index.html << END
# ${lineNum}i
#   ${google_tag_script}
# .
# w
# q
# END
# sed -i '' $nextLineNum ./src/index.html
# }

# # BUILD AND DEPLOY
# build_and_deploy() {
#     # Build angular project
#     pushd ./client
#     if [ "$environment" = 'dev' ]; then
#         url='https://formbaseddocs-dev.herokuapp.com'
#         set_url
#         stripe_key='pk_test_Us1NHhQN6advqdoP2WRSXLlZ00Eqt1Kust'
#         set_stripe
#         paypal_key='AXEii_db3MBSvp9JH3Fc_q1wWqeSLIAv_QNOOh2OaTzyBygyek6lvJWe_J6ghwoJp2Xlu34NS4UyZ81P'
#         set_paypal
#         google_tag_script='<script id="googleTagIdKey">function nada() {}</script>'
#         set_google_tag
#         npm run build:ssr
#     elif [ "$environment" = 'prod' ]; then
#         url='https://www.automatikdocs.com'
#         set_url
#         stripe_key='pk_live_y5rE3kZkAyKEBpQ9PtdSfP2M00imfBq16j'
#         set_stripe
#         paypal_key='AfRBigPbfKBMYlA1_bnghysFZ-5UxVd4JC5w4wtRCxDYptWERuQMfQsiAz1YxKdeBvvtP-H3xMlz-oX1'
#         set_paypal
#         google_tag_script='<script id="googleTagIdKey" async src="https://www.googletagmanager.com/gtag/js?id=UA-166829110-1"></script><script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "UA-166829110-1");</script>'
#         set_google_tag
#         npm run build:ssr
#     fi
#     popd
#     # Rewrite commands of Procfile
#     pushd ./server
# ed Procfile << END
# 1i
# web: npm run ${1}
# .
# w
# q
# END
#     sed -i '' '2d' Procfile
#     popd
#     git add .
#     git commit -m "Build for deploy"
#     # git subtree push -f --prefix server heroku master
#     git push heroku `git subtree split --prefix server`:master --force
#     set_everything_to_default_local
# }

# set_everything_to_default_local() {
#     pushd ./client
#     url='http://localhost:4000'
#     set_url
#     stripe_key=${STRIPE_TEST_KEY}
#     set_stripe
#     paypal_key=${PAYPAL_TEST_KEY}
#     set_paypal
#     google_tag_script='<script id="googleTagIdKey">function nada() {}</script>'
#     set_google_tag
#     npm run build:ssr
#     popd
#     git add .
#     git commit -m "Set settings to default before or after deploy"
# }

# check_node_version() {
#     . ~/.nvm/nvm.sh
#     nvm use v13.1.0
#     currentNodeVersion=$(node -v)
#     if [[ ${currentNodeVersion} == 'v13.1.0' ]]; then
#         return 1
#      else
#         return 0
#     fi
#     # echo -e "${GREEN}Success:${NC} On $1 branch"
# }

# kill_process() {
#     lsof -ti:4000 | xargs kill
# }

remove_tmp_files() {
    pushd ./server/tmp/words
    ls | grep -v ejemplo.docx | xargs rm
    popd
    git add .
    git commit -m "Removed tmp files"
}

# environment=$1

# # DEVELOPMENT
# if [ "$environment" = 'dev' ]; then 
#     echo -e "####### START DEPLOY IN DEVELOPMENT ########"
#     if check_if_current_branch_correct 'dev' == 0; then
#         echo -e "${RED}Error:${NC} you are not in Dev branch"
#     else
#         echo -e "${GREEN}Success:${NC} Correct branch"
#         if are_uncommited_changes == 0; then
#             echo -e "${GREEN}Success:${NC} Changes are commited"
#             if check_node_version == 0; then
#                 echo -e "${RED}Error:${NC} Current Node version is not correct"
#             else
#                 echo -e "${GREEN}Success:${NC} Current Node version correct"
#                 pushd ./tests
#                 kill_process
#                 output=$(npm run test:ci:local)
#                 kill_process
#                 if [[ $output == *"All specs passed!"* ]]; then
#                     echo "${GREEN}Cypress Success: ALL SPECS PASSED!!"
#                     popd
#                     heroku git:remote -a formbaseddocs-dev
#                     build_and_deploy ${environment}
#                     kill_process
#                 else
#                     echo "${RED}CYPRESS error: TESTS NOT PASSING!"
#                     while read -r line; do
#                         echo "$line"
#                     done <<< "$output"
#                     kill_process
#                     popd
#                 fi
#             fi
#         fi
#     fi

# # PRODUCTION
# elif [ "$environment" = 'prod' ]; then 
#     echo -e "####### START DEPLOY IN PRODUCTION ########"
#     if check_if_current_branch_correct 'prod' == 0; then
#         echo -e "${RED}Error:${NC} you are not in Master branch"
#     else
#         echo -e "${GREEN}Success:${NC} Correct branch"
#         if are_uncommited_changes == 0; then
#             echo -e "${GREEN}Success:${NC} Changes are commited"
#             if check_node_version == 0; then
#                 echo -e "${RED}Error:${NC} Current Node version is not correct"
#             else
#                 echo -e "${GREEN}Success:${NC} Current Node version correct"
#                 pushd ./tests
#                 kill_process
#                 output=$(npm run test:ci:local)
#                 kill_process
#                 if [[ $output == *"All specs passed!"* ]]; then
#                     echo "${GREEN}Cypress Success: ALL SPECS PASSED!!"
#                     popd
#                     heroku git:remote -a automatikdocs
#                     build_and_deploy ${environment}
#                     kill_process
#                 else
#                     echo "${RED}CYPRESS error: TESTS NOT PASSING!"
#                     while read -r line; do
#                         echo "$line"
#                     done <<< "$output"
#                     kill_process
#                     popd
#                 fi
#             fi
#         fi
#     fi
# fi
remove_tmp_files