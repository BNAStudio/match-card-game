const form = document.querySelector('.btnContainer');
const inputName = document.querySelector('.input-playerName');
const playBtn = document.querySelector('.btn-playerName');

if(playBtn){
    playBtn.addEventListener('click', getInputName);
}

// clear storage
export function clearStorage(){
    sessionStorage.removeItem('newPlayer')
}

// safe input data
function getInputName() {
    clearStorage();
    sessionStorage.setItem('newPlayer', inputName.value)
    form.reset()
}
