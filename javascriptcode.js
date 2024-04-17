const mytime=document.querySelector('#clock')
setInterval(()=> {
    let date=new Date();
    // console.log(date.toLocaleString)
    mytime.innerHTML=date.toLocaleTimeString();
},1000);

