import React, { Component } from 'react'
import { projects } from '../support/projects'

class MyProjects extends Component {
  constructor () {
    super()
    this.state = {
      selected: ''
    }
  }
  render () {
    return (
      <div id='multicomp'>
        <h1>
          <p>Some Things I've Been Working On</p>
        </h1>

        <div id='projects'>
          {projects.map(p => {
            if (p.name === this.state.selected) {
              return (
                <div key={p.url}>
                  <div className='singleProject'>
                    <img src={p.img} />
                    <a href={p.url}>Launch</a>
                    <h1>{p.desc}</h1>
                  </div>
                </div>
              )
            } else {
              return (
                <div
                  className='singleProject'
                  key={p.url}
                  onClick={() => {
                    this.setState({ selected: p.name })
                  }}
                >
                  <div>
                    <img src={p.img} />
                    <h2>{p.name}</h2>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    )
  }
}

export default MyProjects
