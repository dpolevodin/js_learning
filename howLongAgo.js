const formatDate = date => {
  let now = new Date()
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diff = now - date
  if (diff < 1000) {
    return 'прямо сейчас'
  } else if (diff > 1000 && diff < 60000) {
    return `${diff / 1000} сек. назад`
  } else if (diff > 60000 && diff < 60000 * 60) {
    return `${diff / (1000 * 60)} мин. назад`
  } else {
    return `${dayOfMonth}.${month}.${year}, ${hour}:${minutes}`
  }
}


console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата 
console.log( formatDate(new Date(new Date - 86400 * 1000 + 1000000)) );
