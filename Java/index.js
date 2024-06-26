function displayTime()
{
    let date=new Date()
    let hrs=date.getHours()
    let mins=date.getMinutes()
    let secs=date.getSeconds()



   hrs= hrs<10? `0${hrs}`:`${hrs}`
   mins= mins<10? `0${mins}`:`${mins}`
   secs= secs<10? `0${secs}`:`${secs}`

$("#myRow").html(`<h1>${hrs}:${mins}:${secs}</h1>`);

   setInterval(() => {
    displayTime()
}, 1000);
}

displayTime()


