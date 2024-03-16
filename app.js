const bg= document.querySelector('#bg')
const info=document.querySelector('#info')
const cells=['','','','','','','','',''
]
let go='circle'
info.textContent='Circle goes first'
function createboard(){
    cells.forEach((cell,index) => {
        const ele=document.createElement('div')
        ele.classList.add('square')
        ele.id=index;
        ele.addEventListener('click',addgo)
        bg.append(ele)
    })
}
createboard()
function addgo(e){
    const disp=document.createElement('div')
    disp.classList.add(go)
    e.target.append(disp)
    go = go =='circle'?'cross':'circle'
    info.textContent='It is now '+go+'s turn'
    e.target.removeEventListener('click',addgo)
    score()
}
function score()
{
    const squares = document.querySelectorAll('.square')
    const win=[ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    
    win.forEach(array =>{
        const cw = array.every(cell =>
            squares[cell].firstChild?.classList.contains('circle'))
            
        if(cw){
            info.textContent='Circle wins!'
            squares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }
    })

    win.forEach(array =>{
        const crw = array.every(cell => 
            squares[cell].firstChild?.classList.contains('cross'))
        
        if(crw){
            info.textContent='Cross wins!'
            squares.forEach(square =>square.replaceWith(square.cloneNode(true)))
            return
        }
    })
}
