import mongoose, { Schema, model, models } from 'mongoose';

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

export default models.Category || model('Category', categorySchema);
