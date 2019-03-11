import React, { Component } from "react";
import PhotoCard from "./components/PhotoCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  // Map over this.state.friends and render a PhotoCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>I don't know enough React to complete this assignment. One week was not enough time for me.</Title>
        {this.state.friends.map(friend => (
          <PhotoCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
