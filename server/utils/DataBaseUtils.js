import mongoose from 'mongoose';
import config from '../../etc/config.json';
import mongodb from 'mongodb';
import '../models/Marker.js';

const Marker = mongoose.model('Marker');

export function setUpConnection() {
  mongoose.connect(config.cloudServer);
  //mongoose.connect(config.localServer)
}

export function markerList(){
  return Marker.find();
}

export function createMarker(data){
  const marker = new Marker({
    title: data.title,
    order: data.order
    // color: data.color,
    // createdAt: new Date()
  });

  return marker.save();
}

export function deleteMarker(id){
  return Marker.findById(id).remove();
}
