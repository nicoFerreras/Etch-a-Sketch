const container = document.querySelector('.container');
let size = 16;
makeGrid(size); 

const resetBtn = document.getElementById('reset'); 
  resetBtn.addEventListener('click', function () {
    const filledSquare = document.querySelectorAll(".row-square.fill");
    filledSquare.forEach((square) => {
      square.classList.remove('fill');
    })
  });

  const changeBtn = document.getElementById('change');
  changeBtn.addEventListener('click', function () {
        newSize = parseInt(prompt('Please enter the new size that you want (maximum: 100)'));

        if(newSize > 100) {
          alert('The maximum is 100!')
        } else if (newSize <= 0) {
          alert('The size cannot be less then or equal 0!')
        } else if(newSize > 0 && newSize <= 100) {
          const rows = document.querySelectorAll('.row')
          rows.forEach((row) => {
            container.removeChild(row);
          })
          makeGrid(newSize);  
        } else {
          alert('Please enter a valid number!')
        }
  });


function makeGrid(size) {
  
  for (let row = 0; row < size; ++row) {
    const divRow = document.createElement('div')
    divRow.classList.add('row');

      for (let column = 0; column < size; ++column) {
        const square = document.createElement('div')
        square.classList.add('row-square')
        divRow.appendChild(square);
      }
      container.appendChild(divRow);
  }
  fill()
}
function fill() {
  const squares = document.querySelectorAll('.row-square')
  squares.forEach((square) => {
    
    square.addEventListener('mouseenter', function (){
      square.classList.add('fill')
    })
  });
}

// Background:





