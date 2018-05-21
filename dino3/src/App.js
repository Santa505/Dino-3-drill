import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import jobdetails from "./components/jobdetails";
import inputform from "./components/inputform";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listings:[],
    }
  }
  componentDidMount() {
    fetch("./listing.json")
      .then(response => response.json())
      .then(listings => {
        return this.setState({
          listings: listings
      })
    })
  }
  render() {
    return (
      <div className="App">
      <Header />
      <main>
        <Jobdetails listings={this.state.jobs} />
        <Inputform submitJobListing={this.submitJobListing}/>
      </main>
      
      <Footer />
      </div>
    );
  }
}
      

export default App;

