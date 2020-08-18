// var data = {name:'Mochi'}

// fetch('/searchData', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
// })
// .then( res => res.json())
// .then( json => console.log(json))

const TextLoad = document.querySelectorAll('.TextLoad');
const Press = document.querySelector('.press');
let count = 0;
// let run = setInterval(textLaod, 1500);

//clear classList
function clear(classList, target) {
    classList.forEach(element => {
        element.classList.remove(target)
    });
}
function textLaod() {
    clear(TextLoad, 'active')
    TextLoad[count].classList.add('active')
    count+=1
    if(count > TextLoad.length-1) { count=0 }
}

Press.addEventListener('click', function(e) {
    clearInterval(run)
})