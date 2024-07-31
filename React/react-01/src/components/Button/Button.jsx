import './Button.css'
// Props. Pueden ser estructurados o destructurados.
// - Estructurados, utilizamos la palabra reservada 'props' que pasa a formar parte de los parametros de la funcion

function Button(props) {
    return(
        <>
        <button>{props.text}</button>
        </>
    )
}

export default Button