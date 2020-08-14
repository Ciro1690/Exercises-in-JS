Array.prototype.bubbleSort = function() {
    let isSorted = false;

    while (!isSorted) {
      isSorted = true;

      for(i=0; i < (this.length-1); i++) {
          if(this[i] > this[i+1]){
              [this[i], this[i + 1]] = [this[i+1], this[i]];
              isSorted = false;
          }
      }
    }
    return this;
}

console.log([5, 3, 4, 2, 1].bubbleSort());

String.prototype.substrings = function() {
    let newArr = [];

    for (i=0; i < this.length; i++) {
        for (j=i+1; j <= this.length; j++) {
            newArr.push(this.slice(i,j));
        }
    }
    return newArr;
}

console.log("abc".substrings());
