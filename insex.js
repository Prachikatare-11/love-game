const target = document.getElementById('target');
function runtarget() {
    const maxWidth = 400;
    const maxHeight = 400;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomy = Math.floor(Math.random() * maxHeight);

    target.style.left = randomX + 'px';
    target.style.top = randomy + 'px';

}
target.addEventListener('mouseenter', function () {
    runtarget();
});

const yes = document.getElementById('yes');
function tq() {
    return document.write(love.innerHTML = `
    <img src="download (1).jpg" alt=""> 
    <img src="download (1).jpg" alt="">
    <img src="download (1).jpg" alt="">
    <img src="download (1).jpg" alt="">  love u...❤️
    <img src="download (1).jpg" alt="">
    <img src="download (1).jpg" alt="">
    <img src="download (1).jpg" alt="">
    <img src="download (1).jpg" alt=""> love u...❤️
    <img src="download (1).jpg" alt="">
    <img src="download (1).jpg" alt="">
    <img src="download (1).jpg" alt="">
    <img src="download (1).jpg" alt=""> love u...❤️
    <h2></h2>
    <p></p>`)
}
