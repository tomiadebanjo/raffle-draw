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
          lastTeamIndex + 1 > teams.length - 1 ? 0 : lastTeamIndex + 1;

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
        .populate('team')
        .execPopulate();
      return res.status(200).json(userInfo);
    } catch (error) {
      console.log(error, 'user creation failed');
      res.status(500).json({ message: error.message, success: false });
    }
  },
  get: async (req, res) => {
    try {
      const userInfo = await User.findOne({
        $or: [{ email: req.params.email }, { phoneNumber: req.params.email }]
      })
        .populate({ path: 'church' })
        .populate('team')
        .exec();

      console.log(userInfo);

      if (!userInfo) {
        return res
          .status(404)
          .json({ success: false, message: 'User not Found' });
      }

      res
        .status(200)
        .json({ success: true, message: 'User Found', data: userInfo });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong while fetching' });
      console.log(error, 'user fetching failed');
    }
  }
};

export default userController;
