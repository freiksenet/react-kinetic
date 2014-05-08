react-kinetic
=============

An attempt to make React work with KineticJS HTML5 canvas library. The goal is
to have similar declarative markup as normal React and to have similar data-flow
model.

So far you can draw, no updating supported yet.

Code from https://github.com/facebook/react-art really helped me to understand
the inner workings of React to fix that.

Three rectangles are drawn if you `make demo`.

Notes
-----

KineticJS browserify build is broken as of now, so I include patched version.

Requires late-ish (0.11.0) version of React, you'll have to clone react, in it
do`npm install; grunt` and then in react-kinetic do
`npm install <path_to_react>/build/npm-react`.