import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Contact extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      name: '',
      message: '',
      sent: false
    }
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit = async evt => {
    const { email, message, name } = this.state
    evt.preventDefault()
    this.setState({ sent: 'loading' })
    if (email !== '' && message !== '') {
      try {
        res = await axios.post(`/api/messages`, {
          email,
          name,
          message
        })
        this.setState({ sent: true, email: '', message: '', name: '' })
      } catch (err) {
        this.setState({ sent: 'err' })
      }
    }
  }

  render = () => {
    const { email, message, name, sent } = this.state
    return (
      <div id='multicomp'>
        {sent ? (
          <div>
            <h1>
              <p>Thank you!</p>
            </h1>
            <div id='aboutMe'>I'll Be in touch with you shortly!</div>
          </div>
        ) : (
          <div>
            <h1>
              <p>Let's Get In Touch</p>
            </h1>
            <form onSubmit={this.handleSubmit}>
              <div className='info'>
                <h1>Email:</h1>
                <input
                  onChange={this.handleChange}
                  type='email'
                  name='email'
                  value={email}
                />
                <h1>Name:</h1>
                <input
                  onChange={this.handleChange}
                  type='text'
                  name='name'
                  value={name}
                />
              </div>
              <div className='message'>
                <h1>Message:</h1>
                <textarea
                  onChange={this.handleChange}
                  type='text'
                  name='message'
                  value={message}
                />
              </div>
              <button type='submit'>
                {sent === 'loading' ? 'Loading' : 'Send'}
              </button>
            </form>
          </div>
        )}
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    send (state) {
      dispatch(send(state))
    }
  }
}

export default withRouter(
  connect(
    null,
    mapDispatch
  )(Contact)
)
