let colors = ['Red','Blue','Green','Yellow','Lightblue','Lightpink','Violet'];

// let clicky = () => {
//     let currentColor = Math.floor(Math.random()*6);
//     let color = document.getElementById('change');
//     let colorname = document.getElementById('colorname');
//     color.style.backgroundColor = colors[currentColor];
//     colorname.textContent = colors[currentColor];
// }

let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    let currentColor = Math.floor(Math.random()*colors.length);
    let color = document.getElementById('change');
    let colorname = document.getElementById('colorname');
    let chcolor = document.getElementById('chcolor');
    color.style.backgroundColor = colors[currentColor];
    colorname.textContent = colors[currentColor];
    colorname.style.color = colors[currentColor];
})