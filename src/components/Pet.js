import React from 'react'

class Pet extends React.Component {

handleClick = (event) => {
  console.log(event.target.id)
}


  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            { this.props.gender === 'male' ? '♀' : '♂'}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        { this.props.isAdopted === false ? 
          <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button" onClick={(event) => this.props.onAdoptPet(this.props.id)}>Adopt pet</button>
          </div> : 
          <div className="extra content">
          <button className="ui primary button">Already adopted</button>
          <button className="ui disabled button">Adopt pet</button>
          </div>
        }

      </div>
    )
  }
}

export default Pet
