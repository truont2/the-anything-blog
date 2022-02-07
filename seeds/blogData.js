const { Blogs } = require('../models');

const blogData = [
    {
        name: 'First Blog post', 
        content: 'testing'
    }
]

const blogPosts = () => Blogs.bulkCreate(blogData);

module.exports = blogPosts;