import * as React from "react";
import styled from "@emotion/styled";
import Cell from "../Cell";

type RowProps = {
  cellStates: boolean[];
  cellHistory: boolean[];
  y: number;
  handleClick(y: number, x: number): () => void;
};

const CellRow: React.FunctionComponent<RowProps> = ({
  cellStates,
  y,
  handleClick,
  cellHistory,
}) => {
  if (!cellStates) debugger;

  const cells = cellStates.map((alive, x) => (
    <Cell
      key={`y-${y}, x-${x}`}
      history={cellHistory[x]}
      alive={alive}
      handleClick={handleClick(y, x)}
    />
  ));

  return <Row id={`row-${y}`}>{cells}</Row>;
};

const Row = styled("div")`
  display: flex;
  flex-direction: row;
`;

export default CellRow;
