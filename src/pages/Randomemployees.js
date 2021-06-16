import React,{useState, useEffect} from "react"
import Jumbotron from "../components/Jumbotron"
import API from "../utils/API"

function RenderEmployees(){

    const[employees, setEmployees] = useState()
    useEffect(() => {
       getEmployees()
        
    }, [])
    const getEmployees = () => {
        API.ApiSearch() .then((res) => {
            console.log(res.data)
            setEmployees(res.data)
        })
    }
    

    return (
        <Jumbotron/>
    )
}

export default RenderEmployees;
