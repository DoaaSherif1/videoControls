//find
let videoElm=document.querySelector("video");
let playBtn=document.querySelectorAll("input")[1];
let stopBtn=document.querySelectorAll("input")[2];
let start=document.querySelectorAll("input")[3];
let skipBackward=document.querySelectorAll("input")[4];
let skipForward=document.querySelectorAll("input")[5];
let end=document.querySelectorAll("input")[6];
let videoRange=document.querySelectorAll("input")[0];
let videoVal=document.querySelector("span");
let volumeRange=document.querySelectorAll("input")[7];
let muteBtn=document.querySelectorAll("input")[8];
let volumeVal=videoElm.volume;
let speedRange=document.querySelectorAll("input")[9];

//control buttons

playBtn.onclick=function(){
    videoElm.play();
    videoElm.ontimeupdate=function(){
        let minutes = Math.floor(videoElm.currentTime / 60);
        let extraSeconds = Math.floor(videoElm.currentTime % 60);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
        videoVal.innerText=`${minutes}:${extraSeconds}`;
        videoRange.value=videoElm.currentTime;
            
    }
    
}
stopBtn.onclick=function(){
    videoElm.pause();
}
start.onclick=function(){
    videoElm.currentTime=0;
}
skipBackward.onclick=function(){
    videoElm.currentTime-=5;
}
skipForward.onclick=function(){
    videoElm.currentTime+=5;
}
end.onclick=function(){
    videoElm.currentTime=235;
}
//change time with slider
function changeValue(val){
    let minutes = Math.floor(val / 60);
    let extraSeconds = val % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
            videoVal.innerText=`${minutes}:${extraSeconds}`;
            videoElm.currentTime=val;
            
}
//mute button
muteBtn.onclick=function(){
    if(videoElm.volume==0){
        videoElm.volume=volumeVal;
    }else{
        volumeVal=videoElm.volume;
        videoElm.volume=0;

    }    
}
volumeRange.oninput=function(){
    videoElm.volume=volumeRange.value/100;
}

videoElm.onvolumechange=function(){
    volumeRange.value=videoElm.volume*100;
}
//handle speed slider

speedRange.oninput=function(){
    videoElm.playbackRate=speedRange.value;
}