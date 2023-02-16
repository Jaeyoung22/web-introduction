let tc = 0;
let inputValue;

function inputValueChange() {
    inputValue = document.getElementById('inputValue').value;
}

function cc(ff) {
    if (ff.checked)
        tc += 1;
    else
        tc -= 1;
}

function c() {
    alert(inputValue + '님, 저와 ' + tc + '개의 취향이 같으시네요!');
}
