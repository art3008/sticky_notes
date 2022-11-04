const addBtn    = document.getElementById('btnAdd')
const modal     = document.getElementById('modal')
const header    = document.getElementById('header')
const allNotes  = document.getElementById('all_notes')

function addNote () {

    header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    allNotes.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    modal.style.display = 'block'


}


addBtn.addEventListener('click', addNote)