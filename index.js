function makeCounter() {
    let count = 0;
    function counter() {
        return count++;
    }

    counter.set = (value) => {
        count = value;
    }

    counter.decrease = () => {
        count--;
    }

    return counter;
}

function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function () {
            console.log(i);
        };
        shooters.push(shooter);
    }

    return shooters;
}

function byField(fieldName) {
    return function (elem1, elem2) {
        return elem1[fieldName] > elem2[fieldName] ? 1 : -1;
    }
}

function inBetween(a, b) {
    return function (elem) {
        return elem >= a && elem <= b;
    }
}

function inArray(arr) {
    return function (elem) {
        return arr.includes(elem);
    }
}