import { Link } from "react-router-dom";
import '../../assets/styles/styles.scss'
 
export function NotFound(){
    return (
        <>
            <h1>NotFound</h1>
            <Link to="/">Volver</Link>
        </>
    )
}