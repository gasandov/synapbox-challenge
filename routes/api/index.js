const { Router } = require('express');

const treeRouter = require('./tree/tree');

const apiRouter = Router();

apiRouter.use('/tree', treeRouter);

module.exports = apiRouter;
