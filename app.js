const status = document.querySelector('.status');
const reset = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

// game variables
let gameIsLive = true;
let xIsNext = true;

//Event Handlers

function HandleWin(letter)
{
    status.innerHTML = `${letter}</span> has Won!`;
    status.style.color='#BD022F';
    for(const celldiv of cellDivs)
    {
        if(!(celldiv.classList[1] === 'x') || !(celldiv.classList[1] === 'o'))
        celldiv.style.cursor='not-allowed';
    }
    gameIsLive = false;
}
function checkgamestatus()
{
    const topLeft = cellDivs[0].classList[1];
    const topmiddle = cellDivs[1].classList[1];
    const topright = cellDivs[2].classList[1];
    
    const MiddleLeft = cellDivs[3].classList[1];
    const Middlemiddle = cellDivs[4].classList[1];
    const Middleright = cellDivs[5].classList[1];

    const bottomLeft = cellDivs[6].classList[1];
    const bottommiddle = cellDivs[7].classList[1];
    const bottomright = cellDivs[8].classList[1];

    //rows
    if(topLeft && topLeft === topmiddle &&topLeft === topright)
    {
        HandleWin(topLeft);
        cellDivs[0].classList.add('win');
        cellDivs[1].classList.add('win');
        cellDivs[2].classList.add('win');
    }
    else if(MiddleLeft && MiddleLeft === Middlemiddle && MiddleLeft===Middleright)
    {
        HandleWin(MiddleLeft);
        cellDivs[3].classList.add('win');
        cellDivs[4].classList.add('win');
        cellDivs[5].classList.add('win');
    }
    else if(bottomLeft && bottomLeft === bottommiddle && bottomLeft === bottomright)
    {
        HandleWin(bottomLeft);
        cellDivs[6].classList.add('win');
        cellDivs[7].classList.add('win');
        cellDivs[8].classList.add('win');
    }
    //columns
    else if(topLeft && topLeft === MiddleLeft && topLeft === bottomLeft)
    {
        HandleWin(topLeft);
        cellDivs[0].classList.add('win');
        cellDivs[3].classList.add('win');
        cellDivs[6].classList.add('win');
    }
    else if(topmiddle && topmiddle === Middlemiddle && topmiddle === bottommiddle)
    {
        HandleWin(topmiddle);
        cellDivs[1].classList.add('win');
        cellDivs[4].classList.add('win');
        cellDivs[7].classList.add('win');
    }
    else if(topright && topright === Middleright && topright === bottomright)
    {
        HandleWin(topright);
        cellDivs[2].classList.add('win');
        cellDivs[5].classList.add('win');
        cellDivs[8].classList.add('win');
    }
    //Diagonals
    else if(topLeft && topLeft === Middlemiddle && topLeft === bottomright)
    {
        HandleWin(topLeft);
        cellDivs[0].classList.add('win');
        cellDivs[4].classList.add('win');
        cellDivs[8].classList.add('win');
    }
    else if(topright && topright === Middlemiddle && topright === bottomLeft)
    {
        HandleWin(topright);
        cellDivs[2].classList.add('win');
        cellDivs[4].classList.add('win');
        cellDivs[6].classList.add('win');
    }
    else
    {
        xIsNext = !xIsNext;
        if (xIsNext) {
        status.innerHTML = `× is next`;
        } else {
        status.innerHTML = `○ is next`;
        }
    }
}
function Handlegamecell(e)
{
    if (!gameIsLive || e.target.classList[1] === 'x' || e.target.classList[1] === 'o') {
        return;
        }
    if(xIsNext)
    {
        e.target.classList.add('x');
        e.target.classList.remove('o');
        checkgamestatus();
    }
    else
    {
        e.target.classList.add('o');
        e.target.classList.remove('x');
        checkgamestatus();
    }
}

function HandleReset()
{
    for(const celldiv of cellDivs)
    {
        celldiv.classList.remove('x');
        celldiv.classList.remove('o');
        celldiv.classList.remove('win');
        celldiv.style.cursor='pointer';
    }
    xIsNext = true;
    status.innerText = `× is next!`;
    status.style.color='#545454';
    gameIsLive = true;
}
//Event Listeners

for(const celldiv of cellDivs)
{
    celldiv.addEventListener('click',(event) => Handlegamecell(event));
}

reset.addEventListener('click',() => HandleReset());