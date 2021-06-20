import React, { useState, useEffect } from 'react'
import './TestComponent.css'
/* const TestComponent = () =>(
   <div className="TestComponent">Test Component </div>
) */
function TestComponent (props: { propiedade: string} ) {
const [age,setAge] = useState(32)
useEffect(() => {
   console.log('component was create')
}, [])

useEffect( () =>{
   console.log('Age has been update to:' + age)
}, [age])

   return    <div className="TestComponent">
      Test Component Olá { props.propiedade } , sua idade é, { age }
      <button onClick = { () => {
         setAge(age +1)
      }}> + </button>
       </div>
}
export default TestComponent