const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');
let boxrow = document.querySelector('.box-row');

// for (let i = 0;i < 6;i++) {
//     let boxcol = document.createElement('div');
//     boxcol.className = 'box-col';

//     let h3 = document.createElement('h3');
//     let h3text = document.createTextNode('Free international returns');


//     let img = document.createElement('img');
//     img.src = './assets/box1-1.jpg';
//     img.alt = 'box1';

//     let a = document.createElement('a');
//     let atext = document.createTextNode('Shop More');
//     boxcol.appendChild(h3);
//     h3.appendChild(h3text);
//     boxcol.appendChild(img);
//     boxcol.append(a);
//     a.appendChild(atext);

//     boxrow.appendChild(boxcol);
// }


let n = 0;
function changeSlide() {
    for (let i = 0;i < imgs.length;i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
changeSlide();
prev_btn.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
});
next_btn.addEventListener('click', (e) => {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
});
const scrollContainer = document.querySelectorAll('.products');

for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}