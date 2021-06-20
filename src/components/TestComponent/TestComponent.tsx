import React, { useState } from 'react'
import './TestComponent.css'
/* const TestComponent = () =>(
   <div className="TestComponent">Test Component </div>
) */
function TestComponent (props: { propiedade: string} ) {
const [age,setAge] = useState(32)
   return    <div className="TestComponent">
      Test Component Olá { props.propiedade } , sua idade é, { age }
      <button onClick = { () => {
         setAge(age +1)
      }}> + </button>
       </div>
}
export default TestComponent