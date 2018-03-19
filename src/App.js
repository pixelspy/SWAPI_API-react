import React, { Component } from 'react';
import Cards from './Card';
import { Container } from 'semantic-ui-react'
import PropTypes from 'prop-types';

const ContainerExampleFluid = () => (
  <div>
    <Container fluid>
    </Container>
  </div>
)


class App extends Component {
  constructor(){
    super();
    this.state = {
      people: []
    }
  };
componentDidMount() {
  const API = "https://swapi.co/api/people/";
  fetch(API).then((res) => res.json())
  .then(data => {
    console.log(data.results)
    return this.setState({
      people: data.results
    });
  })
}
  render() {
    const { people } = this.state;
    const time = new Date().toLocaleTimeString()

    return (
      <div className="">
        <div>it is {time}</div>
        <Container fluid>
          {people.map((item, index) =>
              <Cards key={index} {...item}
                // user={item} name={item.name}
              />
          )}
      </Container>
      </div>
    );

    setInterval(time, 1000)
  }
}

export default App;
