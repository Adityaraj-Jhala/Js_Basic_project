// let mydate = new Date();

// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMinutes());
// console.log(mydate.getHours());

// let a;
// let date;
// let time;
// const options = {day: 'numeric' , weekday: 'long', month: 'numeric' , year: 'numeric'};
// setInterval(() => {
//     a = new Date(); 
//     date = a.toLocaleDateString(undefined, options);
//     time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
//     document.getElementById('text').innerHTML = time + "<br>on " + date;
// },1);

// let mydate;
// let date_1;
// let time;

setInterval(()=>{
    mydate = new Date;
    locale = 'en-US';
    date_1 = mydate.toLocaleDateString(locale, {weekday: 'long', day:'numeric', month:'numeric', year:'numeric'});
    time = mydate.getHours() + ":" + mydate.getMinutes() + ":" + mydate.getSeconds();
    document.getElementById('text').innerHTML =time + " <br> on " + date_1;
},1000);



