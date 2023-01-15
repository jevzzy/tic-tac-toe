function playerFactory(name , marker) {
  return {name,
     marker}
}

const playerOne = playerFactory("jude", "x")
const playerTwo = playerFactory("2", "o")


let currentplayer = playerOne.marker

const game = (function(){
const start = document.querySelector(".start-btn")
const restart = document.querySelector(".restart-btn")
const start_page = document.querySelector(".starting-page")
const gamePage = document.querySelector(".frame")
const winningPage = document.querySelector(".winning-page")
const winningText = document.querySelector(".winning-text")
let emptyboard = ["","","","","","","","",""]

start.addEventListener("click", (e)=>{
  console.log(e)
  start_page.style.display = "none"
  gamePage.style.display = "block"
})

restart.addEventListener("click", ()=>{
  winningPage.style.display = "none"
  //start_page.style.display = "block"
  gamePage.style.display = "grid"

  emptyboard.fill("")
  clear()


})


  const boards = document.querySelectorAll('.board')
  const winningArr = [[0,1,2],
                      [3,4,5],
                      [6,7,8],
                      [0,3,6],
                      [1,4,7],
                      [2,5,8],
                      [0,4,8],
                      [2,4,6]
  ]

  
  boards.forEach((board)=>{
    board.addEventListener("click",(e)=>{
       board.textContent = currentplayer
       if(currentplayer == playerOne.marker ){
        currentplayer = playerTwo.marker
      

       
       }
       else if(currentplayer == playerTwo.marker){
        currentplayer = playerOne.marker
        
       }
       console.log(checkWinner())
      
       
       
    }, {once:true})
  
    
  })
  //=======================================================
  

  function clear() {
     for(i=0;i<boards.length; i++) {
      boards[i].textContent = ""
     }
  }
  
  
  function checkWinner() {
    for(i=0;i<boards.length; i++) {
      emptyboard[i] = boards[i].textContent
    
    }
    for(i=0;i<winningArr.length;i++){
      const condition = winningArr[i]
      const cellA = emptyboard[condition[0]]  
      const cellB = emptyboard[condition[1]]
      const cellC = emptyboard[condition[2]]  
     if (cellA == "" || cellB == "" || cellC == "") {
      continue
     }

      if(cellA == cellB && cellB == cellC) {
        gamePage.style.display = "none"
        winningPage.style.display = "flex"
        winningText.textContent = `${cellA} wins`
         
        
          
        break
  
      }
 if(cellA !== cellB && cellB !== cellC) {
  winningText.textContent = ` draw`
 }
    }
    console.log(emptyboard)
  }
  
  
  
   
}())



    