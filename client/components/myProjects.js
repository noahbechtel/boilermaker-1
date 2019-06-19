import React, { Component } from 'react'
import { projects } from '../support/projects'

class MyProjects extends Component {
  constructor () {
    super()
    this.state = {
      selected: '',
      mobile: false
    }
  }
  render () {
    if (
      !window.matchMedia('(display-mode: standalone)').matches &&
      !!navigator.platform &&
      /iPad|iPhone|iPod/.test(navigator.platform)
    ) {
      this.setState({ mobile: true })
    }
    return (
      <div className='multicomp'>
        <div className='title'>Some Things I've Been Working On</div>
        {this.state.mobile ? (
          <div className='tiles-mobile'>
            {projects.map(p => {
              if (p.name === this.state.selected) {
                return (
                  <a href={p.url} className='singleProject' key={p.url}>
                    <div>
                      <img src={p.img} className='productImage' />
                      <div className='projectCap-selected'>{p.desc}</div>
                      <div className='projectCapBack'>{'    '}</div>
                    </div>
                  </a>
                )
              }
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
            })}
          </div>
        ) : (
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
              }
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
            })}
          </div>
        )}
      </div>
    )
  }
}

export default MyProjects
