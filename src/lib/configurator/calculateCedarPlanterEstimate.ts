type CedarPlanterDimensions = {
  width: number;
  depth: number;
  planterHeight: number;
};

type CedarBoardStock = {
  label: string;
  boardLength: number;
  boardCost: number;
};

type CedarPlanterEstimate = {
  boardStock: CedarBoardStock;
  sideBoardCount: number;
  bottomBoardCount: number;
  legBoardCount: number;
  supportBoardCount: number;
  boardCount: number;
  materialCost: number;
  wasteAdjustedMaterialCost: number;
  overheadCost: number;
  finalEstimate: number;
};

const BOARD_FACE_WIDTH = 5;
const WASTE_FACTOR = 1.15;
const HARDWARE_OVERHEAD = 8;
const PRICE_MULTIPLIER = 2.5;

const getBoardStock = (width: number, depth: number): CedarBoardStock => {
  const longestCut = Math.max(width, depth);

  if (longestCut <= 66) {
    return {
      label: '5 in x 66 in cedar picket',
      boardLength: 66,
      boardCost: 4,
    };
  }

  if (longestCut <= 96) {
    return {
      label: '5 in x 96 in cedar picket',
      boardLength: 96,
      boardCost: 6,
    };
  }

  throw new Error('Requested planter size is too large for the current cedar picket options.');
};

const calculateHorizontalSideBoards = (
  width: number,
  depth: number,
  planterHeight: number,
  boardLength: number,
) => {
  const rowsPerFace = Math.ceil(planterHeight / BOARD_FACE_WIDTH);

  let widthCutsRemaining = rowsPerFace * 2;
  let depthCutsRemaining = rowsPerFace * 2;
  let boardCount = 0;

  while (widthCutsRemaining > 0 || depthCutsRemaining > 0) {
    let remainingLength = boardLength;

    if (widthCutsRemaining > 0 && depthCutsRemaining > 0 && width + depth <= remainingLength) {
      remainingLength -= width;
      remainingLength -= depth;
      widthCutsRemaining -= 1;
      depthCutsRemaining -= 1;
    } else if (widthCutsRemaining > 0 && width <= remainingLength) {
      remainingLength -= width;
      widthCutsRemaining -= 1;
    }

    while (depthCutsRemaining > 0 && depth <= remainingLength) {
      remainingLength -= depth;
      depthCutsRemaining -= 1;
    }

    boardCount += 1;
  }

  return {
    boardCount,
  };
};

const calculateBottomBoards = (width: number, depth: number, boardLength: number) => {
  const bottomPieces = Math.ceil(width / BOARD_FACE_WIDTH);
  const piecesPerBoard = Math.floor(boardLength / depth);

  if (piecesPerBoard < 1) {
    throw new Error('Requested planter depth is too large for the current cedar picket options.');
  }

  return Math.ceil(bottomPieces / piecesPerBoard);
};

const calculateLegBoards = (longestSide: number) => {
  if (longestSide <= 36) {
    return 2;
  }

  return 2;
};

const calculateSupportBoards = (longestSide: number) => {
  if (longestSide <= 36) {
    return 1;
  }

  return 2;
};

export const calculateCedarPlanterEstimate = ({
  width,
  depth,
  planterHeight,
}: CedarPlanterDimensions): CedarPlanterEstimate => {
  const boardStock = getBoardStock(width, depth);
  const longestSide = Math.max(width, depth);

  const sideBoardCount = calculateHorizontalSideBoards(
    width,
    depth,
    planterHeight,
    boardStock.boardLength,
  ).boardCount;

  const bottomBoardCount = calculateBottomBoards(width, depth, boardStock.boardLength);
  const legBoardCount = calculateLegBoards(longestSide);
  const supportBoardCount = calculateSupportBoards(longestSide);

  const boardCount = sideBoardCount + bottomBoardCount + legBoardCount + supportBoardCount;

  const materialCost = boardCount * boardStock.boardCost;
  const wasteAdjustedMaterialCost = materialCost * WASTE_FACTOR;
  const finalEstimate = Math.ceil(
    (wasteAdjustedMaterialCost + HARDWARE_OVERHEAD) * PRICE_MULTIPLIER,
  );

  return {
    boardStock,
    sideBoardCount,
    bottomBoardCount,
    legBoardCount,
    supportBoardCount,
    boardCount,
    materialCost,
    wasteAdjustedMaterialCost,
    overheadCost: HARDWARE_OVERHEAD,
    finalEstimate,
  };
};
