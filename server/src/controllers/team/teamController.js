import Team from '../../models/team';
// import { getSequenceNextValue } from '../../helpers/dbHelpers';

const teamController = {
  create: async (req, res) => {
    try {
      const { body } = req;

      const teamData = await Team.create(body);
      return res.status(200).json(teamData);
    } catch (error) {
      res.status(500).json({ message: 'team creation failed' });
      console.log(error, 'team creation failed');
    }
  },
  get: async (req, res) => {
    try {
      const { body } = req;

      const teamData = await Team.find().exec();
      return res.status(200).json(teamData);
    } catch (error) {
      res.status(500).json({ message: 'team fetching failed' });
      console.log(error, 'team fetching failed');
    }
  }
};

export default teamController;
