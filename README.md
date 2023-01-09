# Sveltekit template - site Mi2


## Prerequisites

### nodeJS

Using nodeJS provider ay of install works, but a time eventually come where you'll have to manage mulitple projects, with multiple nodeJS versions.
To ease the use of update and switching, we will use Node Version Manager.

Download and install [nvm for Windows](https://github.com/coreybutler/nvm-windows/releases). 
Use the latest `nvm-setup.exe` file. Complete install.

- Open your prefered terminal with administrative rights.
- Run `nvm install latest`, and wait for download
- Run `nvm use latest`.
- You can check what version of Node JS is installed with `node -v`

>For more informations, consult nodeJS [documentation](https://nodejs.org/en/docs/).

### pnpm

Using pnpm is the recommended way to manage your node packages, creating aliases folders for reused packages, improved speed and better storage management.

In a terminal window with administrative rights:
```
npm install -g pnpm
```
To use it, replace your `npm ...` commands with `pnpm ...`

> For more informations, consult pnpm [documentation](https://pnpm.io/pnpm-cli).


### Git and GitHub 

#### 1. Git

Git is the software to manage, create and sync your filesystem with your GitHub account. It has a CLI based interface, but we'll use GUI clients like GitHub Desktop and Visual Studio Code integration to work with it.

> Download [64-bit installer](https://git-scm.com/download/win) and install it.

> For more informations, consult git [documentation](https://git-scm.com/docs).

#### 2. GitHub Desktop

GitHub Desktop is the official git GUI client from GitHub.
You will be able to create, clone, and update repositories, push and pull code, and manage multiple project easilly.

> Download and install [GitHub Desktop](https://desktop.github.com/).

**Basic usage** :

Once logged in with your GitHub account, use the <kbd>Add</kbd> button to:
| Actions | Description |
|---|---|
| Clone repository... | Get a list from your current cloud repositories, or clone one from an URL |
| Create new repository... | Insantiate a new repository directly from the app. |
| Add existing repository... | Sync a local repository to our GitHub account. |

For this project : 
- Use the first option `Clone repository...`, then the URL tab.
- Paste the GitHub url : `https://github.com/AristideBH/ecv-monsite`
- Choose a local folder where to clone the repository on your computer.

Once dowloaded, you can simply click <kbd>Open in Visual Studio Code</kbd> to launch the project.

#### 3. Visual Studio Code

For a better workflow with Svelte and Sveltekit in Visual Studio Code, we recommend the use of 
[this packaged plugin](https://marketplace.visualstudio.com/items?itemName=1YiB.svelte-bundle).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm i` or `yarn`), start a development server:

```
npm run dev
```
or
```
pnpm dev
```


## Buildind and deploying

### Building

To create a production version of your app:
```
npm run build
```
or
```
pnpm build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

### Deploying

Using your GitHub account with Vercel's free hosting service allows for a quick staging and production deployement to live url.

> Preparing docs for Vercel usage...
