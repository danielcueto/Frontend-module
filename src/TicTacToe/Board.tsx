import { Square } from "./Square";
import { calculateWinner } from "./game";

type BoardProps = {
  xIsNext: boolean;          
  squares: Array<string>;    
  onPlay: (squares: Array<string>) => void; 
};


export function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    // Si ya hay un ganador o la casilla ya está ocupada, no hace nada
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    
    // Crea una copia del estado actual del tablero
    const nextSquares = squares.slice();
    
    // Marca la casilla con X u O dependiendo del turno
    nextSquares[i] = xIsNext ? "X" : "O";
    
    // Notifica al componente padre sobre el nuevo estado del tablero
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);
  
  
  const status = winner ? 
    `Ganador: ${winner}` 
    : isDraw 
      ? "Empate!" 
      : `Siguiente jugador: ${xIsNext ? "X" : "O"}`;

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
