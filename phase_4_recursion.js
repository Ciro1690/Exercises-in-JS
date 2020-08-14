function range (start, end) {
    if (start === end) {
        return [];
    }

    let newArr = range(start, end-1)
    newArr.push(end-1)
    return newArr
};

console.log(`range(3, 10) = ${range(3, 10)}`);

function sumRec(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let lastNum = arr[arr.length-1];
    return sumRec(arr.slice(0,arr.length-1)) + lastNum;
}

console.log(`sumRec([1, 3, 5]) = ${sumRec([1, 3, 5])}`);

function exp1(base, exp) {
    return exp === 0 ? 1 : (base * exp1(base, exp-1));
};

console.log(`exp1(0, 4) = ${exp1(4, 0)}`);

function exp2(b,exp) {
    if(exp === 0) {
        return 1;
    } if (exp % 2 === 0){
        let subAnswer = exp2(b, exp/2);
        return subAnswer * subAnswer;
    } else {
        let subAnswer = exp2(b, ((exp - 1)/2));
        return subAnswer * subAnswer * b;
    }
};
console.log(`exp2(2, 4) =  ${exp2(2, 4)}`);
console.log(`exp2(2, 5) =  ${exp2(2, 5)}`);

function fibonacci(n) {
    let fibs = [0,1];
    if (n < 3) {
        return fibs.slice(0,n);
    }
    
    while (fibs.length < n) {
        fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1]);
    }
    return fibs;
}

console.log(`fibonacci(5) = ${fibonacci(5)}`);

function deepDup(arr) {
    if (!(arr instanceof Array)) {
        return arr;
    }
    return arr.map((el) => {
        return deepDup(el);
    });
}

const array = [[2], 3];
const dupedArray = deepDup(array);
console.log(`deepDup original = ${JSON.stringify(array)}`);

dupedArray[0].push(4);

console.log(`deepDup original = ${JSON.stringify(array)} (should not be mutated)`);
console.log(`deepDup duped = ${JSON.stringify(dupedArray)} (should be mutated)`);

function bsearch(arr, target) {
    if(!arr.includes(target)) {
        return -1;
    } else {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === target) {
                return i;
            }
        }
    }
};

console.log(`bsearch([1, 2, 3], 3) = ${bsearch([1, 2, 3], 3)}`);
console.log(`bsearch([1, 2, 3], 2.5) = ${bsearch([1, 2, 3], 2.5)}`);

function merge(left,right) {
  const merged = [];

  while (left.length > 0 && right.length > 0) {
      let nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
      merged.push(nextItem);
  }
  return merged.concat(left,right);
};

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    } else {
        const middle = Math.floor(array.length / 2);

        const left = mergeSort(array.slice(0,middle));
        const right = mergeSort(array.slice(middle));

        return merge(left,right);
    }
}
console.log(`mergeSort([4, 5, 2, 3, 1]) = ${mergeSort([4, 5, 2, 3, 1])}`);

function subsets(arr) {
  if (arr.length === 0) {
      return [[]];
  }

  let first = arr[0];
  let rest = subsets(arr.slice(1));

  const withFirst = rest.map(sub => [first].concat(sub));

  return rest.concat(withFirst);
};

console.log(`subsets([1, 3, 5]) = ${JSON.stringify(subsets([1, 3, 5]))}`);
