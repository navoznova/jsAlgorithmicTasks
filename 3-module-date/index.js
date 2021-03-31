
function getWeekDay(date) {
    let dayIndex = date.getDay();
    let weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return weekDays[dayIndex];
}

function getLocalDay(date) {
    let dayIndex = date.getDay();
    let weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    if (dayIndex == 0) {
        dayIndex = 7;
    }

    return `${weekDays[dayIndex]} ${dayIndex}`;

}

function getDateAgo(date, days) {
    let dayAgo;
    return dayAgo;
}