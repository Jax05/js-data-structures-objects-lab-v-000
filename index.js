const driver = {}

function updateDriverWithKeyAndValue(obj, key, value){
  let newDriver = Object.assign({}, driver, {key: value})

  return newDriver
}
