# react-svg-pathline

React component for drawing SVG path through set of points, smoothing the corners

## Why?

SVG `polyline` is the simplest option for rendering "path" line through set of known points but it gives you a "broken" line with sharp corners.
Using SVG `path` you can get smooth corners but it requires adding more points to original set.
This component helps with rendering SVG path by generating correct SVG data from original set of points, producing "smooth path line" as result. 

So instead of this:

```html
    <svg>
        <polyline 
            points="0,0 125,0 125,125 250,125"  
            stroke="red" 
            strokeWidth="3"
            fill="none" />
    </svg>
```

![polyline](https://cloud.githubusercontent.com/assets/2222587/16547319/27903e50-4172-11e6-86b6-4c4e3d3d6484.png)

You get this:

```javascript
import React from 'react'
import {PathLine} from 'react-svg-pathline'

export class MyComponent extends React.Component {
  render() (
    <svg>
        <PathLine 
            points={[{x:0, y:0}, {x:125, y: 0}, {x:125, y:125}, {x:250, y:125}]} 
            stroke="red" 
            strokeWidth="3"
            fill="none"
            r={10}
            />
    </svg>
  )
}
```

![pathline](https://cloud.githubusercontent.com/assets/2222587/16547326/5a1f4c80-4172-11e6-9892-6dbd9c6f27f1.png)

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install react-svg-pathline
```

## Live Example

```sh
$ npm i && npm i react react-dom && npm start
```

Open a browser at localhost:8080