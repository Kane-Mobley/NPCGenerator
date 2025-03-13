function getFormattedDate(){
const date = new Date();
const dateYear = String(date.getFullYear());
const dateMonth = String(date.getMonth());
const dateDay = String(date.getDate());
const dateHour = String(date.getHours());
const dateMin = String(date.getMinutes());
const dateSec = String(date.getSeconds());
const formattedDate = (dateYear+dateMonth +  dateDay + "-" + dateHour + dateMin + dateSec)
return formattedDate
}
module.exports = {
    getFormattedDate,
}