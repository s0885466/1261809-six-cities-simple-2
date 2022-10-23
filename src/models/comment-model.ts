import { Comment } from '../types/comment.types';
import mongoose from 'mongoose';

export interface CommentDocument extends Comment, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    publishedDate: {
      type: Date,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

export const CommentModel = mongoose.model<CommentDocument>('Comment', commentSchema);
