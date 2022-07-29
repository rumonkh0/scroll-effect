const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

function checkBoxes(){
   const tr = (window.innerHeight - 70)

   boxes.forEach(box => {
      const bx = box.getBoundingClientRect().top

      if (bx < tr) {
         box.classList.add('show')
      }else{
         box.classList.remove('show')
      }
   })  
}

