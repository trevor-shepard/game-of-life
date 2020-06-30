import * as React from "react";
import styled from "@emotion/styled";
import Cell from "../Cell";

type RowProps = {
  cellStates: boolean[];
  cellHistory: boolean[];
  y: number;
  handleClick: (y: number, x: number) => void;
  target?: [number, number];
};

const CellRow: React.FunctionComponent<RowProps> = ({
  cellStates,
  y,
  handleClick,
  cellHistory,
  target,
}) => {
  const cells = cellStates.map((alive, x) => (
    <Cell
      key={`y-${y}, x-${x}`}
      history={cellHistory[x]}
      alive={alive}
      handleClick={(): void => handleClick(y, x)}
      isTarget={target && target[0] === y && target[1] === x ? true : false}
      y={y}
      x={x}
    />
  ));

  return <Row id={`row-${y}`}>{cells}</Row>;
};

const Row = styled("div")`
  display: flex;
  flex-direction: row;
`;

export default CellRow;
