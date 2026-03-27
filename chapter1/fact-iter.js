
function fact(n) {
  return factIter(1, 1, n)
}

function factIter(product, counter, maxCount) {
    if(counter > maxCount) return product;
    return factIter(counter*product, ++counter, maxCount)
}

console.log(fact(100000))