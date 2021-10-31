
function Form({title, children, boton}) {
    

    return (
        <>
         <h2>{title}</h2>
         {children}
         <input type="text" placeholder="soy input"/><br/>
          
        {boton({buttonText:'SuperFormButtom'})}

        </>
    )
}

export default Form
