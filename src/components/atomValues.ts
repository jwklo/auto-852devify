import { InputData } from "./types";
import { atom, useAtomValue, useSetAtom } from 'jotai';
const ImageAtom = atom<InputData>({ uri: null, maskUri: "./red160px.png", minConfidence: 0.30, filename: null, maskAdjust: 1 });

export {ImageAtom}