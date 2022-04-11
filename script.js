let randomNumber = Math.floor(Math.random() * 10) + 1;
let hak = 3;
let btnGues = document.querySelector('.btn_gues');
let btnagain = document.querySelector('.btn_again')
let lucky = document.querySelector('.lucky')
let btninput = document.querySelector('.btn_input');
let predictedNumber = document.querySelector('.predicted_number');
let random = document.querySelector('.random');

btnGues.addEventListener('click', oynat);
btnagain.addEventListener('click', resetBtn);

function oynat() {

    if (hak > 0) {
        hak--;

        sayı = Number(btninput.value);

        console.log(randomNumber);

        if (randomNumber == sayı) {
            predictedNumber.innerText = 'tebrikler bildiniz';
            predictedNumber.style.backgroundColor = 'green';
            predictedNumber.style.color = 'black';
            btnGues.classList.add('btn_hide');
            btnagain.classList.remove('btn_hide');
            stopGame();

        } else {
            predictedNumber.innerText = 'yanlış bildiniz'
            predictedNumber.style.backgroundColor = 'red';
            predictedNumber.style.color = 'black'; let hearts = document.querySelectorAll('#hearts > i')[hak - 0];
            hearts.classList.add('can');
        }
        if (hak === 0) {
            lucky.innerText = 'hakkınız bitti'
            btnGues.classList.add('btn_hide');
            btnagain.classList.remove('btn_hide');
            random.textContent = ('bilmeniz gereken sayı :' + randomNumber)
        }
    }
}

function resetBtn() {
    hak = 3;
    btnagain.classList.add('btn_hide');
    btnGues.classList.add('btn_show');
    predictedNumber.innerText = '';
    btninput.textContent.value = '';
    lucky.innerText = '';
    random.innerText = '';

    for (let i = 0; i < 3; i++) {
        let hearts = document.querySelectorAll('#hearts > i')[i];
        hearts.classList.remove('can');
    }

    randomNumber = Math.floor(Math.random() * 10) + 1;
}