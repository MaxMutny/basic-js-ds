const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor()
    {
        this.roott = null
    }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.roott
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const newNode = new Node(data)
        if(this.roott === null)
        {
            this.roott = newNode
            return 
        }
        let currentNode = this.roott
        while(currentNode)
        {
            if(newNode.data < currentNode.data)
            {
                if(currentNode.left == null)
                {
                    currentNode.left = newNode
                    return
                }
                
                currentNode = currentNode.left
                
            }
            else 
            {
                if(currentNode.right == null)
                {
                    currentNode.right = newNode
                    return
                }
                
                currentNode = currentNode.right 
            }
        }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};