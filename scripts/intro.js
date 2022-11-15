const form = document.querySelector('.btnContainer');
const inputName = document.querySelector('.input-playerName');
const playBtn = document.querySelector('.btn-playerName');

// Valida selector y crea evento
if(playBtn){
    playBtn.addEventListener('click', getInputName);
}

// Limpia input
export function clearStorage(){
    sessionStorage.removeItem('newPlayer')
}

// Almacena datos del input
function getInputName() {
    clearStorage();
    sessionStorage.setItem('newPlayer', inputName.value)
    form.reset()
}
