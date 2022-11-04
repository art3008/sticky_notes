const addBtn    = document.getElementById('btnAdd')
const modal     = document.getElementById('modal')
const header    = document.getElementById('header')
const allNotes  = document.getElementById('all_notes')
const container = document.getElementById('container')
const body      = document.querySelector('body')
const hide      = document.getElementById('hide')
const usrInp    = document.getElementById('user_input')


let colorsArray = ["#7E6ED4", 
"#2d7e95", 
"#5294e2", 
"#d65bdc",
"#ff2000",
"#162fff",
"#2b80cc"]





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


    let randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)]

    let note      = document.createElement('div')
    let details   = document.createElement('div')
    let descrip   = document.createElement('h2')

    note.className      = 'note'
    note.style.backgroundColor = randomColor
    note.style.transform = `rotate(${Math.floor(Math.random() * -5)}deg)`
    details.className   = 'details'
    descrip.innerHTML   =  usrInp.value

    allNotes.appendChild(note)
    note.appendChild(details)
    details.appendChild(descrip)
    
    note.addEventListener('click', () => {
        note.remove()
    })

}