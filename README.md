# change-github-challenge

This guide is intended to get everyone familiar with using git and github, as well as simulating how this 
technology is typically used within Change++.

If this is your first time working with git, check out [this document](https://docs.google.com/document/d/1D89Tvytivgpwm0VHu8-KRdGXipxD7ze28uD_goA2j88/edit) we made to help get you up to speed!

To give a quick overview: you're going to be cloning this repo to your computer, creating your own branch, 
updating a sample page for your project, pushing that branch, and creating a pull request for it on GitHub. Shouldn't take more than an hour to complete; let's get started.

## 1. Clone the repository to your computer

On this repo, you'll find a green button that reads "Code". Click that button and copy the link provided.

Open up terminal or command line and navigate to wherever you plan to place this repo. Enter this command with the 
provided link replaced:

```bash
$ git clone <link>
```

Now your computer has a local version of the code.

## 2. Create a new branch

Now we want to create a new branch for your work. We do this so that the work you do on your branch doesn't 
accidentally mess up anyone else's work. You can run this command to see all the current branches:

```bash
$ git branch
```

Back in your terminal, run this command with your name replaced to create your own branch:

```bash
$ git branch <firstname-lastname>
```

Try running "git branch" again to see if you can see your new branch. To switch to your new branch, run:

```bash
$ git checkout <branchname>
```

## 2.5 Install Node.js and npm (if you don't already have it)

You'll need to have Node.js installed to run the javascript file on your computer; this should be really quick.
If you don't already have it you can either visit [this link](https://nodejs.org/en/download/) or run this command if 
you're on macOS:

```bash
$ brew install node
```

## 3. Update the sample page

Now that you're on your own branch, it's time to update the sample page. You can spin up a local version of the page 
by using terminal to navigating to the sample-page directory, running "npm install" to get all the necessary modules, 
and running "npm start":

```bash
$ cd sample-page
$ npm install
$ npm start
```
From here, any changes you make to the code will update in real time on the page. If you want to stop running the
page at any time by entering ^C in the same terminal. 

Open up App.js in your code editor of choice and create another member component with your information. 
If you're unfamiliar with Javascript and React, there's an example of how to do so in App.js.
If you're a bit more experienced with React, please fill free to add some creativity or styling to the page to make it your own.
Also don't forget to fill out the project name field. Once your whole team has completed the challenge, the page 
should have all of your information visible.


## 4. Push to GitHub
Now, without going back to the master branch, send your changes back to the repo. If you're unfamiliar, 
this will require a git add, commit, and push:

```bash
$ git add .
$ git commit -m '<message>'
$ git push
```

## 5. Create a pull request for your branch
Now that your branch and changes are in GitHub, it's time to create a pull request for your branch.

Travel to the pull request tab on the repository and click the green "New pull request" button. 
From there, make sure "master" is left of the arrow and your branch is on the right and then click "Create pull request"
Finally, assign the pull request to one of your other team members (or Jaden, jdnhix, if your teammates aren't an option)
and create the pull request.

Now you're finished! Your teammate should review the code you're trying to merge and once that's done it will 
become a part of the master branch. 

You might run into merge conflicts if two people have tried to change the same code,
but in this case they should be easy to fix. If you grun into any other issues over the course of this challenge, 
check the [git document](https://docs.google.com/document/d/1D89Tvytivgpwm0VHu8-KRdGXipxD7ze28uD_goA2j88), reach out to your PM, or any exec member.






