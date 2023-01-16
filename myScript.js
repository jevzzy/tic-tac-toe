function playerFactory(name , marker) {
  return {name,
     marker}
}

const playerOne = playerFactory("jude", "x")
const playerTwo = playerFactory("2", "o")


let currentplayer = playerOne.marker
let waitingPlayer = playerTwo.marker

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
      if(board.textContent == "") {
        board.textContent = currentplayer
        if(currentplayer == playerOne.marker ){
         currentplayer = playerTwo.marker
         waitingPlayer = playerOne.marker
       
 
        
        }
        else if(currentplayer == playerTwo.marker){
         currentplayer = playerOne.marker
         waitingPlayer = playerTwo.marker
         
        }
      }
      else if(board.textContent !== "") {
        board.style.cursor = "not-allowed"
       preventDefault()
      }
       
      
    
        
      
      
      
       console.log(checkWinner())
      
       
       
    })
  
    
  })


 
  //=======================================================
  

  function clear() {
     for(i=0;i<boards.length; i++) {
      boards[i].textContent = ""
      boards[i].style.backgroundColor = "lightgrey"
      currentplayer = playerOne.marker
     }
  }
  
  
  
  function checkWinner() {
    for(w=0; w< emptyboard.length; w++) {
      emptyboard[w] = boards[w].textContent
      
    }
      
    console.log(emptyboard)
    for (let i = 0; i < winningArr.length; i++) {
      let winComboArray = winningArr[i];
      // when we start checking each combo, we start by assuming it is a win
      let isAWin = true;
      for (let j = 0; j<winComboArray.length; j++){
        let cellIndex = winComboArray[j];
        if(emptyboard[ cellIndex ]  !== waitingPlayer) {
          // the ONLY way it is not a win is if any cell
          //  doesn't contain the current player's marker
          isAWin = false
          console.log(isAWin)
        }
      }
      // at this point, did this combination represent a win?
      //  isAWin will tell us! If it is a win, return a WIN!
      if(isAWin) {

        winningPage.style.display = "flex"
        winningText.textContent = `${waitingPlayer} won`
        boards[winComboArray[0]].style.backgroundColor = "red"
        boards[winComboArray[1]].style.backgroundColor = "orange"
        boards[winComboArray[2]].style.backgroundColor = "yellow"
        return winComboArray; } // this way, we get back the indexes of a win
      // if not, sad face, keep looping.
 
    }
    
    
    // if we get to here, there was no win. We checked all the combos, and not
    // one was a winner. return false, to tell whoever called us "nope!"
  }
  
  //.style.backgroundColor = "green"
  
   
}())



    