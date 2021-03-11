import React, { Component } from "react";
import { Text, View, Image } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={{ color: "white", fontSize: 25, margin: 25 }}>Ola</Text>
        <Text>Ola </Text>
        <Jobs largura={300} altura={400} fulano="Steve Jos" />
      </View>
    );
  }
}

class Jobs extends Component {
  render() {
    let imag = "https://sujeitoprogramador.com/steve.png";
    return (
      <View>
        <Image
          source={{ uri: imag }}
          style={{ width: this.props.largura, height: this.props.altura }}
        />
        <Text>{this.props.fulano}</Text>
      </View>
    );
  }
}
