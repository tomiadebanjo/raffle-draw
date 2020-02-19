import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TeamSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

const Team = mongoose.model('team', TeamSchema);

export default Team;
