/* eslint-disable prettier/prettier */
import { model, models, Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default interface User extends Document {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}

export const UserModel = models.User || model('User', UserSchema);