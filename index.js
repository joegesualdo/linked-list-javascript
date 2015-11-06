var Promise = require('bluebird');

function LLNode(data){
  this.data = data;
  this.next = null;
}

// insert newNode after node
function insertAfter(node, newNode){
}

// remove node past this one
function removeLast(node){
}

function removeFirst(list){
}

function remove(list, nodeData){
}

function count(list){
}

function clear(list){
}

function LinkedList(headData){
  // So we can reference `this` in nested scopes
  var self = this;

  // Sets `head` if passed as an initialization argument
  if(headData == undefined){
    this.head = null;
  } else {
    node = new LLNode(headData);
    this.head = node
  }

  this.addFirst = function(data){
    return new Promise(function(resolve, reject){
      node = new LLNode(data);
      self.head = node
      resolve(self)
    })
  }

  this.addAtEnd = function(data, callback){
    return new Promise(function(resolve, reject){
      if(data instanceof Array){
      } else {
        data = [data]
      }
      self.findLastNode().then(function(lastNode){
        for(var i = 0; i < data.length; i++){
          newNode = new LLNode(data[i]);
          lastNode.next = newNode 
          lastNode = lastNode.next
        }
        resolve(self)
      })
    })
  }

  this.addBefore = function(data, newData){
    return new Promise(function(resolve, reject){
      newNode = new LLNode(newData);
      lastNode = null
      currentNode = self.head
      while(currentNode.data != data){
        lastNode = currentNode
        currentNode = currentNode.next
      }
      newNode.next = currentNode
      lastNode.next = newNode
      resolve(self)
    })
  }

  this.addAfter= function(data, newData){
    return new Promise(function(resolve, reject){
      newNode = new LLNode(newData);
      currentNode = self.head
      while(currentNode.data != data){
        currentNode = currentNode.next
      }
      newNode.next = currentNode.next
      currentNode.next = newNode
      resolve(self)
    })
  }

  this.findBefore = function(data){
    return new Promise(function(resolve, reject){
      lastNode = null
      currentNode = self.head
      while(currentNode.data != data){
        lastNode = currentNode
        currentNode = currentNode.next
      }
      resolve(lastNode)
    })
  }

  this.findLastNode = function(){
    return new Promise(function(resolve, reject){
      currentNode = self.head
      while(currentNode.next != null){
        currentNode = currentNode.next
      }
      resolve(currentNode)
    })
  }

  this.getFirstNode = function(){
    return new Promise(function(resolve, reject){
      resolve(self.head)
    })
  }

  this.getKthElement = function(k){
    return new Promise(function(resolve, reject){
      currentNode = self.head
      count = 1
      while(count != k){
        currentNode = currentNode.next
        count++
      }
      resolve(currentNode)
    })
  }

  this.addAtBeginning = function(data){
    return new Promise(function(resolve, reject){
      newNode = new LLNode(data);
      newNode.next = self.head
      self.head = newNode
      resolve(self)
    })
  }

  this.toString = function(){
    return new Promise(function(resolve, reject){
      currentNode = self.head
      listString = String(currentNode.data)
      while(currentNode.next != null){
        currentNode = currentNode.next
        listString =  listString + "-" +currentNode.data
      }
      resolve(listString)
    })
  }
}

module.exports = LinkedList
