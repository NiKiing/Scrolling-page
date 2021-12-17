let stars = document.GetElementById('stars');
let moon = document.GetElementById('moon');
let mountains_behind = document.GetElementById('mountains_behind');
let text = document.GetElementById('text');
let btn = document.GetElementById('btn');
let mountains_front = document.GetElementById('mountains_front');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value + 'px';
})
