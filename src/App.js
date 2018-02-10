import React from 'react';
import metadata from './services/metadata'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      searchKey: ''
    }
  }

  componentDidMount() {
    metadata
        .getAll()
        .then(response => {
          console.log(response)
          this.setState({images: response})
        })
        .catch(error => {
          console.log("error in App.componentDidMount")
        })
  }

  handleSearchField = (event) => this.setState({ searchKey: event.target.value })


  render() {

    const images = () => {
      return this.state.images.map(src => <img src={src} key={src} alt={src} />)
    }

    return (
      <div>
        <h1>Viral Images From Imgur</h1>
          <div id="search">
            <input  value={this.state.searchKey} 
                    onChange={this.handleSearchField} />
            <button>search</button>
          </div>
          <div id="images">
            {images()}
          </div>
      </div>
    )
  }
}

export default App;
