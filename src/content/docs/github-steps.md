---
title: Github Steps
---

## When starting a new project, visit Github to "fork" code.


1. Click “Your Profile” in top right hand corner.
2. Click “Repositories”.
3. Click the repo you’d like to fork.
4. Fork in top right hand corner. Create fork.
5. Click Code then Copy git url.
6. Open “Command Prompt”
7. Type `dir` for a list of folders and press enter.
8. Type `cd folder the project should go in` then press enter.
9. Type `git clone https://github.com/vchinnick/eleventy-starter-project.git url`
10. In VS code, click ‘File’ then ‘Open folder’ then choose the folder your project is in.
11. At the top, click ‘Terminal’ then ‘New Terminal’
12. In VS code, create new branch.
    - `Git checkout -b (name)`
13. To make sure you’re on the right branch, type `git branch`.
14. Start adding stuff to the editor. Save when you’re done adding edits.
15. To see changes, run the project locally [npm start].
16. If in Node, switch to powershell.
17. Under Source Control, if it’s listed as Untracked–right click and Stage changes OR in terminal use command below..
    - `git add .` for all files
    - `git add file-name` for specific files.
18. Commit changes to branch
    - `git commit -am ‘message’`
19. Push changes to Github
    - `git push origin head`
    - OR use Publish button to publish branch-to origin
20. Go to github.
21. Review changes.
22. Create pr.
23. Someone will review and merge.
    - If you already created a PR and you make a change in VS then pushed to Github, you can just click Refresh in github and it will pull the changes automatically in the PR.
    - If you made changes and don’t want to commit them…go to source control and click Revert button to discard changes.


## If you already did a project, it’s already in VS code.

_(I don’t need to fork it, because it’s already in VS code. Forking and cloning is only done once per project.)_

1. In VS code, pull in latest changes.
   - `git fetch upstream`
2. Get code up to date.
   - `git rebase upstream/main`
3. Now that you have the latest code, create new branch.
   - `git checkout -b (name-name)`
4. To make sure you’re on the right branch, type ‘git branch’.
5. On the left side, there is a file tree. Select what you want to edit.
6. Content→Docs on Eleventy site.
7. Right click → New File
   - `Name.md`
8. Add Frontmatter-Add three hyphens press enter add three more hyphens. This syntax is for denoting frontmatter beginning and end.
9. Start adding stuff to the editor. Save when you’re done adding edits.
10. To run the project locally , type `npm start`.
11. Click Local URL and it shows changes on site.
12. If in Node, switch to powershell.
13. Under Source Control, if it’s listed as Untracked–right click and Stage changes OR in terminal use command below..
    - `git add .` for all files
    - `git add file-name` for specific files
14. Commit changes to branch
    - `git commit -am ‘message’`
15. Push changes to Github
    - `git push origin head`
    - OR use Publish button to publish branch-to origin
16. Go to github.
17. Review changes.
18. Create pr.
19. Someone will review and merge.
    - If you already created a PR and you make a change in VS then pushed to Github, you can just click Refresh in github and it will pull the changes automatically in the PR.
    - If you made changes and don’t want to commit them…go to source control and click Revert button to discard changes.
