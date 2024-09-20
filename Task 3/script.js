function solve(val) {
    var v = document.getElementById('res');
    v.value += val;
}
function result() {
    var num1 = document.getElementById('res').value;
    try {
        var num2 = eval(num1.replace('x', '*'));
        document.getElementById('res').value = num2;
    }
    catch {
        document.getElementById('res').value = "Error";
    }
}
function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
}
document.addEventListener('keydown', function (event) {
    const key = Event.key
    const validkeys = '0123456789+-*/.%';
    if (validkeys.includes(key)) {
        solve(key === '*' ? 'x' : key);
    }
    else if (key === 'enter') {
        s
        result();
    }
    else if (key === 'backspace') {
        back();
    }
    else if (key.toLowerCase() === 'c') {
        Clear();
    }
}
);
