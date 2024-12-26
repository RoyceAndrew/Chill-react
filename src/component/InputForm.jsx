export const InputForm = (props) => {

    return <label className="flex flex-col my-[10px]" for={props.id}>{props.label}<input className="h-[50px] w-[350px] p-[20px] rounded-[25px] border-solid border-[#FFFFFF40] border-[1px] bg-backColor/[0.4] " id={props.id} required="true" name={props.id} type={props.type} placeholder={props.placeholder}/></label>
}