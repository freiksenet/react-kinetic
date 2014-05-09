react-kinetic
=============

Click on rectangles at http://freiksenet.github.io/react-kinetic/.

An attempt to make React work with KineticJS HTML5 canvas library. The goal is
to have similar declarative markup as normal React and to have similar data-flow
model.

Currently you can use all Kinetic components as React components and all Kinetic
events are supported on them in same way as normal browser events are supported.

Code from https://github.com/facebook/react-art really helped me to understand
the inner workings of React to fix that.

Three rectangles are drawn if you `make demo`.

Notes
-----

KineticJS browserify build is broken as of now, so I include patched version.

Requires late-ish (0.11.0) version of React, you'll have to clone react, in it
do`npm install; grunt` and then in react-kinetic do
`npm install <path_to_react>/build/npm-react`.

Uses .react namespace for Kinetic events, note that when doing something
advanced with raw kinetic nodes.