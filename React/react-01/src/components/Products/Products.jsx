import './Products.css'
// -- Props desestructurados, indicamos el nombre de los props como par�metros de la funci�n y encerrados entre llaves. As� mismo, paso esos props a cada elementos utilizando llaves.


const Products = ({image, title, description, price}) => {
    return(
        <>
        <div className="card--container">
            <div className="product--card">
                <img src={ image } alt="" />
                <h2>{ title }</h2>
                <p>{ description }</p>
                <h3>{ price }</h3>
            </div>
        </div>
        </>
    )
}

export default Products