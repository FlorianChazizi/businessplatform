import mongoose, { Schema, model, models } from 'mongoose';

const TownSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true, 
    trim: true,   
  },
}, { timestamps: true }); 

const Town = models.Town || model('Town', TownSchema);

export default Town;
