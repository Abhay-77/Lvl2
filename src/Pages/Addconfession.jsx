import React , {useState} from 'react'
import {app} from '../firebase'
import {getFirestore , collection , addDoc} from 'firebase/firestore'
const Addconfession = () => {
  const [confession , setconfession] = useState("")
  const db= getFirestore(app)
  const addconfession=async(e)=>{
    const confession=e.target.confession.value
    e.preventDefault()
    
    if (!confession.trim())
    {
      alert("Confession cannot be empty")
      setconfession("")
      return
    }
    try{
      const docref=await addDoc(collection(db,"confession"),{confession , date:new Date()})
      console.log("id=",docref.id)
      setconfession("")
    }
    catch (e) {
      console.error("Error adding document",e)
    }
  }
  return (
    <div>
        <h2>Add Confession</h2>
        <form onSubmit={addconfession}>
          <input value={confession} onChange={(e) => setconfession(e.target.value)} type="text" name="confession" id="confession" placeholder="Write your confession"/>
          <input type="submit"/>
        </form>
    </div>
  )
}

export default Addconfession