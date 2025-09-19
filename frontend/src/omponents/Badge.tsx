import React from 'react'

export default function Badge({score}:{score:number}){
  let text="Eco Newbie 🌱"
  if(score<7) text="Green Hero 🌍"
  else if(score<14) text="Eco Learner 🌿"
  else text="Needs Work 💨"
  return <div className="badge">{text}</div>
}
