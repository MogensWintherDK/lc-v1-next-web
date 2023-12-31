# github submodule repo address without https:// prefix
SUBMODULE_GITHUB_CMS=github.com/mogenswintherdk/lib-cms
SUBMODULE_GITHUB_LNX=github.com/mogenswintherdk/lib-lnx
SUBMODULE_PATH=libs

# Git access token fom Environment Variables on Vercel
if [ "$GITHUB_ACCESS_TOKEN" == "" ]; then
  echo "Error: GITHUB_ACCESS_TOKEN is empty"
  exit 1
fi

# stop execution on error - don't let it build if something goes wrong
set -e

# get submodule commit
output=`git submodule status --recursive` # get submodule info
no_prefix=${output#*-} # get rid of the prefix
COMMIT=${no_prefix% *} # get rid of the suffix

# Remove submodule directories if exists
rm -rf libs/lib-* || true
rm -rf .gitmodules || true

# set up an empty temporary work directory
rm -rf tmp || true # remove the tmp folder if exists
mkdir tmp # create the tmp folder
cd tmp # go into the tmp folder

# Clone lib-cms
git clone https://$GITHUB_ACCESS_TOKEN@$SUBMODULE_GITHUB_CMS # add origin of the submodule

# Clone lib-lnx
git clone https://$GITHUB_ACCESS_TOKEN@$SUBMODULE_GITHUB_LNX # add origin of the submodule

# Remove .git information and move the submodules into place
cd .. # go folder up
rm -rf tmp/.git # remove .git 
mv tmp/* $SUBMODULE_PATH/ # move the submodule to the submodule path

# clean up
rm -rf tmp # remove the tmp folder