var expect = require("chai").expect

var LinkedList = require("./index")

describe("LinkedList", function(){
  it("Initializes", function(){
    list = new LinkedList()
    expect(list.head).to.equal(null)
  })
  it("Initializes with head node data passed as argument", function(){
    list = new LinkedList(10)
    expect(list.head.data).to.equal(10)
  })
  it("addFirst", function(done){
    list = new LinkedList()

    list.addFirst(10)
    .then(function(firstNode){
      expect(list.head.data).to.equal(10)
      done();
    });
  })
  it("findLastNode", function(done){
    list = new LinkedList()
    list.addFirst(10)
    .then(function(list){
      return list.findLastNode()
    })
    .then(function(lastNode){
      expect(lastNode.data).to.equal(10)
      done()
    })
  })
  it("addAtEnd with single element", function(done){
    list = new LinkedList()
    list.addFirst(10)
    .then(function(list){
      return list.addAtEnd(29);
    })
    .then(function(list){
      return list.findLastNode()
    })
    .then(function(lastNode){
      expect(lastNode.data).to.equal(29)
      done()
    })

  })
  it("addAtEnd with array of nodes", function(done){
    list = new LinkedList()
    list.addFirst(10)
    .then(function(list){
      return list.addAtEnd([29, 45, 67]);
    })
    .then(function(list){
      return list.toString()
    })
    .then(function(string){
      expect(string).to.equal("10-29-45-67")
      done()
    })
  })
  it("toString", function(done){
    list = new LinkedList()
    list.addFirst(10)
    .then(function(list){
      return list.addAtEnd(29)
    })
    .then(function(list){
      return list.addAtEnd(35)
    })
    .then(function(list){
      return list.toString()
    })
    .then(function(string){
      expect(string).to.equal("10-29-35")
      done()
    })
  })
  it("getKthElement", function(done){
    list = new LinkedList()
    list.addFirst(10)
    .then(function(list){
      return list.addAtEnd(29)
    })
    .then(function(list){
      return list.addAtEnd(35)
    })
    .then(function(list){
      return list.getKthElement(2)
    })
    .then(function(node){
      expect(node.data).to.equal(29)
      done()
    })
  })
  it("findBefore", function(done){
    list = new LinkedList()
    list.addFirst(10)
    .then(function(list){
      return list.addAtEnd(29)
    })
    .then(function(list){
      return list.addAtEnd(35)
    })
    .then(function(list){
      return list.findBefore(35)
    })
    .then(function(node){
      expect(node.data).to.equal(29)
      done()
    })
  })
  it("getFirstNode", function(done){
    list = new LinkedList()
    list.addFirst(10)
    .then(function(list){
      return list.addAtEnd(29)
    })
    .then(function(list){
      return list.addAtEnd(35)
    })
    .then(function(list){
      return list.getFirstNode()
    })
    .then(function(node){
      expect(node.data).to.equal(10)
      done()
    })
  })
  it("addAtBeginning", function(done){
    list = new LinkedList()
    list.addFirst(10)
    .then(function(list){
      return list.addAtEnd(29)
    })
    .then(function(list){
      return list.addAtEnd(35)
    })
    .then(function(list){
      return list.addAtBeginning(2)
    })
    .then(function(list){
      return list.toString()
    })
    .then(function(string){
      expect(string).to.equal("2-10-29-35")
      done()
    })
  })
  it("addBefore", function(done){
    list = new LinkedList()
    list.addFirst(10)
    .then(function(list){
      return list.addAtEnd(29)
    })
    .then(function(list){
      return list.addAtEnd(35)
    })
    .then(function(list){
      return list.addBefore(35, 2)
    })
    .then(function(list){
      return list.toString()
    })
    .then(function(string){
      expect(string).to.equal("10-29-2-35")
      done()
    })
  })
  it("addAfter", function(done){
    list = new LinkedList()
    list.addFirst(10)
    .then(function(list){
      return list.addAtEnd(29)
    })
    .then(function(list){
      return list.addAtEnd(35)
    })
    .then(function(list){
      return list.addAfter(29, 2)
    })
    .then(function(list){
      return list.toString()
    })
    .then(function(string){
      expect(string).to.equal("10-29-2-35")
      done()
    })
  })
})
