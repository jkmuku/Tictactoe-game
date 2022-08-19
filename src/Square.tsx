import React from "react";
interface SquareProps {
	index: number;
	value: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
  }

const Square = (props: SquareProps) => (
	<button onClick={props.onClick}>{props.value}</button>
);

export default Square;