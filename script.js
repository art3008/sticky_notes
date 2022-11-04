const addBtn    = document.getElementById('btnAdd')
const modal     = document.getElementById('modal')
const header    = document.getElementById('header')
const allNotes  = document.getElementById('all_notes')
const container = document.getElementById('container')
const body      = document.querySelector('body')
const hide      = document.getElementById('hide')



function openModal () {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    modal.style.display = 'block'
}

function hideModal() {

    header.style.backgroundColor = '#d9b38d'
    modal.style.display = 'none'
}


addBtn.addEventListener('click', openModal)
hide.addEventListener('click', hideModal)

modal.addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
        addNote()
    }
})


function addNote() {


    const note      = document.createElement('div')
    const details   = document.createElement('div')
    const descrip   = document.createElement('h2')

    note.className      = 'note'
    details.className   = 'details'

    

    details.appendChild(descrip.innerHTML)
    note.appendChild(note.innerHTML)
    allNotes.appendChild(note)
    




}