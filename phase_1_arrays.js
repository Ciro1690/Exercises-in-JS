Array.prototype.uniq = function() {
    let newArr = [];
    
    for (let i = 0; i < this.length; i++) {
        if (newArr.indexOf(this[i]) === -1) {
            newArr.push(this[i]);
        }
    }
    return newArr;
};

console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].uniq());

Array.prototype.twoSum = function() {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = (i + 1); j < this.length; j++) {
            if (this[i] + this[j] === 0) {
            newArr.push([i, j]);
            }
        }
    }
    return newArr;
};

console.log([-1, 0, 2, -2, 1].twoSum());

Array.prototype.transpose = function() {
    let newArr = [];

    const cols = Array.from(
        { length: this[0].length },
        () => Array.from({length: this.length})
    );

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) {
            cols[j][i] = this[i][j];
        }
    }
    return cols
};

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());
