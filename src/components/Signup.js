import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import Success from './Success';

export default class Signup extends Component {

    state ={

        step : 1,
        email: '',
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        country: '',
        levelOfEducation: '',
    }

    // go back to previous step
prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

// handle field change
handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }



render() {

const { step } = this.state;
const { email, username, password, firstName, lastName, country, levelOfEducation } = this.state;
const values = { email, username, password, firstName, lastName, country, levelOfEducation }

    switch (step) {
      case 1: 
        return (
          <UserDetails 
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
          />
        )
      case 2: 
        return (
          <PersonalDetails
          prevStep={this.prevStep} 
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
          />
        )
      case 3: 
        return (
          <Confirmation 
          nextStep={this.nextStep}
          prevStep={this.prevStep} 
          handleChange={this.handleChange}
          values={values}
          />
        )
      case 4:
        return (
          <Success />);
      default: 
        (console.log('This is a multi-step form built with React.'))
    }
  }
}
