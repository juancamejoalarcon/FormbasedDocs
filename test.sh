pushd ./tests

output=$(npm run test:ci:local)

if [[ $output == *"All specs passed!"* ]]; then
  echo "CYPRESS: ALL SPECS PASSED"
else
    echo "CYPRESS: TESTS NOT PASSING"
    while read -r line; do
        echo "$line"
    done <<< "$output"
fi