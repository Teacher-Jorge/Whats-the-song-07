let wordMade = document.getElementById("wordMade")
let btnMake = document.getElementById('btnMake')
let btnMaked = document.getElementById('btnMaked')
let btnMade = document.getElementById('btnMade')
let btnTranslate = document.getElementById('translate')

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnTranslate.innerHTML = 'E erros graves, eu cometi alguns'
    btnTranslate.style.boxShadow = '1px 1px 1px black'
    setTimeout(function()
    {
        btnTranslate.innerHTML = 'Translate'
        btnTranslate.style.boxShadow = '2px 2px 3px black'
    }, 4000)

})

btnMade.addEventListener('click', function() {
    let songAudio = document.getElementById('song')
    songAudio.play()
    let audio = document.getElementById('click')
    audio.play()
    wordMade.innerHTML = 'Made'
    wordMade.style.color = 'lime'
    btnMade.style.background = 'lawngreen'
    btnMade.style.color = 'green'
    btnMade.disabled = 'true'
    btnMake.disabled = 'true'
    btnMaked.disabled = 'true'
})

btnMake.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordMade.innerHTML = 'make'
    wordMade.style.color = 'red'
    btnMake.style.background = 'red'
    btnMake.disabled = 'true'
})

btnMaked.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordMade.innerHTML = 'maked'
    wordMade.style.color = 'red'
    btnMaked.style.background = 'red'
    btnMaked.disabled = 'true'
})