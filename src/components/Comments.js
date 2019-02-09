import React from 'react'

class Comments extends React.Component {

  render() {
    return (
      <div>
      {this.props.comment.body}
      </div>
    )
  }

}
export default Comments
