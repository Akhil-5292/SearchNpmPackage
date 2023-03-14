import { useEffect, useState } from "react";
import Input from "../Input/Input";
import style from './Home.module.css'
import { npmPackage } from "../ConstData/ConstData";
export default function Home(){
  const[npm,setNpm]=useState(npmPackage)  
  const[search,setSearch]=('')
  const[text,setText]=useState('')
  
  useEffect(()=>{
    fetch('https://api.npms.io/v2/search?q=reactjs')
    .then((res)=>res.json())
    .then((data)=>setNpm(data.result))
  })

  const handleChange=(e)=>{
    setSearch(e.target.value)
   
  }

  const filteredListItems = npm.filter(
    item => item.toLowerCase().includes(search.toLowerCase())
  );

    return(
        <div className={style.wrapper}>
         <Input
         className={style.input}
         onChange={handleChange}
         text='Type to search...'
         value={search}
         type='text'/>

         <div>
         {filteredListItems.map((item)=>{
          return(
            <div>{item.npm}</div>
          )
         })}
         </div>
         <div className={style.label}>
         <label className={style.heading} >Why is this your favorite?</label>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button className={style.btn}>Add fav</button>
         </div>
        </div>
    )
}