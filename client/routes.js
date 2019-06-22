import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Main from './components/main'
import MyProjects from './components/myProjects'
import MySkills from './components/mySkills'
import AboutMe from './components/aboutMe'
import Contact from './components/contact'

class Routes extends Component {
  render () {
    return (
      <div>
        <Route path='/' component={Main} />
        <Route exact path='/projects' component={MyProjects} />
        <Route exact path='/skills' component={MySkills} />
        <Route exact path='/about' component={AboutMe} />
        <Route exact path='/contact' component={Contact} />
      </div>
    )
  }
}

// const mapState = state => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
//     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData () {
//       dispatch(me())
//     }
//   }
// }

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
// export default withRouter(
//   connect(
//     mapState,
//     mapDispatch
//   )(Routes)
// )
export default Routes

/**
 * PROP TYPES
 */
