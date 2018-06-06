import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'de8fe79f726445e4b1b733a7646bbe87'
});

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
      input: '',
      imageUrl: '',
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

onSubmit = () => {
  this.setState({imageUrl: this.state.input});
  app.models
  .predict(
    Clarifai.FACE_DETECT_MODEL,
     this.state.input).then(
    function(response) {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err) {
      // there was an error
    }
  );
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
     <FaceRecognition imageUrl={this.state.imageUrl} />

  </div>);
}
}

export default App;
