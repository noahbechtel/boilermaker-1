import React, { Component } from 'react'
import { Route } from 'react-router-dom'

class Main extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <div className='container'>
          <div className='photo'>Photo</div>

          <div className='caption'>
            <div className='spacer'>{'  '}</div>
            <div className='line' />
            <div className='text'>
              <div className='hello'>Hi, I'm Noah </div>
              <br />
              <div className='myTitle'>
                I am a fullstack JavaScript Developer
              </div>
              <br />
              <div className='long'>
                I specialize in Web App development primarily using React and
                Redux. Have a look at a few of my projects.
              </div>
            </div>
            <hr />
            <div className='line' />
            <div className='spacer'>{'  '}</div>
          </div>
        </div>
        <div className='navigator'>
          <a href='/projects'>Projects</a>
          <a href='/about'>About Me</a>
          <a href='/skills'>My Skills</a>
        </div>
        <div className='multicomp' />
      </div>
    )
  }
}

export default Main
