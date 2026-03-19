type ThreeTierPlanterWidth = 12 | 24 | 36;
type ThreeTierPlanterHeight = 28 | 34 | 40;

type ThreeTierPlanterDimensions = {
  planterWidth: ThreeTierPlanterWidth;
  planterHeight: ThreeTierPlanterHeight;
};

type CedarBoardStock = {
  label: string;
  boardLength: number;
  boardCost: number;
};

type ThreeTierPlanterEstimate = {
  boardStock: CedarBoardStock;
  boxBoardCount: number;
  topTrimBoardCount: number;
  straightLegBoardCount: number;
  angledLegBoardCount: number;
  boardCount: number;
  materialCost: number;
  wasteAdjustedMaterialCost: number;
  overheadCost: number;
  finalEstimate: number;
  straightLegLength: number;
  angledLegLength: number;
};

const BOARD_FACE_WIDTH = 5.5;
const LEG_WIDTH = 2;
const TOP_TRIM_WIDTH = 1.5;
const BOX_COUNT = 3;
const WASTE_FACTOR = 1.15;
const HARDWARE_OVERHEAD = 8;
const PRICE_MULTIPLIER = 2.5;
const ANGLED_LEG_ANGLE_DEGREES = 30;

function assertValidPlanterWidth(value: number): asserts value is ThreeTierPlanterWidth {
  if (value !== 12 && value !== 24 && value !== 36) {
    throw new Error('Three tier planter width must be 12, 24, or 36 inches.');
  }
}

function assertValidPlanterHeight(value: number): asserts value is ThreeTierPlanterHeight {
  if (value !== 28 && value !== 34 && value !== 40) {
    throw new Error('Three tier planter height must be 28, 34, or 40 inches.');
  }
}

const getBoardStock = (): CedarBoardStock => ({
  label: '5.5 in x 66 in cedar picket',
  boardLength: 66,
  boardCost: 4,
});

const getAngledLegLength = (planterHeight: ThreeTierPlanterHeight) => {
  const angleInRadians = (ANGLED_LEG_ANGLE_DEGREES * Math.PI) / 180;
  return planterHeight / Math.cos(angleInRadians);
};

const getBoardArea = (boardStock: CedarBoardStock) => BOARD_FACE_WIDTH * boardStock.boardLength;

const roundToTwoDecimals = (value: number) => Number(value.toFixed(2));

const calculateBoxBoardEquivalent = (
  planterWidth: ThreeTierPlanterWidth,
  boardArea: number,
): number => {
  const longPieceArea = BOX_COUNT * 2 * planterWidth * BOARD_FACE_WIDTH;
  const mediumPieceArea = BOX_COUNT * (planterWidth - 1) * BOARD_FACE_WIDTH;
  const shortPieceArea = BOX_COUNT * 2 * 5.5 * BOARD_FACE_WIDTH;

  return roundToTwoDecimals((longPieceArea + mediumPieceArea + shortPieceArea) / boardArea);
};

const calculateTopTrimBoardEquivalent = (
  planterWidth: ThreeTierPlanterWidth,
  boardArea: number,
): number => {
  const longTrimLength = planterWidth + 2;
  const shortTrimLength = 7.5;

  const longTrimArea = BOX_COUNT * 2 * longTrimLength * TOP_TRIM_WIDTH;
  const shortTrimArea = BOX_COUNT * 2 * shortTrimLength * TOP_TRIM_WIDTH;

  return roundToTwoDecimals((longTrimArea + shortTrimArea) / boardArea);
};

const calculateStraightLegBoardEquivalent = (
  planterHeight: ThreeTierPlanterHeight,
  boardArea: number,
): number => {
  const straightLegArea = 2 * planterHeight * LEG_WIDTH;

  return roundToTwoDecimals(straightLegArea / boardArea);
};

const calculateAngledLegBoardEquivalent = (angledLegLength: number, boardArea: number): number => {
  const angledLegArea = 2 * angledLegLength * LEG_WIDTH;

  return roundToTwoDecimals(angledLegArea / boardArea);
};

export const calculateThreeTierPlanterEstimate = ({
  planterWidth,
  planterHeight,
}: ThreeTierPlanterDimensions): ThreeTierPlanterEstimate => {
  assertValidPlanterWidth(planterWidth);
  assertValidPlanterHeight(planterHeight);

  const boardStock = getBoardStock();
  const boardArea = getBoardArea(boardStock);
  const straightLegLength = planterHeight;
  const angledLegLength = getAngledLegLength(planterHeight);

  const boxBoardCount = calculateBoxBoardEquivalent(planterWidth, boardArea);
  const topTrimBoardCount = calculateTopTrimBoardEquivalent(planterWidth, boardArea);
  const straightLegBoardCount = calculateStraightLegBoardEquivalent(planterHeight, boardArea);
  const angledLegBoardCount = calculateAngledLegBoardEquivalent(angledLegLength, boardArea);

  const totalBoardEquivalent =
    boxBoardCount + topTrimBoardCount + straightLegBoardCount + angledLegBoardCount;

  const boardCount = Math.ceil(totalBoardEquivalent);
  const materialCost = boardCount * boardStock.boardCost;
  const wasteAdjustedMaterialCost = Number((materialCost * WASTE_FACTOR).toFixed(2));
  const overheadCost = HARDWARE_OVERHEAD;
  const finalEstimate = Math.ceil((wasteAdjustedMaterialCost + overheadCost) * PRICE_MULTIPLIER);

  return {
    boardStock,
    boxBoardCount,
    topTrimBoardCount,
    straightLegBoardCount,
    angledLegBoardCount,
    boardCount,
    materialCost,
    wasteAdjustedMaterialCost,
    overheadCost,
    finalEstimate,
    straightLegLength: roundToTwoDecimals(straightLegLength),
    angledLegLength: roundToTwoDecimals(angledLegLength),
  };
};
