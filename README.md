# Ionic Garden

This project is for every ionite who wants to play with Ionic's Source

## Run Ionites, Run!

To run this project, first lets clone it, with the special `--recursive` flag to bring us submodules sources

```sh
git clone git@github.com:felquis/ionic-garden
```

Install dependencies

```sh
npm install -d
```

Run the project on your browser
```sh
ionic serve
```

Access `localhost:8100`, and check out your new cool project running :)

> Here begin Ionic Garden benefits.

## Load a specific Ionic version

You can load a specific version of Ionic by using `ionic` parameter
in the URL and put `nightly`, 'local' or any ionic version

Like this:
```
localhost:8100?ionic=1.0.0-rc.4
```

It'll load Ionic from `//code.ionicframework.com/1.0.0-rc.4/js/ionic.bundle.min.js`

You can choose a version at [code.ionicframework.com](http://code.ionicframework.com/), if not used, it will load 'local' by default

It doesn't work with `ionic serve --lab` yet

## Edit Ionic source code

Open `js` and `scss` folder of `./modules/ionic/` and change Ionic source, `ionic serve` will run `gulp bundle` inside ionic source, and it will reload in your browser.

To load this source in your browser, remember to use `?ionic=build` in the URL

## Follow the Style Guide
We recomend you to use this [Angular Code Style](https://github.com/johnpapa/angular-styleguide), it was created by a bunch of experienced angular developers, well, we recomend it. Feel free to adapt this Style Guide to attend your necessities

## Source Modules
Source modules is used to clone modules source code from GitHub, these sources are listed in `ionic.project` like this:
```js
"sourceModules": {
  "ionic": "git@github.com:driftyco/ionic.git",
  "ng-cordova": "git@github.com:driftyco/ng-cordova.git"
}
```

[Checkout our default](https://github.com/felquis/ionic-garden/blob/master/ionic.project) `ionic.project` file

`sourceModules` right now, only works with ionic source, but ng-cordova [will be added](https://github.com/felquis/ionic-garden/issues/18) soon
