import mongoose from 'mongoose';
import { User, USER_TYPE } from '../modules/user/user.type';

export interface UserDocument extends User, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      unique: true,
      type: String,
      required: true,
    },
    avatar: String,
    password: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      enum: Object.values(USER_TYPE),
      required: true,
    },
    avatarImg: String,
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model<UserDocument>('User', userSchema);
