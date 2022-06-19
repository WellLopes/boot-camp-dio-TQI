var i = 0,
  text,
  text2
text = 'Hi, my name is Well Lopes'
text2 = "I'am a Front-End Developr"

function typing() {
  if (i < text.length) {
    document.getElementById('text').innerHTML += text.charAt(i)
    i++
    setTimeout(typing, 150)
  }
}

typing()
