import User from '../models/user';

export const validateUserInfo = parameter => async (req, res, next) => {
  try {
    const { body } = req;

    const userData = await User.findOne({
      [parameter]: body[parameter]
    }).exec();

    if (userData) {
      const validationField =
        parameter === 'email' ? 'Email address' : 'Phone number';
      return res.status(400).json({
        success: false,
        message: `${validationField} has already been used`
      });
    }

    next();
  } catch (error) {
    const validationField =
      parameter === 'email' ? 'Email address' : 'Phone number';
    console.log(error, `${validationField} validation failed`);
    res.status(500).json({
      message: 'Something went wrong! Try again',
      success: false
    });
  }
};
