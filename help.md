# Start help for Git
## CMD: git clone \<repo> \<local-folder>
Open with VS Code, CTRL + ö to get console

## Create branch branches
git checkout -b \<new-branch-name>  

## Switch branches
To get branches, write: git branch  
To switch between branches: git checkout \<branch-name>

## Commit
Go to the source control to add, remove, and commit changes. (git add .  git commit -m "\<commit-message>")

## Merge branch, not recommended
git merge \<branch-to-merge> // currently in the branch to merge to  
git branch -d \<branch-to-delete>

## Push local branch to repo
git pull origin master // not required, but used to update current master branch to check compatability  
git push origin \<branch-to-push>