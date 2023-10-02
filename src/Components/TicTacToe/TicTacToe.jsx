/* eslint-disable react/no-unknown-property */
import styles from "./TicTacToe.module.css";
import useGlobalContext from "../../Context/GlobalContextConsumer";
import { useEffect, useState } from "react";

const TicTacToe = ({ outerSquare }) => {
	return (
		<>
			<Board outerSquare={outerSquare} />
		</>
	);
};

const Board = ({ outerSquare }) => {
	return (
		<div className={styles.board}>
			<div className={`${styles.row} ${styles.row1}`}>
				<Square outerSquare={outerSquare} innerSquare={0} />
				<Square outerSquare={outerSquare} innerSquare={1} />
				<Square outerSquare={outerSquare} innerSquare={2} />
			</div>
			<div className={`${styles.row} ${styles.row2}`}>
				<Square outerSquare={outerSquare} innerSquare={3} />
				<Square outerSquare={outerSquare} innerSquare={4} />
				<Square outerSquare={outerSquare} innerSquare={5} />
			</div>
			<div className={`${styles.row} ${styles.row3}`}>
				<Square outerSquare={outerSquare} innerSquare={6} />
				<Square outerSquare={outerSquare} innerSquare={7} />
				<Square outerSquare={outerSquare} innerSquare={8} />
			</div>
		</div>
	);
};

const Square = ({ outerSquare, innerSquare }) => {
	const {
		winningStates,
		currentPlayer,
		board,
		setBoard,
		setCurrentMove,
		setCurrentOuterSquare,
		setOutOfPlaySquares,
	} = useGlobalContext();
	const [squareValue, setSquareValue] = useState("");

	useEffect(() => {
		setSquareValue(board[outerSquare][innerSquare]);
	}, [board, innerSquare, outerSquare]);

	const handlePlay = () => {
		let newBoard = JSON.parse(JSON.stringify(board));

		if (newBoard[outerSquare][innerSquare]) return;

		newBoard[outerSquare][innerSquare] = currentPlayer;

		checkWin({ newBoard });

		setCurrentMove((prev) => prev + 1);
		setCurrentOuterSquare(innerSquare);
		setBoard(JSON.parse(JSON.stringify(newBoard)));
	};

	const checkWin = ({ newBoard: board }) => {
		for (let i = 0; i < board.length; i++) {
			let square = board[i];
			for (let j = 0; j < winningStates.length; j++) {
				const [a, b, c] = winningStates[j];
				if (
					square[a] &&
					square[a] === square[b] &&
					square[a] === square[c]
				) {
					setOutOfPlaySquares((prev) => ({
						...prev,
						[i]: square[a],
					}));
				}
			}
		}
	};

	return (
		<>
			<div
				className={`${styles.square}`}
				data-square-value={squareValue}
				data-current-player={currentPlayer}
				onClick={handlePlay}
			></div>
		</>
	);
};

export default TicTacToe;
