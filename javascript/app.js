class DoublyLinkedList     {
    constructor(){
        this.nodes = [];
    }
  
    get size(){
        return this.nodes.length;
    }
  
    get head(){
      return this.size ? this.nodes[0] : null;
    }
    get tail () {
      return this.size ? this.nodes[this.size - 1] : null;
    }
  
    insertAt(index, value) {
      const previousNode = this.nodes[index - 1] || null;
      const nextNode = this.nodes[index] || null;
      const node = { value, next: nextNode, previous: previousNode };
  
      if (previousNode) previousNode.next = node;
      if (nextNode) nextNode.previous = node;
      this.nodes.splice(index, 0, node);
    }
  
    insertFirst(value) {
      this.insertAt(0, value);
    }
  
    insertLast(value) {
      this.insertAt(this.size, value);
    }
  
    getAt(index) {
      return this.nodes[index];
    }
  
    removeAt(index) {
      const previousNode = this.nodes[index - 1] || null;
      const nextNode = this.nodes[index + 1] || null;
  
      if (previousNode) previousNode.next = nextNode;
      if (nextNode) nextNode.previous = previousNode;
  
      return this.nodes.splice(index, 1);
    }
  
    clear() {
      this.nodes = [];
    }
  
    reverse() {
      this.nodes = this.nodes.reduce((acc, { value }) => {
        const nextNode = acc[0] || null;
        const node = { value, next: nextNode, previous: null };
        if (nextNode) nextNode.previous = node;
        return [node, ...acc];
      }, []);
    }
  
    *[Symbol.iterator]() {
      yield* this.nodes;
    } /*TODO: support Maria with this part of the project*/
  }
const orden = [{ "hello": 2, "world": 3, "eat": 4 }, { "hello": 3, "world": 4, "eat": 5 }];
const files = [{"file1":"test.js","file2":"test2.js","file3":"test3.js"}];
