import React from 'react'
import { Doughnut } from 'react-chartjs-2'

export default function EcoGauge({score}:{score:number}){
  const data = {
    labels:["Score","Remaining"],
    datasets:[{
      data:[score,20-score],
      backgroundColor: [score<=7?"#2e7d32": score<=14?"#ffb300":"#c62828","#eee"],
      borderWidth:0
    }]
  }
  return <Doughnut data={data}/>
}
