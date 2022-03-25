import "./styles.css"
import { FC } from "react"

export const Container: FC = (props) => {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}