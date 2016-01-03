import React from 'react'

const Hello = React.createClass ({
  render () {
    return <div><h1>Hello, {this.props.name}.</h1></div>
  }
})

React.render(<Hello name="Chetan" />, document.body)
