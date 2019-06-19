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
      <div className='multicomp'>
        <div className='title'>Some Things I've Been Working On</div>

        <div className='tiles'>
          {projects.map(p => {
            if (p.name === this.state.selected) {
              return (
                <div className='singleProject' key={p.url}>
                  <div>
                    <img src={p.img} className='productImage' />
                    <a href={p.url} className='launchbody'>
                      <div className='launch'>Launch</div>
                    </a>
                    <div className='projectCap-selected'>{p.desc}</div>
                    <div className='projectCapBack'>{'    '}</div>
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
                    <div className='projectCap'>{p.name}</div>
                    <div className='projectCapBack'>{'    '}</div>
                    <img src={p.img} className='productImage' />
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
