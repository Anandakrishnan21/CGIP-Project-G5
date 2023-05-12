const toggleBtn = document.getElementsByClassName("toggle")[0];
const navLink = document.getElementsByClassName("nav-link")[0];

toggleBtn.addEventListener('click',()=>{
  navLink.classList.toggle('active')
})

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const btn = document.getElementById('btn');
const btn1 = document.getElementById('formula');
const btn2 = document.getElementById('hide');
const exp = document.getElementById('exp');
const x1 = document.getElementById('x1');
const x2 = document.getElementById('x2');
const x3 = document.getElementById('x3');
const y1 = document.getElementById('y1');
const y2 = document.getElementById('y2');
const y3 = document.getElementById('y3');
const X1 = document.getElementById('X1');
const X2 = document.getElementById('X2');
const X3 = document.getElementById('X3');
const Y1 = document.getElementById('Y1');
const Y2 = document.getElementById('Y2');
const Y3 = document.getElementById('Y3');

const matrix = [
  [1, 0],
  [0, -1]
];


const img = new Image();

img.onload = () => {
  ctx.drawImage(img, 0, 0, 300, 150);
}

img.src = 'images/img.png';

btn.addEventListener('click', (e) => {
  e.preventDefault();
  ctx.beginPath();
  ctx.moveTo(170, 60);
  ctx.lineTo(230, 60);
  ctx.lineTo(200, 30);
  ctx.closePath();
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.beginPath();

  ctx.moveTo(170, 90);
  ctx.lineTo(230, 90);
  ctx.lineTo(200, 120);
  ctx.closePath();

  ctx.lineWidth = 1;
  ctx.stroke();

  const vertices = [[x1.value, y1.value], [x2.value, y2.value], [x3.value, y3.value]]
  const transformedvertices = []
  for (let i = 0; i < vertices.length; i++) {
    const result = [0, 0]
    for (let j = 0; j < matrix.length; j++) {
      for (let k = 0; k < matrix.length; k++)
        result[j] += matrix[j][k] * vertices[i][k];
    }
    transformedvertices.push(result)
  }
  X1.textContent = transformedvertices[0][0];
  X2.textContent = transformedvertices[1][0];
  X3.textContent = transformedvertices[2][0];
  Y1.textContent = transformedvertices[0][1];
  Y2.textContent = transformedvertices[1][1];
  Y3.textContent = transformedvertices[2][1];

});

btn1.addEventListener('click', (e) => {
  const currentImg = exp.querySelector('img');
  if (currentImg) {
    exp.removeChild(currentImg);
  }
  e.preventDefault();
  const newImg = document.createElement('img');
  newImg.src = "images/img2.webp";
  exp.appendChild(newImg)
})

btn2.addEventListener('click', (e) => {
  e.preventDefault();

  const currentImg = exp.querySelector('img');
  if (currentImg) {
    exp.removeChild(currentImg);
  }
});

