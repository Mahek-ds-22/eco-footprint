import React from 'react'

export default function ShareCard({score}:{score:number}){
  const share = () =>{
    const msg=`I scored ${score}/20 on Eco-Footprint 🌱. Can you beat me?`
    navigator.clipboard.writeText(msg)
    alert("Result copied! Share it with friends.")
  }
  return <button className="btn" onClick={share}>Share</button>
}
