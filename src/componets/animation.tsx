import {keyframes} from "@mui/material";
import {fadeInDown, fadeInLeft, fadeInRight, fadeInUp} from "react-animations";


export const fadeInDownFunc = (sec: number = 0.5) => `${sec}s ${keyframes(fadeInDown)}`
export const fadeInLeftFunc = (sec: number = 0.5) => `${sec}s ${keyframes(fadeInLeft)}`
export const fadeInRightFunc = (sec: number = 0.5) => `${sec}s ${keyframes(fadeInRight)}`
export const fadeInUpFunc = (sec: number = 0.5) => `${sec}s ${keyframes(fadeInUp)}`


