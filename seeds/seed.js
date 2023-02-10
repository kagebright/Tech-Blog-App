const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogPost.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const userData = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const blogData = await Blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
