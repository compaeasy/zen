const upperStrings = ['AA', 'BB', 'CC', 'DD', 'EE']

for(const string of upperStrings) {
  console.log(string)
}

console.log('-------------------')

upperStrings.forEach((string) => {
  console.log(string)
})

const htmlStrings = upperStrings.map((string) => {
  return `<p>${string}</p>`
})

console.log(upperStrings)
console.log(htmlStrings.join(''))

$root.insertAdjacentHTML('beforeend', htmlStrings.join(''))