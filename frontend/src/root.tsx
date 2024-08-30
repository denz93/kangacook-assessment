import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
export default function Root() {
    const navigate = useNavigate()
    const location = useLocation()
    const href = location.pathname
    
    useEffect(() => {
        console.log({href})
        if (href === "/") {
            navigate("/home")
        }
    }, [href])
    return <div>
        <div className="navbar bg-base-100">
            <a href="/home" className="btn btn-ghost text-xl">Home</a>
        </div>
        <Outlet/>
    </div>
}