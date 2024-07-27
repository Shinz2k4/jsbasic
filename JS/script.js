function getTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let day = currentTime.getDate();
    let month = currentTime.getMonth() + 1; // Tháng cần cộng thêm 1
    let year = currentTime.getFullYear();

    // Định dạng giờ và phút để luôn có hai chữ số
    let formattedHours = hours < 10 ? '0' + hours : hours;
    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    let formattedSeconds = seconds < 10? '0' + seconds : seconds;

    // Định dạng ngày, tháng và năm
    let formattedDay = day < 10 ? '0' + day : day;
    let formattedMonth = month < 10 ? '0' + month : month;

    let TimeOclock = formattedHours + ":" + formattedMinutes +":"+ formattedSeconds +"<br>"+
                     formattedDay + "-" + formattedMonth + "-" + year;
    return TimeOclock;
}

console.log(getTime());


document.addEventListener('DOMContentLoaded', (event) => {
    function updateClock() {
    document.getElementById("oclock").innerHTML = getTime();
    
}
setInterval(updateClock,1000);
updateClock();
});
