import { useState } from "react"
const Switch = ({items}) => {
  const [isToggled, setToggle] = useState(false)

  const handleToggle = (toggleState) => {
      setToggle(toggleState)
  }

  const activeTextColor = "bg-clip-text text-transparent bg-gradient-to-r from-[#c0fecf] to-[#1eda9]"

  return <div className="hover:cursor-pointer h-8 border-solid border-t-emerald-900 rounded-[30px] border-[1px] font-semibold flex items-center relative z-[1]">
    <div onClick={handleToggle.bind(null,false)} className={`py-1 px-5 h-8 rounded-[30px] ${isToggled || activeTextColor}`}>{items[0]}</div>
    <div onClick={()=>{handleToggle(true)}} className={`py-1 px-5 h-8 rounded-[30px] ${isToggled && activeTextColor}`}>{items[1]}</div>
    <div className="h-8 w-20 bg-teal-900 rounded-[30px] absolute z-[-1] transition-all duration-150 ease-in" style={
      isToggled?{
        left:'80px',
        width:'120px'
        

      }:{
        left:'0',
        width:'80px'

      }
    }></div>
  </div>

}
export default Switch