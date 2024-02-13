let time,ClearTime=false;

  var ringtone=new Audio('audio/ringtone.mp3');


setInterval(()=>{
    let d=new Date();
    //console.log(d.getHours(),d.getMinutes(),d.getSeconds());
     htime=d.getHours();
    //console.log(htime)
    mtime=d.getMinutes();
    stime=d.getSeconds();
    ampm="AM";
    if(htime>12){
      htime=htime-12;
      ampm="PM"
    }
    hrotation=30*htime+mtime/2;
    //console.log(hrotation)
    mrotation=6*mtime;
    srotation=6*stime;
    //let hour=document.getElementById('hour');
    hour.style.transform=`rotate(${hrotation}deg)`;
  
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;

    var currenttime=`${htime}:${mtime} ${ampm}`;
    
    if(time == currenttime){
      ringtone.play();
      console.log("ringing...")
    }
  
  },1000)

  select=document.querySelectorAll("select")
  for(i=12;i>=0;i--){
    
    let option =`<option value="${i}">${i}</option>`  
    select[0].firstElementChild.insertAdjacentHTML("afterend",option);
  }



  for(i=59;i>0;i--){
    i=i<10 ? i : i;
    let option =`<option value="${i}">${i}</option>`  
    select[1].firstElementChild.insertAdjacentHTML("afterend",option);
  }


  for(i=2;i>0;i--){
    let p=i==1 ? "AM" : "PM";
    let option =`<option value="${p}">${p}</option>`  
    select[2].firstElementChild.insertAdjacentHTML("afterend",option);
  }

  function ring(){
    let alarmtime=`${select[0].value}:${select[1].value} ${select[2].value}`;
    console.log(alarmtime);

    time=alarmtime;

    var currenttime=`${htime}:${mtime} ${ampm}`;
    console.log(currenttime);

    

    if(ClearTime){
      time="";
      ringtone.pause();
      settime.innerText="setTime"
      return ClearTime= false;

    }

    ClearTime=true;

  
    settime.innerText="ClearTime"
    
  }




  let settime=document.getElementById("button")
  settime.addEventListener("click",ring)
