import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      inpu: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

onSubmit = () =>{
  console.log('click');
}
render() {
  return (<div className="App">
    <Particles className='particles' params={particlesOptions}/>

    <Navigation/>
    <Logo/>
    <Rank/>
    <ImageLinkForm
      onInputChange={this.onInputChange}
       onSubmit={this.onSubmit}
     />

    {/*
        <FaceRecognition /> */
    }
  </div>);
}
}

export default App;
