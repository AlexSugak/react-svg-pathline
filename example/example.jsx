import React from 'react'
import ReactDOM from 'react-dom'
import {PathLine} from '../index'

export const App = React.createClass({
    render: function(){
        return (
            <div style={{paddingLeft:'100px'}}>
                <svg width="300" height="300" style={{paddingTop: '10px'}}>
                    <polyline 
                        points="0,0 125,0 125,100 125,125 250,125" 
                        stroke="red" 
                        strokeWidth="3"
                        fill="none" />
                </svg>
                
                <svg width="300" height="300" style={{paddingTop: '10px'}}>
                    <PathLine 
                        points={[{x:0, y:0}, {x:125, y: 0}, {x:125, y:125}, {x:250, y:125}]} 
                        stroke="red" 
                        strokeWidth="3"
                        fill="none"
                        r={0.1}
                        />
                </svg>
            </div>
        )
    }
})

ReactDOM.render(
  <App>
  </App>,
  document.getElementById('example-container')
)