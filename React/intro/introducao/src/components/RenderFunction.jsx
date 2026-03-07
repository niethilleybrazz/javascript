
function RenderFunction() {
    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando isso</h1>
        }else{
            return <h1>Renderizando isso tambem</h1>
        }
    }
  return (
        <div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default RenderFunction