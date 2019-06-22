import React, { Component } from 'react'
import { Route } from 'react-router-dom'

class Main extends Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div>
        <div id='header'>
          <div className='photo'>Photo</div>

          <div className='caption'>
            <span />

            <h2>Hi, I'm Noah </h2>
            <h2 className='red'>I am a fullstack JavaScript Developer</h2>
            <h3>
              I specialize in Web App development primarily using React and
              Redux. Have a look at a few of my projects.
            </h3>
            <span />
          </div>
        </div>
        <div id='navigator'>
          <a
            onClick={() => {
              this.props.history.push('/projects')
            }}
          >
            My Projects
          </a>
          <a
            onClick={() => {
              this.props.history.push('/about')
            }}
          >
            About Me
          </a>
          <a
            onClick={() => {
              this.props.history.push('/skills')
            }}
          >
            My Skills
          </a>
          <a
            onClick={() => {
              this.props.history.push('/contact')
            }}
          >
            Hire Me
          </a>
        </div>
      </div>
    )
  }
}

export default Main
