import { useEffect, useState } from "react"

export const ProfileInput = (props) => {
    const [edit, setEdit] = useState(false)
    const [input, setInput] = useState("")

    useEffect(() => {
        if (props.getvalue) {
        props.getvalue(input)
        }
    },[input])
    
    useEffect(() => {
        if (props.reset) {
            setEdit(false);
            setInput("");
        }
    }, [props.reset]);

    function handleClick() {
       if (!edit) {
       setEdit(true)
       } else if (edit) {
        setEdit(false)
        setInput("")
       }
    }

    return <div className="flex items-center w-full my-7 bg-[rgb(50,50,50)] p-3 rounded-lg ring-1 ring-[rgb(180,180,180)] justify-between">
    <div>
       <p className="text-[rgb(180,180,180)]">{props.label}</p>
       <input onChange={(e) => setInput(e.target.value)} type={props.type} className={`bg-transparent w-[300px] focus:outline-none  ${ edit ? "ring-1 ring-white cursor-text": "cursor-default" }`} readOnly={edit ? false : true} value={edit ? input : props.value} /> 
       </div>
       <i onClick={handleClick} class="bi cursor-pointer bi-pencil-fill"></i>
    </div>
}