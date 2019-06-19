import React, { Component } from 'react'
import { skills } from '../support/skills'

class MySkills extends Component {
  constructor () {
    super()
    this.state = { selected: false, coords: { x: 0, y: 0 }, started: false }
  }

  componentDidMount () {
    const bigBubbleSize = 150
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    const width = canvas.width
    const height = canvas.height

    let balls = []

    const mouseDown = evt => {
      this.setState({})

      const rect = canvas.getBoundingClientRect()
      const mX = event.clientX - rect.left
      const mY = event.clientY - rect.top

      for (let i = 0; i < balls.length; i++) {
        if (
          mX >= balls[i].x - balls[i].size &&
          mX <= balls[i].x + balls[i].size &&
          (mY >= balls[i].y - balls[i].size && mY <= balls[i].y + balls[i].size)
        ) {
          if (this.state.selected !== balls[i].label) {
            this.setState({
              selected: balls[i].label,
              coords: {
                x: mX,
                y: mY
              }
            })
            let topBall = balls.slice(i, i + 1)
            balls.splice(i, 0).splice(0, 0, topBall)
          } else {
            this.setState({ selected: false, coords: { x: 0, y: 0 } })
          }
        }
      }
    }
    canvas.addEventListener('mousedown', mouseDown)

    const random = (min, max) => {
      let num = Math.random() * (max - min) + min
      return num
    }

    class Ball {
      constructor (x, y, skill) {
        this.x = x
        this.y = y
        this.velX = random(-1, 1)
        this.velY = random(-1, 1)
        this.color = '#ff4949'
        this.size = skill.name.length * 8
        this.label = skill.name
        this.prof = skill.prof
        this.type = skill.type
        this.hit = false
        this.font = 20
      }
      draw = selected => {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
        ctx.fill()
        ctx.closePath()
        const drawTextBox = () => {
          const start_degrees = 330
          const start_angle = (Math.PI / 180) * start_degrees

          const end_degrees = 210
          const end_angle = (Math.PI / 180) * end_degrees

          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size - 10, start_angle, end_angle, false)
          ctx.closePath()
          ctx.lineWidth = 5
          ctx.fillStyle = '#eeeeee'
          ctx.fill()
        }

        if (selected === this.label) {
          if (this.size < bigBubbleSize) {
            this.size += 4

            drawTextBox()
          }
          drawTextBox()

          this.velX = 0
          this.velY = 0
          ctx.fillStyle = '#eeeeee'
          ctx.font = '40px myFont'
          ctx.fillText(
            this.label,
            this.x - this.label.length * 10,
            this.y - this.size / 2
          )

          ctx.fillStyle = '#444444'
          ctx.font = '20px myFont'
          ctx.fillText('-' + this.prof, this.x - this.size + 40, this.y)
          ctx.fillText('-' + this.type, this.x - this.size + 40, this.y + 40)
        } else {
          ctx.fillStyle = '#f5f5f5'
          ctx.font = this.font + 'px myFont'
          ctx.fillText(this.label, this.x - this.size / 1.5, this.y + 10)
          if (this.velX === 0) {
            this.velX = random(-1, 1)
            this.velY = random(-1, 1)
          }
          if (this.size > this.label.length * 8) {
            this.size -= 4
          }
        }
      }
      update = state => {
        const selected = state.selected

        if (this.x + this.size >= width) {
          this.velX = -this.velX
          this.x -= 3
        }
        if (this.x - this.size <= 0) {
          this.velX = -this.velX
          this.x += 3
        }
        if (this.y + this.size >= height) {
          this.velY = -this.velY
          this.y -= 3
        }
        if (this.y - this.size <= 0) {
          this.velY = -this.velY
          this.y += 3
        }
        this.x += this.velX
        this.y += this.velY

        if (this.label !== selected) {
          for (let j = 0; j < balls.length; j++) {
            let a = this.size + balls[j].size
            let x = this.x - balls[j].x
            let y = this.y - balls[j].y

            if (balls[j].label === selected) {
              if (a > Math.sqrt(x * x + y * y)) {
                if (this.size > 10) this.size--
                if (this.font > 1) this.font -= 0.5
              } else {
                if (this.size < this.label.length * 8) this.size++
                if (this.font < 20) this.font += 0.5
              }
            } else if (selected === false) {
              if (this.size < this.label.length * 8) this.size++
              if (this.font < 20) this.font += 0.5
            }
          }
        }
      }
    }

    const loop = () => {
      ctx.fillStyle = 'rgb(245, 245, 245)'
      ctx.fillRect(0, 0, width, height)
      ctx.beginPath()
      ctx.rect(0, 0, canvas.width, canvas.height)
      ctx.closePath()
      ctx.lineWidth = 10
      ctx.strokeStyle = '#ff4949'
      ctx.stroke()

      let row = 1
      let column = 1
      let lab = 0

      if (!this.state.started) {
        for (let i = 0; i < skills.length; i++) {
          if (row > 5) {
            row = 1
            column++
          }
          let ball = new Ball(row * 200, column * 200, skills[lab])

          balls.push(ball)

          lab++
          row++
        }
        this.setState({ started: true })
      }

      for (let i = 0; i < balls.length; i++) {
        // balls[i].collisionDetect(this.state.selected)
        balls[i].draw(this.state.selected)
        balls[i].update(this.state)
        // balls[i].handleClick(this.state.coords.x, this.state.coords.y)
      }

      requestAnimationFrame(loop)
    }
    loop()
  }

  render () {
    return (
      <div className='multicomp'>
        <div className='title'>What I Bring to the Table</div>

        <canvas
          ref='canvas'
          className='canvas'
          width={screen.width}
          height={600}
          onKeyPress={this.keyPress}
          tabIndex='0'
        />
        {/* </div> */}
        <div className='title'>
          <br />
        </div>
      </div>
    )
  }
}
export default MySkills
