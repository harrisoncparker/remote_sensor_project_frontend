## This is the beginning

A message from [harrisoncparker](https://github.com/harrisoncparker) to collaborators 👀 

I spent a while playing around with three JS and setting up a project that is both _simple_ and _modern_.

I wanted the comfort and freedom that using a code bundler but again I wanted to keep things simple so the bundler i went for is [Parcel](https://parceljs.org/) as it doesn't require a configuration file and will do everything we need without much thought.

I wanted to set this up so we had the could safely work with the latest JS syntax and could easily use things like `scss` and javascript `imports` to split our code into manageable chunks. There's a lot more power and potential to using a bundler but in the interest of keeping things simple those are the only reasons for this project.

This is actually the first time I've used [Three.js](https://threejs.org/) All I wanted to do was make sure I could load in an object I had created in [Blender](https://www.blender.org/).

## Setting it all up

Run the following commands to get this project set up:

If you don't already have `yarn` install it with [homebrew](https://brew.sh/) `brew install yarn`. If you don't want to use yarn that's fine, lets discuss 👍

Then from inside the project root (where this readme is) run the following:

1. `yarn install`
2. `yarn dev`
3. 🤞

After that the site should be running nicely on `http://localhost:1234/`

## A tour around the files

So all the file that we will edit are inside the `./src` directory.

* `./src/index.html`
  * This is the main (and probably only) HTML file in this project
* `./src/js/`
  * The meaty bit. All the javascript. All other files should be loaded into index.js
* `./src/styles/`
  * All the scss files. everything is loaded into the `index.scss` file and then that is loaded through the `index.js` file. Kinda weird, but I think it's nice and clean.
* `./src/assets/`
  * this is where we can put images and 3d files and things. Eventually a lot of stuff should be being pulled from
    the [remote_sensor_project](https://github.com/HJ959/remote_sensor_project?files=1) so this shouldn't get that full. 
* `./src/site.manifest`
  * This is just here to load icons (it's overkill)
* `./src/icons/`
  * Just some icons i generated form an online icon generator (again overkill)
