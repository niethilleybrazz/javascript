const CondicionalRender = () => {
  const x = true
  const name = "Niethilley"

  return (
    <div>
      {/* Renderiracao condicional */}
      <h3>Isso sera exibido?</h3>
      {x && <p>Se x for true sim!</p> }

      {/* Renderizacao condicional com else adicionado */}
      <h3>O nome sera exibido ?</h3>
      {name === "Niethilley" ? (
        <div>
          <p>Ola Niethilley</p>
        </div>
      ) : (
        <div>
          <p>Pessoa nao encontrada</p>
        </div>
      )} 
    </div>
  )
}

export default CondicionalRender