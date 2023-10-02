import styles from "./SuperTicTacToe.module.css";
import TicTacToe from "../TicTacToe/TicTacToe";
import useGlobalContext from "../../Context/GlobalContextConsumer";
import { useEffect, useState } from "react";

const SuperTicTacToe = () => {
	return (
		<>
			<Board />
		</>
	);
};

const Board = () => {
	return (
		<div className={styles.board}>
			<div className={`${styles.row} ${styles.row1}`}>
				<Square outerSquare={0} />
				<Square outerSquare={1} />
				<Square outerSquare={2} />
			</div>
			<div className={`${styles.row} ${styles.row2}`}>
				<Square outerSquare={3} />
				<Square outerSquare={4} />
				<Square outerSquare={5} />
			</div>
			<div className={`${styles.row} ${styles.row3}`}>
				<Square outerSquare={6} />
				<Square outerSquare={7} />
				<Square outerSquare={8} />
			</div>
		</div>
	);
};

const Square = ({ outerSquare }) => {
	const {
		winningStates,
		currentOuterSquare,
		setCurrentOuterSquare,
		outOfPlaySquares,
	} = useGlobalContext();
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		for (let i = 0; i < winningStates.length; i++) {
			const [a, b, c] = winningStates[i];
			if (
				outOfPlaySquares[a] &&
				outOfPlaySquares[a] === outOfPlaySquares[b] &&
				outOfPlaySquares[a] === outOfPlaySquares[c]
			) {
				setIsActive(false);
				console.debug(i, outOfPlaySquares[a], a, b, c);
				return;
			}
		}

		if (currentOuterSquare == null) {
			if (outOfPlaySquares[outerSquare] != null) {
				setIsActive(false);
			} else {
				setIsActive(true);
			}
		} else if (outOfPlaySquares[currentOuterSquare] != null) {
			setCurrentOuterSquare(null);
			setIsActive(false);
		} else {
			setIsActive(currentOuterSquare == outerSquare);
		}
	}, [
		winningStates,
		currentOuterSquare,
		outerSquare,
		outOfPlaySquares,
		setCurrentOuterSquare,
	]);

	return (
		<div
			className={`${styles.square} ${
				isActive == true && styles.activeSquare
			}`}
		>
			<TicTacToe outerSquare={outerSquare} />
		</div>
	);
};

export default SuperTicTacToe;
