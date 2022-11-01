//selecionar os elementos
var video = document.getElementById('video')
var botao = document.getElementById('btn')

function pause(){
    if (video.paused){
        video.play();
        botao.innerHTML = 'Pause'
    } else {
        video.pause()
        botao.innerHTML = 'Play'
    }
}
