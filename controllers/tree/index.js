const treeData = require('./tree.json');
const { performAction } = require('../../utils');

function getTree(_, res) {
  res.status(200).json({ data: treeData });
}

function createTreeNode(req, res) {
  const payload = req.body;

  if (!payload.parent || !payload.label) {
    res.status(400).json({
      message: 'Please provide all required fields'
    });
  }

  const action = { type: 'create', payload };

  try {
    performAction(action, treeData, payload.parent);

    res.status(201).json({
      message: 'Node created',
      data: treeData
    });
  } catch (error) {
    res.status(404).json({
      message: error
    });
  }
}

function updateTreeNode(req, res, next) {
  console.log('update');
}

function deleteTreeNode(req, res) {
  const id = req.params.id;

  if (!id) {
    res.status(400).json({
      message: 'Please provide an id'
    });
  }

  const action = { type: 'delete' };

  try {
    performAction(action, treeData, id);

    res.status(200).json({ data: treeData });
  } catch (error) {
    res.status(400).json({
      message: error
    });
  }
}

module.exports = {
  getTree,
  createTreeNode,
  updateTreeNode,
  deleteTreeNode
};
