function sumSalaries(salaries) {
    let salariesArray = Object.values(salaries);
    let sum = salariesArray.reduce((salarySum, currentsalary) =>
        salarySum += currentsalary, 0);

    return sum;
}

function clearArrayOfAnagrams(arr) {
    let map = new Map();

    arr.forEach(element => {
        let key = element.toLowerCase().split('').sort().join('');
        map.set(key, element);
    });
    return Array.from(map.values());
}

function uniqueElemInArray(arr) {
    return Array.from(new Set(arr));

    /*let uniqArray = [];
    let set = new Set();

    arr.forEach(element => {set.add(element)});
    for (let value of set) {
        uniqArray.push(value);
    }
    return uniqArray;*/
}

function count(obj) {
    return Object.keys(obj).length;
}

function topSalary (salaries) {
    if(Object.keys(salaries).length == 0) return null;

    let salariesArray = Object.entries(salaries);
    let maxSalary = 0;
    let nameMax = null;

    salariesArray.forEach(element => {
        let [name, salary] = element;

        if (maxSalary < salary) {
            maxSalary = salary;
            nameMax = name;
        }   
    });
    
    return nameMax;
}