const express = require('express');
// get using express router
const router = express.Router();
// define author controller and export it for this file
const authorController = require('../controllers/author');

// use controller functions according to the route
router.get('/author/:id', authorController.getAuthorsArticles);

// export author router for using in default application file
module.exports = router;
