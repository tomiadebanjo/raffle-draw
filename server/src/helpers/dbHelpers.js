// import Team from '../models/team';

// export const getSequenceNextValue = async (seqName) => {
//   const seqDoc = await Team.findOneAndUpdate({ name: seqName }, { $inc: { indexId: 1 } }, { returnNewDocument: true });

//   return seqDoc.indexId;
// }