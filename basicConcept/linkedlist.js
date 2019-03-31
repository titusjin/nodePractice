function LinkedList(){
  this.head = null;
  this.length = 0;

  function Node(element){
      this.element = element;
      this.next = null;
  }
  
  this.getSize = () => {
    return this.length;
  }
  this.toString = () =>{
    let current = this.head, result = '';
    
    /**
     *  TWo different while but do the same thing
     */
    while(current){
      result += current.element.toString();
      current = current.next;
    }
    return result;
    // while(current.next){
    //   result += current.element.toString();
    //   current = current.next;
    // }
    // return result += (current.element);
  }


  this.append = function(element){
    let node = new Node(element);
    let current = null;

    if(this.length === 0 ){
      this.head = node;
    }else{
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  }

  this.removeItem = function(position){
    let index = 0, current = this.head, previous = null;
    
    if(position > -1 && position < this.length){
      

      /**
       * solution 1
       * TWO different while loop actually do the same thing
       * But the above one minus one running
       */
      if(position === 0 ){
        this.head = current.next;
      }
      while(index++ < position){
        previous = current;
        current = current.next;
      }
      // while(index < position){
      //   previous = current;
      //   current = current.next;
      //   index++;
      // }

      previous.next = current.next;
      
      this.length--;
      return true;
    }else{
      return false; 
    }
  }
}

let testLinkedList = new LinkedList();

//TEST append
testLinkedList.append('0');
testLinkedList.append('1');
testLinkedList.append('2');
testLinkedList.append('3');

testLinkedList.removeItem(0);

// test length and toString()
console.log(testLinkedList.length);
console.log(testLinkedList.toString());
