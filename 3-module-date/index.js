
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
    let dateInMiliSek = date.getTime();
    let daysInMiliSek = days * 24 * 3600 * 1000;

    let dayAgo = new Date();
    dayAgo.setTime(dateInMiliSek - daysInMiliSek);
    return dayAgo;
}

function getLastDayOfMonth(year, month) {
    let previosDay = new Date(year, month + 1, -1);
    //let previosDay = new Date(year, month+1, 0);
    let date = previosDay.getDate();
    return date;
}

function getSecondsToday() {
    let now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

}

function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    return Math.round((tomorrow - now) / 1000);
}