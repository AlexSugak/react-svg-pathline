# react-svg-pathline

React component for drawing SVG path through set of points, smoothing the corners

## Why?

SVG `polyline` is the simplest option for rendering "path" line through set of known points but it gives you a "broken" line with sharp corners.
Using SVG `path` you can get smooth corners but it requires adding more points to original set.
This component helps with rendering SVG path by generating correct SVG data from original set of points, producing "smooth path line" as result. 

So instead of this:

![polyline](https://cloud.githubusercontent.com/assets/2222587/16547319/27903e50-4172-11e6-86b6-4c4e3d3d6484.png)

You get this:

![pathline](https://cloud.githubusercontent.com/assets/2222587/16547326/5a1f4c80-4172-11e6-9892-6dbd9c6f27f1.png)

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install react-svg-pathline
```

## Example

`npm i && npm i react react-dom && npm start`

Open a browser at localhost:8080