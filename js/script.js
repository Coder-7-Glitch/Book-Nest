// Cards
// About Card
const cancel1 = document.getElementById('cancel1');
const aboutMsg = document.getElementById('aboutMsg');
const aboutBtn = document.getElementById('aboutBtn');

cancel1.onclick = () => {
    aboutMsg.style.display = 'none';
};

aboutBtn.onclick = () => {
    aboutMsg.style.display = 'block';
};