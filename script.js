document
    .querySelectorAll('.column')
    .forEach(Column.procces)
        

document
.querySelector('[data-action-addColumn]')
.addEventListener('click', function(event){
    console.log(this)
    const columnElement = document.createElement('div')
    columnElement.classList.add('column')
    columnElement.setAttribute('draggable', 'true')
    columnElement.setAttribute('data-column-id', Column.idCounterCounter)
    columnElement.innerHTML = 
  `<p class="column-header">В плане</p>
  <div data-notes></div>
  <p class="column-footer">
      <span data-action-addNote class="action">+ Добавить карточку</span>
  </p>`
    Column.idCounterCounter++
    document.querySelector('.columns').append(columnElement)
    Column.procces(columnElement)

})

document
    .querySelectorAll('.note')
    .forEach(Note.procces)





    

    
    















// function columnDelete(column){
//     const btn_delete = column.querySelector('[data-delete]')
//     btn_delete.addEventListener('click', function(event){
//     console.log(this)
//     let colum_item = document.querySelector('[data-column-id="1"]')
//     colum_item.remove(this)
        
//     })
// }


