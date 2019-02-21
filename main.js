console.log('hello')

let audioA = document.getElementById("audio-A")
let audioS = document.getElementById("audio-S")
let audioD = document.getElementById("audio-D")
let audioF = document.getElementById("audio-F")
let audioG = document.getElementById("audio-G")
let audioH = document.getElementById("audio-H")
let audioJ = document.getElementById("audio-J")
let audioK = document.getElementById("audio-K")
let audioL = document.getElementById("audio-L")

let keyA= document.getElementById("key-A")
let keyS = document.getElementById("key-S")
let keyD = document.getElementById("key-D")
let keyF = document.getElementById("key-F")
let keyG = document.getElementById("key-G")
let keyH = document.getElementById("key-H")
let keyJ = document.getElementById("key-J")
let keyK = document.getElementById("key-K")
let keyL = document.getElementById("key-L")

let playSound = (event) => {
	if (event.key == "a") {
		audioA.currentTime = 0
		audioA.play()
	} else if (event.key == "s") {
		audioS.currentTime = 0
		audioS.play()
	} else if (event.key == "d") {
		audioD.currentTime = 0
		audioD.play()
	} else if (event.key == "f") {
		audioF.currentTime = 0
		audioF.play()
	} else if (event.key == "g") {
		audioG.currentTime = 0
		audioG.play()
	} else if (event.key == "h") {
		audioH.currentTime = 0
		audioH.play()
	} else if (event.key == "j") {
		audioJ.currentTime = 0
		audioJ.play()
	} else if (event.key == "k") {
		audioK.currentTime = 0
		audioK.play()
	} else if (event.key == "l") {
		audioL.currentTime = 0
		audioL.play()
	}
}

keyA.onclick = () => {
	audioA.currentTime = 0
	audioA.play()
}
keyS.onclick = () => {
	audioS.currentTime = 0
	audioS.play()
}
keyD.onclick = () => {
	audioD.currentTime = 0
	audioD.play()
}
keyF.onclick = () => {
	audioF.currentTime = 0
	audioF.play()
}
keyG.onclick = () => {
	audioG.currentTime = 0
	audioG.play()
}
keyH.onclick = () => {
	audioH.currentTime = 0
	audioH.play()
}
keyJ.onclick = () => {
	audioJ.currentTime = 0
	audioJ.play()
}
keyK.onclick = () => {
	audioK.currentTime = 0
	audioK.play()
}
keyL.onclick = () => {
	audioL.currentTime = 0
	audioL.play()
}


window.addEventListener("keydown", playSound)