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

const USABLE_BOARD_FACE_WIDTH = 5;
const WASTE_FACTOR = 1.15;
const HARDWARE_OVERHEAD = 8;
const PRICE_MULTIPLIER = 2.5;
const LEG_BOARD_COUNT = 2;

const assertPositiveNumber = (value: number, label: string) => {
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error(`${label} must be greater than 0.`);
  }
};

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

const estimateHorizontalSideBoards = (
  width: number,
  depth: number,
  planterHeight: number,
  boardLength: number,
) => {
  const rowsPerFace = Math.ceil(planterHeight / USABLE_BOARD_FACE_WIDTH);

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

  return boardCount;
};

const estimateBottomBoards = (width: number, depth: number, boardLength: number) => {
  const options = [
    {
      piecesNeeded: Math.ceil(width / USABLE_BOARD_FACE_WIDTH),
      pieceLength: depth,
    },
    {
      piecesNeeded: Math.ceil(depth / USABLE_BOARD_FACE_WIDTH),
      pieceLength: width,
    },
  ];

  const boardCounts = options.map(({ piecesNeeded, pieceLength }) => {
    const piecesPerBoard = Math.floor(boardLength / pieceLength);

    if (piecesPerBoard < 1) {
      return Number.POSITIVE_INFINITY;
    }

    return Math.ceil(piecesNeeded / piecesPerBoard);
  });

  const bestCount = Math.min(...boardCounts);

  if (!Number.isFinite(bestCount)) {
    throw new Error('Requested planter size is too large for the current cedar picket options.');
  }

  return bestCount;
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
  assertPositiveNumber(width, 'Width');
  assertPositiveNumber(depth, 'Depth');
  assertPositiveNumber(planterHeight, 'Planter height');

  const boardStock = getBoardStock(width, depth);
  const longestSide = Math.max(width, depth);

  const sideBoardCount = estimateHorizontalSideBoards(
    width,
    depth,
    planterHeight,
    boardStock.boardLength,
  );

  const bottomBoardCount = estimateBottomBoards(width, depth, boardStock.boardLength);
  const legBoardCount = LEG_BOARD_COUNT;
  const supportBoardCount = calculateSupportBoards(longestSide);

  const boardCount = sideBoardCount + bottomBoardCount + legBoardCount + supportBoardCount;
  const materialCost = boardCount * boardStock.boardCost;
  const wasteAdjustedMaterialCost = Number((materialCost * WASTE_FACTOR).toFixed(2));
  const overheadCost = HARDWARE_OVERHEAD;
  const finalEstimate = Math.ceil((wasteAdjustedMaterialCost + overheadCost) * PRICE_MULTIPLIER);

  return {
    boardStock,
    sideBoardCount,
    bottomBoardCount,
    legBoardCount,
    supportBoardCount,
    boardCount,
    materialCost,
    wasteAdjustedMaterialCost,
    overheadCost,
    finalEstimate,
  };
};

export type ConfigurableProductId = 'cedar-planter';

export type ConfigurableProduct = {
  id: ConfigurableProductId;
  label: string;
  description: string;
};

export const CONFIGURABLE_PRODUCTS: ConfigurableProduct[] = [
  {
    id: 'cedar-planter',
    label: 'Cedar Planter',
    description: 'Custom cedar planter boxes built to your dimensions.',
  },
];

export interface ConfiguratorFormValues {
  productType: ConfigurableProductId | null;
  width: string;
  depth: string;
  planterHeight: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}
