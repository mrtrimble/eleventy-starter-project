---
title: GitHub Steps
---

## When starting a new project, visit GitHub to "fork" code.


1. Browse to the repository you'd like to fork.
2. Click the "Fork" button in the top right corner.
3. On the next page, keep the default settings and click "Create Fork" button.
4. While on your forked copy of the repo, click the "Code" button and copy Git URL.
5. Open a Terminal (MacOS) or Command Prompt (Windows)
6. To list the contents of a directory, enter `1s` (MacOS) or `dir` (Windows).
7. Browse into the folder you would like to store the project.
   - You can navigate the directory structure from the command line by using `cd`.
8. To clone a repo, enter `git clone` followed by the Git URL of the repo.
   - Example: `git clone https://github.com/vchinnick/eleventy-starter-project.git`

## Making Changes To A Project

1. In VS code, click ‘File’ then ‘Open folder’ then choose the folder your project is in.
2. At the top, click ‘Terminal’ then ‘New Terminal’
3. Inside the terminal, create new branch to track your changes.
    - `Git checkout -b (name)`
4. To verify you're on the correct working branch, type `git branch` to see your list of branches.
5. Proceed with editing files within the project.

## Running A Project

1.  Different types of projects may have different ways to run a project, always refer to the project `README.md` file to learn how to get up and running on your local machine.
2.  If  you are working on a node project, check the `packages.json` file to see a list of scripts available to run within the project.
    - If it is the first time running a node project, make sure to run `npm install` to install all dependencies.
    - Generally `npm start` or `npm run dev` will be available as scripts to start the node server.

## Committing Changes to a Branch

1. Check for any untracked files:
    - You can check the status of your changes by running `git status` inside the terminal.
    - You can also check the status of changes within VS Code's Source Control tab, 
      - Files marked with `M` mean they have been "modified" in the branch.
      - Files marked with `U` mean they are "untracked" in the branch.
      - Files marked with `D` mean they have been "deleted" from the branch.
      - Files marked with `A` mean they have been "added" to the branch.
2.  If a file is untracked – it will need to be added to the branch as a tracked file.
    - In the terminal you can add files by entering:
      - `git add file-name` for specific files.
      - `git add .` for all files
    - You can add files through VS Code's Source Control tab as well, by right-clicking the file and choosing "Stage Changes"
3. If there are changes you do not want to be committed to the branch, you can revert individual files or all files before committing.
4. Once all changes have been staged, you can commit changes to the branch running:
    - `git commit -am ‘commit message here’`
5. Push changes to GitHub
    - In the terminal, enter `git push origin head` to push the current working branch to the remote origin repository on GitHub
    - You can also push a branch through VS Code's Source Control tab by pressing the "Publish Branch" button whenever it is available.

## Creating A Pull Request

1.  Browse to your repo on GitHub.
2.  Look for the yellow box that says "Create Pull Request"
3. Provide a title and description for the Pull Request
4. If available, feel free to tag someone to review the changes in the Pull Request
    - You can continue to push changes to the Pull Request until it is approved and merged.


## Fetching The Latest Changes To A Project

1. In the terminal, switch back to your master (or main) branch of your cloned repository
    - `git checkout master` or `git checkout main`
2. Fetch the latest changes from the `upstream` branch.
    - `git fetch upstream`
3. Update your local repository by rebasing 
    - `git rebase upstream/master` or `git rebase upstream/main`

