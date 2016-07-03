# react-svg-pathline

React component for drawing SVG path through set of points, smoothing the corners

## Why?

SVG `polyline` is the simplest option for rendering "path" line through set of known points but it gives you a "broken" line with sharp corners.
Using SVG `path` you can get smooth corners but it requires adding more points to original set.
This component helps with rendering SVG path by generating correct SVG data from original set of points, producing "smooth path line" as result. 

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install react-svg-pathline
```

## Example

`npm i && npm i react react-dom && npm start`

Open a browser at localhost:8080