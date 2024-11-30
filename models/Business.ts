import mongoose, { Schema, model, models } from 'mongoose';

const BusinessSchema = new Schema(
  {
    businessName: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    website: { type: String, required: false },
  },
  { timestamps: true }
);

const Business = models.Business || model('Business', BusinessSchema);
export default Business;
