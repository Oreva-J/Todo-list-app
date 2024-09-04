import { useState } from "react"

export default function Form(){
    const [details, setDetails] = useState({firstName: "", lastName: "", phone: ""})

    
    function handleSubmit(e){
        e.preventDefault()
        return console.log("Submit")
    }
    return(
        <div className="flex flex-col items-center justify-center text-2xl">
            {details.firstName} {details.lastName} {details.phone}
            <form onSubmit={handleSubmit} className="flex flex-col" action="">
                <input onChange={e=>setDetails({ ...details, firstName: e.target.value })}  className="ring" type="text" value={details.firstName} placeholder="First Name" />
                <input onChange={e=>setDetails( { ...details, lastName:e.target.value})} className="ring" type="text" value={details.lastName} placeholder="Last Name" />
                <input onChange={e=>setDetails( { ...details, phone: e.target.value})} className="ring" type="number" value={details.phone} placeholder="Phone" />
                <button className="ring">Submit</button>
            </form>
        </div>
    )
}