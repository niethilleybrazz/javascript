import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Matheus", "Ana", "Carol", "Pedro"]) 

    const [users, setUsers] = useState([
        {id:1, name:"Niethilley", age:19},
        {id:2, name:"Josias", age:34},
        {id:3, name:"Manuela", age:23},
    ])

    return (
    <div>
        {/* Render sem key */}
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>

        {/* Render com key */}
        <ul>
            {users.map((user)=>(
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender