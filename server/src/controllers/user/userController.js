import User from '../../models/user';
import Church from '../../models/church';
import Team from '../../models/team';

const userController = {
  create: async (req, res) => {
    try {
      const { body } = req;

      const churchData = await Church.findById(body.church);
      const teams = await Team.find({}).exec();
      let userData;

      if (teams.length < 1) {
        throw new Error('Server Error!! Teams list empty');
      }

      if (churchData.lastSelectedTeam) {
        const lastTeamIndex = teams.findIndex(i =>
          i._id.equals(churchData.lastSelectedTeam)
        );
        const newTeamIndex =
          lastTeamIndex + 1 > teams.length ? 0 : lastTeamIndex + 1;

        churchData.lastSelectedTeam = teams[newTeamIndex]._id;
        await churchData.save();
        userData = await User.create({
          ...body,
          team: teams[newTeamIndex]._id
        });
      } else {
        churchData.lastSelectedTeam = teams[0]._id;
        await churchData.save();

        userData = await User.create({ ...body, team: teams[0]._id });
      }

      const userInfo = await userData
        .populate({ path: 'church', populate: { path: 'lastSelectedTeam' } })
        .execPopulate();
      return res.status(200).json(userInfo);
    } catch (error) {
      res.status(500).json({ message: error.message, success: false });
      console.log(error, 'user creation failed');
    }
  },
  get: async (req, res) => {
    try {
      const users = await User.find()
        .populate({ path: 'church', populate: { path: 'lastSelectedTeam' } })
        .populate('team');

      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: 'failes' });
      console.log(error, 'user fetching failed');
    }
  }
};

export default userController;
