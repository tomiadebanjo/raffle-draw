import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    team: {
      type: ObjectId,
      ref: 'team',
      required: true
    },
    church: {
      type: ObjectId,
      ref: 'church',
      required: true
    }
  },
  { timestamps: true }
);

const User = mongoose.model('user', UserSchema);

export default User;
