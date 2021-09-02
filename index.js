function iqTest(numbers) {
    let numbersArray = numbers.split(' ');
    let oddArr = [];
    let evenArr = [];

    numbersArray.forEach(number => { isOdd(number) ? oddArr.push(number) : evenArr.push(number); });
    let differentNumber = oddArr.length == 1 ? numbersArray.indexOf(oddArr[0]) + 1 : numbersArray.indexOf(evenArr[0]) + 1;

    return differentNumber;

    function isOdd(number) {
        return number % 2 > 0;
    }
}

function likes(names) {
    switch (names.length) {
        case 0: return 'no one likes this';

        case 1: return `${names[0]} likes this`;

        case 2: return `${names[0]} and ${names[1]} likes this`;

        case 3: return `${names[0]}, ${names[1]} and ${names[2]} likes this`;

        default:
            let othersNames = names.length - 2;
            return `${names[0]}, ${names[1]} and ${othersNames} others like this`;
    }
}

function validBraces(braces) {
    let letters = braces.split('');
    let template = {
        '[': ']',
        '{': '}',
        '(': ')',
    };

    let stack = [];

    for (let letter of letters) {
        let isOpenBrace = !!template[letter];

        if (isOpenBrace) {
            stack.push(letter);
            continue;
        }

        if (stack.length === 0) {
            return false;
        }

        let lastStackLetter = stack.length ? stack[stack.length - 1] : undefined;
        let lastStackLetterCloseBrace = lastStackLetter ? template[lastStackLetter] : undefined;

        if (lastStackLetterCloseBrace == letter) {
            stack.pop(lastStackLetter);
        } else {
            return false;
        }
    }

    return true;
}

function createPhoneNumber(numbers) {
    let phoneNumberCod = numbers.slice(0, 2).join('');
    let phoneNumberFirstPart = numbers.slice(3, 5).join('');
    let phoneNumberSecondPart = numbers.slice(6, 9).join('');
    return `${phoneNumberCod} ${phoneNumberFirstPart}-${phoneNumberSecondPart}`;
}

function validParentheses(parens) {
    let open = '(';
    let stack = 0;

    for (let i = 0; i < parens.length; i++) {
        parens[i] == open ? stack++ : stack--;
    }

    return stack == 0;
}

function duplicateEncode(word) {
    let arr = word.toLowerCase().split('');
    let open = '(';
    let close = ')'


    let bracesArr = arr.map(element => {
        let startSerchingPosition = arr.indexOf(element)+1;
        let dublicateLetterIndex = arr.indexOf(element, startSerchingPosition);

        return element = (dublicateLetterIndex == -1) ? open : close;
    });

    return bracesArr.join('');
    /*
    Решение с использованием lastIndexOff
    function duplicateEncode(word) {
    let arr = word.toLowerCase().split('');
    let bracesArr = arr.map(element => arr.indexOf(element) == arr.lastIndexOf(element) ? '(' : ')');

    return bracesArr.join('');
}
    */
}
