const driver = {}

function updateDriverWithKeyAndValue(obj, key, value){
  let newDriver = Object.assign({}, obj, {[key]: value})

  return newDriver
}
