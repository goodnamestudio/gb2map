import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MarkerSchema = new Schema({
  //id: {type: String},
  title: { type: String},
  order: {type: Number}
  // color: {type: String},
  // createdAt: {type: Date}
});

const Marker = mongoose.model('Marker', MarkerSchema);
