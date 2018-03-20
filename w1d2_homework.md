1. What command do you use to setup a git repository inside of your folder?
git init

2. What command do you use to ask git to start tracking a file?
git add

3. What command do you use to ask git to move your file from the staging area to the repository?
git commit -m "notes"

//COMMIT1

1. What command do you use to pull any changes from the master repository into your local repository?
git pull origin master

2. What command do you use to unstage a file?
git reset <file>

3. What command do you use to change your files back to how they were after a commit?
git checkout -- <target>.

4. Why is it important to use -- when changing files back to a previous state?
tells git what 'commit' you want to go back to

5. Why might you want to reset your files back to a previous commit?
something stopped working or you messed your code all up and want to get it back to last happy state

//COMMIT2

1. What command do you use to create a branch?
git branch

2. What command do you use to use a different branch?
git checkout <branch>

3. Why would you want to use a branch other than the default master?
To collaborate on different things or a side project or application that you want to track and share, but thats not ready for master branch

//COMMIT3

1. Give an example for when you would use git merge and give an example for when it would be better to submit a pull request to have your branch merged

You would use git merge to add a branch to the master branch or visa versa...like adding a new function to the master

It would be better to submit a pull request when you dont have permission to merge or you want someone to review your branch or test your code before merging.

2. What command do you use to send all of the work that you've done locally to your remote repository?

git push

//COMMIT4
