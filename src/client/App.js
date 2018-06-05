import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/stats")
      .then(response => response.json())
      .then(data => this.setState({ isLoaded: true, items: data.servers }))
  }

  render() {
    const { error, isLoaded, items } = this.state;

    return (
      <div>
        {items.map(item =>
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>test v0.2</p>
          </div>
        )}
      </div>
    );
  }
}


export default App;