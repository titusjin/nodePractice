function DobleLinkedList() {
  let head = null;
  let nail = null;
  let length = 0;

  function Node(element){
    this.element = element;
    this.prev = null;
    this.next = null;
  }

  this.insert = function(position, element){
    let node = new Node(element);
    if(!this.head){
      this.head = node;
    }else{

    }
    
    this.length++;
  }

}