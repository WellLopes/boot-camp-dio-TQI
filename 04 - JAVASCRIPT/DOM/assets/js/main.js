// Get my BTN and add event listener
const myBtn = document.getElementById('mode-selector')
      myBtn.addEventListener('click', changeMode)

const checkDm = document.getElementsByClassName('dark-mode')

// Get my html parts
const getBody = document.getElementById('body')
const getH1 = document.getElementById('page-title')
const getFooter = document.getElementById('footer')

function changeMode() {
  if(checkDm.length === 0){
    getBody.classList.add('dark-mode')
    myBtn.classList.add('dark-mode')
    getFooter.classList.add('dark-mode')
    getH1.textContent = 'Light Mode Off'
  } else {
    getBody.classList.remove('dark-mode')
    myBtn.classList.remove('dark-mode')
    getFooter.classList.remove('dark-mode')
    getH1.textContent = 'Light Mode ON'
  }
}
