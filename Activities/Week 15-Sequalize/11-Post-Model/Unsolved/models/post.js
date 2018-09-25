module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [50]
      }
    },
    catagory: {
      type: DataTypes.STRING,
      defaultValue: 'Personal'
    }
  });
  return Post;
};
