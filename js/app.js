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
        if (id === 'C') { 
            input2.text(''); 
            input1.text('');
        }
        if (input2.text().length < 8) {
            if (id === 'one')          { input2.append('1'); }
            else if (id === 'two')     { input2.append('2'); }
            else if (id === 'three')   { input2.append('3'); }
            else if (id === 'four')    { input2.append('4'); }
            else if (id === 'five')    { input2.append('5'); }
            else if (id === 'six')     { input2.append('6'); }
            else if (id === 'seven')   { input2.append('7'); }
            else if (id === 'eight')   { input2.append('8'); }
            else if (id === 'nine')    { input2.append('9'); }
            else if (id === 'zero')    { input2.append('0'); }
            else if (id === 'decimal') { input2.append('.'); }
            else if (id === 'plus') { 
                input1.append(input2.text() + ' + '); 
            }
            else if (id === 'minus') { 
                input1.append(input2.text() + ' - '); 
            }
            else if (id === 'divide') { 
                input1.append(input2.text() + ' ' + '\u00F7' + ' '); 
            }
            else if (id === 'multiply') { 
                input1.append(input2.text() + ' ' + '\u00D7' + ' '); 
            }
            else if (id === 'modulus') { 
                input1.append(input2.text() + ' ' + '\u0025' + ' '); 
            }
            else if (id === 'equalTo') { 
                input1.append(input2.text() + ' ' + '\u0025' + ' '); 
            }            
        }
    });
});