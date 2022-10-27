set -e

echo '------------ Starting Push ------------'
git add .
git status
# shellcheck disable=SC2162
read -t 40 -p "[master] Enter commit >>> " message
if [ "$message" != "" ]; then
  git commit -m "[update]: $message"
  # git pull
  git push origin master --force
  exit 0
else
  git reset
  echo "[dev] You haven't entered any comments !"
  exit 1
fi


echo '------------ Finished ------------'