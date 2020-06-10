

const btn = document.querySelector('button.main')
const reset = document.querySelector('button.reset')

let result = document.querySelector('div.time div')

let time = 0;

let active = false;

let idI;
const timer = () => {
        if (active === false) {
            active = !active;
            btn.textContent = 'Pause'
           idI = setInterval(start, 10)
        } else {
            active = !active;
            btn.textContent = 'Start'
            clearInterval(idI)
        }

    }

    const start = () => {
        time++
        result.textContent = (time / 100).toFixed(2);
    }

    const resetAll = () => {
        time = 0;
        result.textContent = '----'
        }

    reset.addEventListener ('click', resetAll)  
     btn.addEventListener('click', timer);