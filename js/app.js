// const btns = document.querySelectorAll("btn");

// btns.forEach(e=>{
//     e.addEventListener("click", ()=>{

//     })
// })



const push = document.getElementById('push');
const pop = document.getElementById('pop');
const shift = document.getElementById('shift');
const unshift = document.getElementById('unshift');
const input = document.getElementById('input');
const output = document.getElementById('output');
const arr = [3, 5];

output.innerHTML = arr;

push.addEventListener('click', () => {
    if (input.value == '') {
        return
    } else {
        arr.push(input.value);
        output.innerHTML = arr;
        input.value = '';
    }
})

pop.addEventListener('click', () => {
    arr.pop();
    output.innerHTML = arr;
    input.value = '';
})

shift.addEventListener('click', () => {
    arr.shift();
    output.innerHTML = arr;
    input.value = '';
})

unshift.addEventListener('click', () => {
    if (input.value == '') {
        return
    } else {
        arr.unshift(input.value);
        output.innerHTML = arr;
        input.value = '';
    }
})

