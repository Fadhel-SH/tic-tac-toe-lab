/*-------------------------------- Constants --------------------------------*/

// const restBtn
// Constants
const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];


/*---------------------------- Variables (state) ----------------------------*/
// Initialize game state variables
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameEnded = false;
let winner = null;
let tie = false;



/*------------------------ Cached Element References ------------------------*/
// Cache DOM elements
const squares = document.querySelectorAll('.sqr');
const messageDisplay = document.getElementById('message');


/*-------------------------------- Functions --------------------------------*/

// Render the game state
function renderBoard() {
    squares.forEach((square, index) => {
      square.textContent = board[index];
    });
    messageDisplay.textContent = `Player ${currentPlayer}'s turn`;
  }
  
  // Update the message display
  function updateMessage() {
      if (!winner && !tie) {
        messageEl.textContent = `Player ${turn}'s turn`;
      } else if (tie) {
        messageEl.textContent = "It's a tie!";
      } else {
        messageEl.textContent = `Player ${winner} wins!`;
      }
    }
  
  // Handle square click
  function handleClick(event) {
    const squareIndex = parseInt(event.target.id);
    if (board[squareIndex] === '' && !gameEnded) {
      board[squareIndex] = currentPlayer;
      renderBoard();
      checkWinner();
      togglePlayer();
    }
  }
  
  // Check for a winner
  function checkWinner() {
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        messageDisplay.textContent = `Player ${currentPlayer} wins!`;
        gameEnded = true;
        break;
      }
    }
  }
  
  // Toggle active player
  function togglePlayer() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
  }
  

  // Reset the game
  function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameEnded = false;
    renderBoard();
  }
  

/*----------------------------- Event Listeners -----------------------------*/
  // Add click event listeners to squares
  squares.forEach(square => {
    square.addEventListener('click', handleClick);
  });
  



// Call renderBoard to initialize the game
renderBoard();

// Call init when the app loads
window.addEventListener('load', init);







