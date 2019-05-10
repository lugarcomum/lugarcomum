var buttonVideo = document.getElementsByClassName("button-video");

var buttonVideo01 = document.getElementById("button-video01");
var buttonVideo02 = document.getElementById("button-video02");
var buttonVideo03 = document.getElementById("button-video03");

var videoSource = document.getElementById("main-source");
var mainVideo = document.getElementById("main-video");

var optionLines = document.getElementsByClassName("option-line");
var video1OptionLine = document.getElementById("video-1-option-line");
var video2OptionLine = document.getElementById("video-2-option-line");
var video3OptionLine = document.getElementById("video-3-option-line");

var wrapperTwo = document.getElementById("wrapper2");
var wrapperFour = document.getElementById("wrapper4");
var wrapperFive = document.getElementById("wrapper5");

var playButton = document.getElementById("play-button");
var playLine = document.getElementById("play-line");
var playing = false;

var mainVideoHeight;

var contentWrapper = document.getElementById("contentWrapper");

var isCellular = false;

function changeToCellular(){
    if(screen.width < 500){
        isCellular = true;
    }
    else{
        isCellular = false;
    }
    console.log(isCellular);
}

function resetStyle(){
    for(var i = 0 ; i < buttonVideo.length ; i++){
        buttonVideo[i].firstElementChild.classList.remove("opcoes-videos-selected");
        optionLines[i].classList.remove("video-option-line");
    }
    playLine.classList.remove("line");
    playButton.classList.remove("play-button-active");
    playButton.firstElementChild.classList.remove("arrow-right-active");
    playing = false;
}

buttonVideo01.addEventListener("click", function(){

    resetStyle();

    video1OptionLine.classList.add("video-option-line");
    buttonVideo01.firstElementChild.classList.add("opcoes-videos-selected");

    console.log("1");
    
    if(isCellular){
        vidhmmeoSource.src = "medias/video/comprimido/vertical.mov";
        mainVideo.poster = "medias/video/vertical/RENDER/POSTER/poster3_vertical.gif";
        mainVideo.load();
    }
    else{
        videoSource.src = "medias/video/ajustados/fetos_1_teste2.mov";
        mainVideo.poster = "medias/video/poster2/inicio.gif";
        mainVideo.load();
    }
});

buttonVideo02.addEventListener("click", function(){
   
    resetStyle();

    video2OptionLine.classList.add("video-option-line");
    buttonVideo02.firstElementChild.classList.add("opcoes-videos-selected");

    if(isCellular){
        videoSource.src = "medias/video/feto2-vertical.mov";
        mainVideo.poster =  "medias/video/poster/inicio.gif";
        mainVideo.load();
    }
    else{
        videoSource.src = "medias/video/feto2.mov";
        mainVideo.poster =  "medias/video/poster/inicio.gif";
        mainVideo.load();
    }

});

buttonVideo03.addEventListener("click", function(){

    resetStyle();
    
    video3OptionLine.classList.add("video-option-line");
    buttonVideo03.firstElementChild.classList.add("opcoes-videos-selected");

    console.log("3");

    if(isCellular){
        videoSource.src = "medias/video/fetos3please-vertical.mov";
        mainVideo.poster =  "medias/video/poster3/poster3.gif";
        mainVideo.load();
    }
    else{
        videoSource.src = "medias/video/fetxs.mov";
        mainVideo.poster =  "medias/video/poster3/poster3.gif";
        mainVideo.load();
    }
});

playButton.addEventListener("click", function(){
    if(playing == false){
        mainVideo.play();
    }
    if(playing == true){
        mainVideo.pause();
    }

    playLine.classList.toggle("line");
    playButton.classList.toggle("play-button-active");
    playButton.firstElementChild.classList.toggle("arrow-right-active");
    playing = !playing;
});

function changeWhenLoadAndResize(){

    mainVideoHeight = mainVideo.offsetHeight;

    if(screen.width >= 1024){
        contentWrapper.style.height = mainVideoHeight+"px";
        playLine.style.transform = "translate(" +playButton.offsetWidth+ "px, " + (-(playButton.offsetHeight/2)) + "px)";
        console.log("load or resize >= 1024");

        //video1OptionLine.style.transform = "translate(" + -40 + "px, " + -35 + "px)";
        video1OptionLine.style.transform = "translate(" + (-(buttonVideo01.offsetWidth)-30) + "px, " + -15 + "px)";
        video2OptionLine.style.transform = "translate(" + (-(buttonVideo02.offsetWidth)-30) + "px, " + -15 + "px)";
        video3OptionLine.style.transform = "translate(" + (-(buttonVideo03.offsetWidth)-30) + "px, " + -15 + "px)";
    }
    else{
        contentWrapper.removeAttribute("style");
        playLine.style.transform = "translate("+ (playButton.offsetWidth/2) +"px, 0px)";
        console.log("load or resize < 1024");

        video1OptionLine.style.transform = "translate(" + (-(wrapperTwo.offsetWidth)/2) + "px, " + (-(buttonVideo01.offsetHeight)+15) + "px)";
        video2OptionLine.style.transform = "translate(" + (-(wrapperFour.offsetWidth)/2) + "px, " + (-(buttonVideo02.offsetHeight)+15) + "px)";
        video3OptionLine.style.transform = "translate(" + (-(wrapperFive.offsetWidth)/2) + "px, " + (-(buttonVideo03.offsetHeight)+15) + "px)";
    }    
};

//$(window).bind("load resize", changeWhenLoadAndResize("load"));
//$(window).bind("resize", changeWhenLoadAndResize("resize"));

window.addEventListener("load", changeWhenLoadAndResize);
window.addEventListener("resize", changeWhenLoadAndResize);

window.addEventListener("load", changeToCellular);
window.addEventListener("resize", changeToCellular);
