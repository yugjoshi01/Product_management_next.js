"use client"
import Check from "@/components/check";
import { useSelector } from "react-redux";




function Redux() {
  const darkMode= useSelector((state)=>state.theme.darkMode);
  
  return (
    <>
    <Check/>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"60vh", backgroundColor: darkMode?"#333":"#fff", color:darkMode?"#fff":"#000",transition: 'all 0.3s ease'}}>Yug Joshi</div>
    </>
  )
}

export default Redux;