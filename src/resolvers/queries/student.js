module.exports = async (_, {}, {models}) => {
  return await models.Student.find();
};

