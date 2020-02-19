import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const ChurchSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    lastSelectedTeam: {
      type: ObjectId,
      ref: 'team',
      default: null
    }
  },
  { timestamps: true }
);

const Church = mongoose.model('church', ChurchSchema);

export default Church;
