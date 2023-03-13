import style from './Input.module.css'

export default function Input({className,text,handleChange,value}){
    return(
        <div >
          <input className={className} 
          handleChange={handleChange}
          placeholder={text}
          value={value}
          />
        </div>
    )
}