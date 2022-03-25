import { IObjGame } from "./IObjGame";

export interface IProps {
    gameState: IObjGame,
    xOrBow: (event:any) => void
}