import Church from '../../models/church';

const churchController = {
  create: async (req, res) => {
    try {
      const { body } = req;

      const churchData = await Church.create(body);
      return res.status(200).json(churchData);
    } catch (error) {
      res.status(500).json({ message: 'church creation failed' });
      console.log(error, 'church creation failed');
    }
  },
  get: async (req, res) => {
    try {
      const { body } = req;

      const churchData = await Church.find().exec();
      return res.status(200).json(churchData);
    } catch (error) {
      res.status(500).json({ message: 'church fetching failed' });
      console.log(error, 'church fetching failed');
    }
  }
};

export default churchController;
