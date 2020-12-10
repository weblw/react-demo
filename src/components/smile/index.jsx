import React from 'react'
import SmileFace from './simile.jpg';

const Joke = React.memo(({value}) => {
  return (
    <div>
      <img src={SmileFace} />
      {value || 'loading...' }
    </div>
  );
})

export default class RandomJoke extends React.Component {
  state = {
    joke: null
  }

  render() {
    return <Joke value={this.state.joke} />
  }

  componentDidMount() {
    fetch('https://icanhazdadjoke.com/',
      {headers: {'Accept': 'application/json'}}
    ).then(response => {
      return response.json();
    }).then(json => {
      this.setState({joke: json.joke});
    });
  }
}
