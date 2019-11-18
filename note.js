const Note  = {

    idCounter: 8,
    dragged: null,

    procces(noteElement){
        noteElement.addEventListener('dblclick', function(event){
            noteElement.setAttribute('contenteditable', 'true')
            noteElement.removeAttribute('draggable', 'false')
            noteElement.closest('.column').removeAttribute('draggable', 'false')
            noteElement.focus()
        })
        noteElement.addEventListener('blur', function(event){
            noteElement.setAttribute('contenteditable', 'false')
            noteElement.setAttribute('draggable', 'true')
            noteElement.closest('.column').setAttribute('draggable', 'true')
            if (!noteElement.textContent.trim().length){
                noteElement.remove()
    
            }
    
        })
    
        
        noteElement.addEventListener('dragstart', Note.dragstart),
        noteElement.addEventListener('dragend', Note.dragend),
        noteElement.addEventListener('dragenter', Note.dragenter),
        noteElement.addEventListener('dragover', Note.dragover),
        noteElement.addEventListener('dragleave', Note.dragleave),
        noteElement.addEventListener('drop', Note.drop)
    },

    create(){ 
        const noteElement = document.createElement('div')
        noteElement.classList.add('note')
        noteElement.setAttribute('draggable', 'true')
        noteElement.setAttribute('data-note-id', Note.idCounter)

        Note.idCounter++
        Note.procces(noteElement)

        return noteElement

    },

    dragstart (event){
        event.stopPropagation()
        console.log('dragstart', event, this)
        Note.dragged = this
        this.classList.add('dragged')
        
        
    },
    
    dragend (event){
        event.stopPropagation()
        console.log('dragend', event, this)
        Note.dragged = null
        this.classList.remove('dragged')
        document
            .querySelectorAll('.note')
            .forEach(x => x.classList.remove('under'))
        
            
        
    },
    
    dragenter (event){
        event.stopPropagation()
    
        if(!Note.dragged || this === Note.dragged) {
            return
        }
        console.log('dragenter', event, this)
        this.classList.add('under')
    },
        
    dragover (event){
        event.preventDefault()
        if(!Note.dragged || this === Note.dragged){
            return
        }
        
        console.log('dragover', event, this)
    },
    dragleave(event) {
        event.stopPropagation()
        if(!Note.dragged || this === Note.dragged){
            return
        }
           
        console.log('dragleave', event, this)
        this.classList.remove('under')
    },
        
    drop (event){
        event.stopPropagation()
        if(!Note.dragged || this === Note.dragged){
            return
        }
        console.log(this)
        console.log(Note.dragged)
    
        if (this.parentElement === Note.dragged.parentElement) {
    
            const note = Array.from(this.parentElement.querySelectorAll('.note'))
            const indexA = note.indexOf(this)
            const indexB = note.indexOf(Note.dragged)
            if (indexA < indexB){
                this.parentElement.insertBefore(Note.dragged, this)
            }
            else{
                this.parentElement.insertBefore(Note.dragged, this.nextElementSibling)
    
            }
    
        }
    
        else{
            this.parentElement.insertBefore(Note.dragged, this)
        }
    }

}



