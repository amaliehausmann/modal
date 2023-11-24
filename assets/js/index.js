const modal = document.getElementById('myModal');
const button = document.getElementById('myButton')
const acceptButton = document.getElementById('accept');



button.addEventListener('click', () => {
modal.style.display = 'flex';
});

accept.addEventListener('click', () =>{
    modal.style.display = 'none';
})