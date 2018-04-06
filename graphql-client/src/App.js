import React from 'react'
import { graphql } from 'react-apollo'
import gql from "graphql-tag";

const query = gql`{hello}`;

class App extends React.Component {
  render() {
    return <h1>Jacek - {this.props.data.hello}</h1>
  }
}

export default graphql(query)(App)