var choose = 0;
var music_p = 0;
var music ;
var play_btn ;
var music_name ;
var singer ;

function initial(){
    music = document.getElementById("music");
    play_btn = document.getElementById("btn");
    music_name = document.getElementById("music_name");
    singer = document.getElementById("singer");
}

function play(){
    if(!choose){alert("请先选择音乐")}
    else
    {
        if(music_p){
            music.pause();
            music_p = 0;
            play_btn.innerHTML = "PLAY";
        }else{
            music.play();
            music_p = 1;
            play_btn.innerHTML = "PAUSE";
        }
    }
}
function change_music_1(){
    music.src = "music/EINK - One Two.mp3";
    music.play();
    music_p = 1;
    play_btn.innerHTML = "PAUSE";
    choose = 1;
    music_name.innerHTML = "One Two";
    singer.innerHTML = "EINK";
}
function change_music_2(){
    music.src = "music/顿顿 - 让我（Private Jet Remix）.mp3";
    music.play();
    music_p = 1;
    play_btn.innerHTML = "PAUSE";
    choose = 1;
    music_name.innerHTML = "让我";
    singer.innerHTML = "顿顿";
}
function change_music_3(){
    music.src = "music/柳爽 - 莫妮卡.mp3";
    music.play();
    music_p = 1;
    play_btn.innerHTML = "PAUSE";
    choose = 1;
    music_name.innerHTML = "莫妮卡";
    singer.innerHTML = "柳爽";
}
function change_music_4(){
    music.src = "music/Kurt Hugo Schneider,MADILYN - Señorita.mp3";
    music.play();
    music_p = 1;
    play_btn.innerHTML = "PAUSE";
    choose = 1;
    music_name.innerHTML = "Señorita";
    singer.innerHTML = "Kurt Hugo Schneider MADILYN";
}
function change_music_5(){
    music.src = "music/顿顿 - 知汝不能.mp3";
    music.play();
    music_p = 1;
    play_btn.innerHTML = "PAUSE";
    choose = 1;
    music_name.innerHTML = "知汝不能";
    singer.innerHTML = "顿顿";
}