import { useDispatch } from "react-redux";
import './reset.css';

export function ResetButtom(props){
    const dispatch = useDispatch();

    return (
        <button className = "restart" onClick={
            () => dispatch({
                type:"RESET",
            })
        }>
            Restart
        </button>
    )
}