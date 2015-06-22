# Ionic Garden

This project is for every ionite who wants to play with Ionic's Source

## Run Ionites, Run!

To run this project, first lets clone it, with the special `--recursive` flag to bring us submodules sources

```sh
git clone --recursive git@github.com:felquis/ionic-garden
```

Install dependencies

```sh
npm install -d
```

Now lets install our npm minions, to do the dirty work for us

```sh
npm run install-submodules
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
