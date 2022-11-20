import { useRef } from "react"
import DivElement from "./DivElement"

const users =[
    {
        "id":7,
        "email":"michael.lawson@reqres.in",
        "first_name":"Michael",
        "last_name":"Lawson",
        "avatar":"https://reqres.in/img/faces/7-image.jpg",
         Friend : false
    },
    {
        "id":8,
        "email":"lindsay.ferguson@reqres.in",
        "first_name":"Lindsay",
        "last_name":"Ferguson",
        "avatar":"https://reqres.in/img/faces/8-image.jpg",
         Friend : false
    },
    {
        "id":9,
        "email":"tobias.funke@reqres.in",
        "first_name":"Tobias",
        "last_name":"Funke",
        "avatar":"https://reqres.in/img/faces/9-image.jpg",
        Friend:true
    },

    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg",
        Friend:true
    },
    
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg",
        Friend:true
    },

    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg",
        Friend : false
    }
]

function Display(){
    const divRef = useRef()


    return <div className="mainDiv">
        {
        users.map(element =>(
            <DivElement 
                key={element.id} 
                className="userDiv"
                ref= {divRef}>
                
                {element.first_name + " " + element.last_name }
                <img src={element.avatar}></img>
                <button onClick={()=>(element.Friend ?'' : alert("მეგობრობის მოთხოვნა გაგზავნილია"))}>   Add Friend</button>
            </DivElement>
        ))
}
    </div>
}


export default Display