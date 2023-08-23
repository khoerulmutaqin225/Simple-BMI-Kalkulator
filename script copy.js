let result = {
    jkl: null,
    usia: null,
    nilaiBB: null,
    nilaiTB: null
}

function check() {
    const gender = document.querySelectorAll('#gender');
    for(let j = 0; j < gender.length; j++) {
        if(gender[0].checked && gender[1].checked) {
            return alert('Pilih salah satu saja!!');
        }
        if(gender[0].checked) {
            result.jkl = 'lk';
        }
        if(gender[1].checked) {
            result.jkl = 'pr';
        }
    }
    return result.jkl;
}

function form() {
    const bb = document.querySelector('#bb');
    const tb = document.querySelector('#tb');
    const usia = document.querySelector('#usia')

    if(bb.value === '' && tb.value === '' && usia.value === ''){
        return alert('Anda belum memasukan nilai berat badan dan tinggi badan anda!!');
    }
    if(bb.value === ''){
        return alert('anda belum memasukan nilai berat badan anda');
    }
    if(tb.value === ''){
        return alert('anda belum memasukan nilai tinggi badan anda');
    }
    if(usia.value === ''){
        return alert('anda belum memasukan nilai tinggi badan anda');
    }


    return result.nilaiBB = bb.value, result.nilaiTB = tb.value, result.usia = usia.value;
}

function counting({jkl, usia, nilaiBB, nilaiTB}) {
    let formula =  null;
    if (jkl === 'lk') {
        formula = 10;
    }
    if (jkl === 'pr'){
        formula = 15;
    }

    let height = parseInt(nilaiTB);
    let weight = parseInt(nilaiBB);

    let n1 = height - 100;
    let result = n1 - n1 * formula / 100;

    if (weight < result) {
        return alert('berat badan anda kurang ideal');
    }
    if ( weight >= result) {
        return alert ('berat badan anda ideal');
    }
}


function action() {
    return check(), form(), counting(result);
}
