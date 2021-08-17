
exports.min = function min (array) {
  if (!array || !array.length) {
      return 0
    } else return Math.min.apply(null, array)
}

exports.max = function max (array) {
    if (!array || !array.length) {
      return 0
    } else  return Math.max.apply(null, array)
}

exports.avg = function avg (array) {
  if (!array || !array.length) {
    return 0
  } else {
    let summ = 0
    for (let i = 0; i < array.length; i++) {
      summ += array[i]
    }
      return summ / array.length
}
  
}
