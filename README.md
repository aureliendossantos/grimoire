# Destiny Grimoire Explorer

This website displays Grimoire Cards from the game Destiny (2014) by Bungie. The game and its API are still online, but the official website doesn't support the first Destiny anymore, so the only way left to access the Grimoire is through the API.

I started this project because most websites claiming to do the same thing are now dead or lack features. I also wanted to learn React. Hope it will be useful to some people!

## Features

Currently, you can:

- [x] Browse the entire Grimoire
- [ ] Change the language (currently in French) (Note: I can then use `<div lang="fr">`)
- [ ] Filter cards per collection (`Vanguard/Grimoire/Definition/`)
- [x] Enter a PlayStation (soon Xbox) username to see:
    - [x] Your total Grimoire score
    - [x] Your unlocked cards, and those you have left to unlock
    - [x] Your stats per card and their associated bonuses
- [ ] Auth to see more detailed stats
- [ ] Enter several usernames to compare your unlocks with your friends'

## Todo

- [ ] Improve the design
    - [ ] Stat gauges
    - [ ] Fonts
    - [ ] Nicer CSS
    - [ ] Add a favicon
    - [ ] Add meta tags to `<head>`
- [ ] Handle errors when the user/card ID is wrong

Maybe one day I'll add a Quest explorer. They contain lore too, and there is no way in the game to check if you've already done a quest nor if there are any left hidden somewhere. I haven't yet determined the feasibility of this idea.

## Installation

1. Install [Yarn](https://yarnpkg.com/getting-started/install) and [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).
2. Get the dependencies with `yarn install` in the project folder.
3. **Get an API key from Bungie:** log in on [bungie.net](https://www.bungie.net/) then go to [bungie.net/en/Application](https://www.bungie.net/en/Application) (you must be logged in for this link to work).
    - **To use you key locally:** make a copy of `grimoire-config-sample.json` and name the new file `grimoire-config.json`. Put your API key in it. This file will be ignored by git and won't be sent on GitHub.
    - **To use your key on Netlify:** when you set up your repo on Netlify, simply create an environment variable named `BUNGIE_API_KEY`. During the build, `create-config.sh` should create a `grimoire-config.json` containing your key.
4. **Run the local server:** run the server with `yarn dev` in the project folder. Get a production build with `yarn build`.

## How it works

### The API

The Destiny 1 API does not seem to be officially documented but a [community run wiki](http://destinydevs.github.io/BungieNetPlatform/) gives a few leads.

To get a JSON, append something to `https://www.bungie.net/d1/Platform/Destiny/` and fetch the URL with the header `'X-API-Key': {yourApiKey}`.

For example, `https://www.bungie.net/d1/Platform/Destiny/Vanguard/Grimoire/Definition/` will get you the Grimoire Definition.

#### Variables

- `{membershipType}`: `1` for Xbox, `2` for PlayStation
- `{destinyMembershipId}`: a long unique string. To get it, query `{membershipType}/Stats/GetMembershipIdByDisplayName/{username}/` where `{username}` is a PlayStation or Xbox username.

### Grimoire Cards Definition

The Grimoire Cards Definition is a 3MB JSON available in seven languages (`en`, `fr`, `es`, `de`, `it`, `ja`, `pt-br`) that I included in the repo. I could query the API when loading the page, but I figured the Grimoire was not going to change anymore, so it should be safer and faster that way. I still query the API to load user data, and pictures are stored on Bungie's servers (maybe I should save those too).

Card properties are documented in `apiType.ts`.

### User Cards

To get a user's card collection, query `Vanguard/Grimoire/{membershipType}/{accountId}/` then go to the property `.Response.data.cardCollection`.

### Bonuses

To get card bonuses, query `Vanguard/Grimoire/{membershipType}/{accountId}/` then go to the property `.Response.data.bonuses`.

The only way I found to connect a bonus to the correct card stat is to check if the bonus' `statName` is equal to the card's `statName` in the English version of the Grimoire Cards Definition.

### Characters

To get an account's characters and their ID, query `{membershipType}/Account/{destinyMembershipId}/Summary/`. Currently not used; might come in handy later!

### Quests

It seems that quests are items, and quest steps are also items. Needs investigation.
