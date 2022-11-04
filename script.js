const addBtn    = document.getElementById('btnAdd')
const modal     = document.getElementById('modal')
const header    = document.getElementById('header')
const allNotes  = document.getElementById('all_notes')
const container = document.getElementById('container')
const body      = document.querySelector('body')


function addNote () {

    header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    allNotes.style.background = 'rgba(0, 0, 0, 0.5)'
    //body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    modal.style.display = 'block'

    console.log(body);

}


addBtn.addEventListener('click', addNote)