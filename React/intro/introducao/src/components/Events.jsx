// Events with functions
const Events = () => {
    const handleClick = () =>{
        console.log("Executou");
    }

  return (
    <div>
        <div>
            <button onClick={handleClick}>Clique aqui</button>
        </div>
    </div>
  )
}
export default Events 