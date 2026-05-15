const ChangeMessage = ({handleMenssage}) => {
    const messages = ["Oi", "Como vc, ta ? "]
  return (
    <div>
        <button onClick={()=> handleMenssage(messages[0])}>1</button>
        <button onClick={()=> handleMenssage(messages[1])}>2</button>
    </div>
  )
}

export default ChangeMessage