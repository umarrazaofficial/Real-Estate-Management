import React, { useContext } from "react";

import Skeleton from "react-loading-skeleton";
import { LoadingContext } from "../../../Context/loadingContext";
import { Th, Td } from "./TableCell.styles";

function TableCell({ heading, children, align, ...rest }) {
  const { isLoading } = useContext(LoadingContext);
  const CellType = props => (heading ? <Th {...props} $align={align} /> : <Td {...props} $align={align} />);

  return <CellType {...rest}>{isLoading ? <Skeleton width={100} height={15} /> : children}</CellType>;
}

export default TableCell;
