const time = 4000; // ms
const step = 100;

function outNum(num, elem){
    let l = document.querySelector('#'+elem);
    n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if (n == num) {
            clearInterval(interval)
        }
        l.innerHTML = n;
},
        t);
}



