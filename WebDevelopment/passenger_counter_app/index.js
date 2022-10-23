let countEl = document.getElementById("counter_el");
let prev = document.getElementById("prev-count");
let count = 0;

function increment() {
    count++;
    countEl.innerHTML = count;
}

function save(){
    let countstr = count + " - ";
    // console.log(count)
    // prev.innerHTML += countstr;
    prev.textContent += countstr;
    count = 0;
    countEl.innerHTML = 0;
}

