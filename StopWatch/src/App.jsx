import { useEffect, useState } from 'react'
import './App.css'



function App() {
const [time, settime] = useState(0)
const [running, setrunning] = useState(false)
 
useEffect(()=>{
  let interval;
  if(running){
    interval=setInterval(() => {
      settime((prevtime)=>prevtime+10)
    }, 10);
  }
  return () => clearInterval(interval)
},[running])

  return  <div className='h-screen bg-amber-200 '>
            <div className="main flex flex-col items-center gap-10 p-10">
               <div className="timers flex flex-row text-6xl bg-amber-50 p-15 rounded-2xl shadow-2xl font-bold">
                 <h1 >{("0" + Math.floor((time/60000)%60)).slice(-2)}:</h1> 
                 <h1 >{("0" + Math.floor((time/1000)%60)).slice(-2)}:</h1>
                 <h1 >{("0" + Math.floor((time/10)%100)).slice(-2)}</h1>
             </div>
             <div className=" flex flex-row gap-4">
                   {running?
                  (
                       <button onClick={()=>{setrunning(false)}} className=" px-7 py-3 rounded-2xl shadow-2xl bg-red-600 text-white   active:scale-95  ">Stop</button>
                  ) 
                    : 
                   (
                                  <button onClick={()=>{
                 setrunning(true)
                 }} className=" px-7 py-3 rounded-2xl shadow-2xl bg-blue-600 text-white  active:scale-95 ">Start</button>
                   )
                   }

              
              
                  <button onClick={()=>{
                     settime(0);
                  }}  className=" px-7 py-3 rounded-2xl shadow-2xl bg-orange-600 text-white active:scale-95 ">Reset</button>
             </div>
            </div>
          </div>

  
         

}

export default App
