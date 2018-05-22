import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import JobDetails from "./components/JobDetails";
import InputForm from "./components/InputForm";


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
    console.log(this.state)
    return (
      <div className="App">
      <Header />
      <main>
        <JobDetails listings={this.state.listings} /> 
        <InputForm submitJobListing={this.submitJobListing} />
      </main>
      
      <Footer />
      </div>
    );
  }
}
      

export default App;

