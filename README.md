# Daily Journal Template for Book 3

## Setup

1. Clone down this repo.
1. `cd` into the repo.
1. Change the remote origin of this repo with the following steps:
    1. Run the following command in daily-journal-template-for-book-three directory: `rm -rf .git` 
    1. Go to your Github account and create a new repo.
    1. In your daily-journal-template-for-book-three directory, do the following:
        1. `git init`
        1. `git add .`
        1. `git commit -m "Daily Journal Template for Book 3"`
        1. `git remote add origin [URL of the repo you just created on Github]`
        1. `git push -u origin master`

        You are now ready to checkout a branch and start coding.

1. You will be using json-server to have a locally running API that serves your data. To run json-server from command line: 
    1. `cd` into the `api` directory
    1. Run `json-server -w entries.json`

    Go to `localhost:3000/entries` to see your data.

1. You will also need to use http-server:
    1. `cd` into the `src` directory
    1. Run `http-server`
