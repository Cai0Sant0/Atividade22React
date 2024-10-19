import Filho from "./Filho"

function Pai(props){
    return(
        <>
            <Filho texto = {props.textoPai}/>
        </>
    )
}

export default Pai