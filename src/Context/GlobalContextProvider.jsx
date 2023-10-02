import React, { useEffect, useState } from "react";
import InitialValues from "./InitialValues";

export const GlobalContext = React.createContext();

export default function GlobalContextProvider({ children }) {
	const [currentMove, setCurrentMove] = useState(InitialValues?.currentMove);
	const [currentPlayer, setCurrentPlayer] = useState(
		InitialValues?.currentPlayer
	);
	const [currentOuterSquare, setCurrentOuterSquare] = useState(
		InitialValues?.currentOuterSquare
	);
	const [outOfPlaySquares, setOutOfPlaySquares] = useState(
		InitialValues?.outOfPlaySquares
	);
	const [board, setBoard] = useState(InitialValues?.board);
	const [winningStates, setWinningStates] = useState(
		InitialValues?.winningStates
	);

	useEffect(() => {
		setCurrentPlayer(currentMove % 2 == 0 ? "X" : "O");
	}, [currentMove]);

	const value = {
		winningStates,
		setWinningStates,
		currentPlayer,
		setCurrentPlayer,
		board,
		setBoard,
		currentMove,
		setCurrentMove,
		currentOuterSquare,
		setCurrentOuterSquare,
		outOfPlaySquares,
		setOutOfPlaySquares,
	};

	return (
		<GlobalContext.Provider value={value}>
			{children}
		</GlobalContext.Provider>
	);
}
