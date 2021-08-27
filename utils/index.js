const { v4: uuid } = require('uuid');

function performAction(action, tree, node) {
  function searchAndPerform(action, nodes, node) {
    if (!Array.isArray(nodes)) {
      throw 'Node not found';
    }

    for (let currentNode in nodes) {
      const [id] = Object.keys(nodes[currentNode]);

      if (id === node) {
        switch (action.type) {
          case 'create':
            const newNode = createNode(action.payload);
            nodes[currentNode][id].children.push(newNode);
            break;
          case 'delete':
            if (nodes[currentNode][id].children.length > 0) {
              throw 'Cannot delete node with children';
            }

            delete nodes[currentNode];
            break;
          case 'update':
            break;
          default: break;
        }

        break;
      }

      searchAndPerform(action, nodes[currentNode][id].children, node)
    }
  }

  searchAndPerform(action, tree['root'].children, node);
}

function createNode(payload) {
  const id = uuid();
  const newNode = {};

  newNode[id] = {
    label: payload.label,
    children: []
  };

  return newNode;
}

module.exports = {
  performAction
};
