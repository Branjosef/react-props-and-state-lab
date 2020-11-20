import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (filteredValue) => {
    this.setState({  
      filters:{
        type: filteredValue
      }   
    })
  }

  onFindPetsClick = () => {
    let url 
    this.state.filters.type === 'all' ? url = "/api/pets" : url = `/api/pets?type=${this.state.filters.type}`
    
    fetch(url)
    .then(resp => resp.json())  //need to remember the parentheses for the JSON ()
    .then(petData => {
      this.setState({
        pets: petData
      })
    })
  }

  onAdoptPet = (id) => {
    const pets = this.state.pets.map(pet => {
        return pet.id === id ? {...pet, isAdopted: true} : pet
    });
    this.setState({
      pets: pets
    })
  }
 

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
