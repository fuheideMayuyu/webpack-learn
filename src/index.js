let url = require('./logo.jpg')
console.log('url', url);
let img = new Image()
img.src = url
document.body.appendChild(img)
