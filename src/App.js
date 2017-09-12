import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


//let mongoose = require('mongoose');
//let fs = require('fs');

//mongoose.connect('mongodb://127.0.0.1:27017/gb2map');
//mongoose.model('users').find(function(err, users) { res.send(users) })

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    selectedPlace: {}
  }
}
render() {
   return (
  //  console.alert(mongoose.model('orderlist').find(function(err, users) { res.send(users) }))
     //<Map google={this.props.google} zoom={14}>
     <Map google={this.props.google} zoom={10}>

       <Marker onClick={this.onMarkerClick}
               name={'Current location'} />

       <InfoWindow onClose={this.onInfoWindowClose}>
           <div>
             <h1>{this.state.selectedPlace.name}</h1>
           </div>
       </InfoWindow>
     </Map>
   );
 }
}

export default GoogleApiWrapper({
 apiKey: ('AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo')
})(App)
