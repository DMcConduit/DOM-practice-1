var headOne = document.querySelector('#headOne')
var headTwo = document.querySelector('#headTwo')
var headThree = document.querySelector('#headThree')

var btnOne = document.querySelector('#btnOne')
var btnTwo = document.querySelector('#btnTwo')
var btnThree = document.querySelector('#btnThree')


headOne.addEventListener('mouseover', function(){
    headOne.textContent = "Hover On!";
    headOne.style.fontFamily = 'Bungee Spice', cursive;

})

headOne.addEventListener('mouseout', function(){
    headOne.textContent = "Hover Over Me!";
    headOne.style.fontFamily = 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    headOne.style.color = 'black';
})



btnOne.addEventListener('mouseover', function(){
    btnOne.style.backgroundColor = 'black';

})

btnOne.addEventListener('mouseout', function(){
    btnOne.style.backgroundColor = 'gray';

})


headTwo.addEventListener('click', function(){
    headTwo.textContent = "Clicked On!";
    headTwo.style.color = 'yellow';

})

btnTwo.addEventListener('click', function(){
    btnTwo.style.backgroundColor = 'red';

})


headThree.addEventListener('dblclick', function(){
    headThree.textContent = 'Double Clicked!';
    headThree.style.color = 'purple';
    headThree.style.fontFamily = 'Oleo Script', cursive;
})


btnThree.addEventListener('dblclick', function(){
    btnThree.style.backgroundColor = 'yellow';

})

