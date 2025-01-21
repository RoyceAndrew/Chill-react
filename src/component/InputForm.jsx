export const InputForm = (props) => {

    return <label className="flex flex-col text-[10px] md:text-[18px] md:mb-[37px] mb-[20px]"  htmlFor={props.id}>{props.label}<input className="md:h-[50px] text-[9px] md:text-[16px] w-[260px] h-[28px]  px-[12px] py-[8px]  md:w-[449px] md:px-[20px] mt-[6px] md:py-[14px] rounded-[12px] md:rounded-[24px] border-solid border-[#FFFFFF40] border-[1px] bg-backColor/[0.4] " id={props.id}  onChange={props.onChange} value={props.value} required={true} name={props.id} type={props.type} placeholder={props.placeholder}/></label>
}