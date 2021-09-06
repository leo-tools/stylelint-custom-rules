function isRegExp (o){
  return o && Object.prototype.toString.call(o) === '[object RegExp]'
}

function isString (o){
  return o && Object.prototype.toString.call(o) === '[object String]'
}

function isBoolean (o){
  return o && Object.prototype.toString.call(o) === '[object Boolean]'
}

module.exports = {
  isRegExp,
  isString,
  isBoolean
}
