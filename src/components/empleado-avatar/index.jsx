import React from 'react'

class EmpleadoAvatar extends React.Component {  
  render() {
      return (
      <figure className="media-left">
        <img className="media-object" width="64px" src={`https://randomuser.me/api/portraits/thumb/men/${this.props.picture}`} />
      </figure>
    )
  }
}

export default EmpleadoAvatar