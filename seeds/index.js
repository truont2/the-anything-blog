const sequelize = require('../config/connection');
const blogPosts = require('./blogData');

const seedAll = async () => {
    await sequelize.sync({force: true});

    await blogPosts();

    process.exit(0);
};

seedAll();