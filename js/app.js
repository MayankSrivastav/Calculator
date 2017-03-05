'use strict';

$(document).ready(() => {
    // On every click, add numbers to inputs accordingly
    $('.firstRow, .secondRow, .thirdRow, .fourthRow, .fifthRow').click((event) => {
        let input1 = $('#inp1 span'),
            input2 = $('#inp2 span');
        let id = event.target.id;

        // Check if numbers are at most 8
        // then proceed for appending more
        // numbers, else ignore
        if (id === 'backspace') {
            input2.text(input2.text().slice(0, -1));
            input2.text() === '' ? input2.text('0') : input2.text(input2.text());
        } else if (id === 'C') {
            input2.text('0');
            input1.text('');
        } else {
            if (input2.text().length < 8) { // TODO: handle maxlength + 'operator' case
                if (input2.text()[0] === '0' && input1.text() === '') { input2.text(''); } // TODO: Handle 0 + 0 case
                if (id === 'one')          { input1.text() === '' ? input2.append('1') : input2.text('1'); }
                else if (id === 'two')     { input1.text() === '' ? input2.append('2') : input2.text('2'); }
                else if (id === 'three')   { input1.text() === '' ? input2.append('3') : input2.text('3'); }
                else if (id === 'four')    { input1.text() === '' ? input2.append('4') : input2.text('4'); }
                else if (id === 'five')    { input1.text() === '' ? input2.append('5') : input2.text('5'); }
                else if (id === 'six')     { input1.text() === '' ? input2.append('6') : input2.text('6'); }
                else if (id === 'seven')   { input1.text() === '' ? input2.append('7') : input2.text('7'); }
                else if (id === 'eight')   { input1.text() === '' ? input2.append('8') : input2.text('8'); }
                else if (id === 'nine')    { input1.text() === '' ? input2.append('9') : input2.text('9'); }
                else if (id === 'zero')    { input1.text() === '' ? input2.append('0') : input2.text('0'); }
                else if (id === 'decimal') {
                    if (input2.text().includes('.') === false) {
                        input2.append('.');
                    }
                }
                else if (id === 'plus') {
                    input1.append(input2.text() + ' + ');
                }
                else if (id === 'minus') {
                    input1.append(input2.text() + ' - ');
                }
                else if (id === 'divide') {
                    input1.append(input2.text() + ' \u00F7 ');
                }
                else if (id === 'multiply') {
                    input1.append(input2.text() + ' \u00D7 ');
                }
                else if (id === 'modulus') {
                    input1.append(input2.text() + ' \u0025 ');
                }
                else if (id === 'equalTo') {
                    let finalExp = input1.text().replace('\u00F7', '/')
                                                .replace('\u00D7', '*')
                                                .replace('\u0025', '%')
                                                + input2.text();
                    input2.text(eval(finalExp));
                    input1.text('');
                }
            }
        }
    });
});