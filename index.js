const driver = {}

function updateDriverWithKeyAndValue(obj, key, value){
  let newDriver = Object.assign(driver, obj, key, value)

  return newDriver
}
