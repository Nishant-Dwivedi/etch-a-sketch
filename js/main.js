
// global variables
const gridContainer = document.getElementById('grid');
const clearButton = document.getElementById('clearAll')

// clear button's function

clearButton.addEventListener('click', function (){
    const squares = prompt('How many squares do you want on each side: ', 16);

    clearGrid();
    makeMyGrid(Number(squares));
    applyHover();
})
//  function calls for a default grid 16 x 16 

makeMyGrid();
applyHover();

// function to set up hover effect

function applyHover () {
    const gridChildArray = document.getElementsByClassName('gridChild');

for (var i = 0; i < gridChildArray.length; i++)
{
    gridChildArray[i].addEventListener('mouseover', function (e){
        // UNCOMMENT FOR FIXED COLOR (SET IN CSS .changeColor class)
        // e.target.classList.add('changeColor');

        // RANDOM COLORS
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;

    })
}
}

// function to make the grid

function makeMyGrid (gridNumber=16) {
    
      if (gridNumber > 100){
        alert(" pick a number under 100!!");
        return;
    }

    for (var i = 0; i < `${gridNumber*gridNumber}`; i++){
        const gridChild = document.createElement("div");
    
        gridChild.style.height = `${960/gridNumber}px`;
        gridChild.style.width= `${960/gridNumber}px`;
        // gridChild.textContent= `${i}`
        gridChild.classList.add('gridChild');

        gridContainer.appendChild(gridChild);
    }
}

// function to clear the grid

function clearGrid () {
    // const gridChildArray = Array.from(document.getElementsByClassName('gridChild'))

    // gridChildArray.forEach(element => {
    //     element.remove();
    // });
    const gridChildArray = Array.from(document.getElementsByTagName('div'))
    console.log(gridChildArray);
    

    for (var i = 1; i < gridChildArray.length; i++){
        gridChildArray[i].remove();
    }
    
    
}