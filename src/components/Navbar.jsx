import { useNavigate } from "react-router-dom"

export function Navbar(){
    const navigate = useNavigate();
    return <div>
        <button onClick={() => navigate('/counter')}>Counter App</button>
        <button onClick={() => navigate('/todo')}>Todo App</button>
    </div>
}