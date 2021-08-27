const { Router } = require('express');
const {
  getTree,
  createTreeNode,
  updateTreeNode,
  deleteTreeNode
} = require('../../../controllers/tree')

const router = Router();

router
  .route('/')
  .get(getTree)
  .post(createTreeNode);

router
  .route('/:id')
  .put(updateTreeNode)
  .delete(deleteTreeNode);

module.exports = router;