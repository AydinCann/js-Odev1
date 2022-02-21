let nam = prompt("İsminizi giriniz : ");
document.querySelector('#myName').innerHTML = nam;

function showTime(){
    var day = new Date().getDay();
    var saat= new Date().getHours();
    var dakika= new Date().getMinutes();
    var saniye=new Date().getSeconds();
    var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let clock = document.querySelector('#date').innerHTML = `${saat} : ${dakika} : ${saniye}  ${gunler[day]}`;
    
}
setInterval(function(){showTime()});
