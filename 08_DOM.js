// DOM
const heading = document.getElementById('hello')
console.dir(heading)
console.log(heading.textContent)
heading.style.color = 'red'
heading.style.textAlign = 'center'

const heading2 = document.querySelector('#hello') // Первый найденный
console.dir(heading2)
const heading3 = heading2.nextElementSibling
console.dir(heading3)

const addStyles = (node, text, color = 'red', fontSize) => {
  node.textContent = text
  node.style.color = color
  // falsy: 0, undefined, false, null, ''
  if (fontSize) {
    node.style.fontSize = fontSize
  }
}

addStyles(heading3, 'текст', 'blue', '2rem')

heading.onclick = () => {
  if (heading.style.color == 'red') {
    heading.style.color = 'blue'
  } else {
    heading.style.color = 'red'
  }
}

/* ИЛИ
heading.addEventListener('click', () => {
    if(heading.style.color == 'red'){
        heading.style.color = 'blue'
    }
    else{
        heading.style.color = 'red'
    }
})
*/

const link = document.querySelector('#link')
console.log(link)
link.onclick = (event) => {
  event.preventDefault()
  console.log('click', event.target.getAttribute('href'))
}
/*
или
link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('click')
})
*/
