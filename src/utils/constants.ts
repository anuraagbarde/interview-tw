import { ObjKey, ObjVals } from './type.js';

export const OUTCOME = {
  READY: 'READY',
  PROGRESS: 'PROGRESS',
  DRAW: 'DRAW',
  WON: 'WON',
} as const;
export type Outcome = ObjVals<typeof OUTCOME>;
