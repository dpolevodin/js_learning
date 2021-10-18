const map = (arr, callback) => {
  return arr.reduce((mapped, item) => {
        return mapped.concat(callback(item))
    }, [])
}
    
const numbers = [1, 2, 3, 4, 5]

console.log(map((numbers), item => item))
