import React from 'react'
import Conf from '../component/confessionCard'
import './Feed.css'
import { useState , useEffect} from 'react'
import {app} from '../firebase'
import { getFirestore , collection , getDocs , query , orderBy } from 'firebase/firestore'
const Feed = () => {
  const [count , setcount] = useState(0)
  const [data , setdata] = useState([])
  const increment = () => {
    setcount(count+1)
  }
  useEffect(()=>{
    const dataFetch=async() => {
      const db= getFirestore(app)
      const q= query(collection(db,"confession"), orderBy("date","desc"))
      const querySnapshot=await getDocs(q)
      const data=querySnapshot.docs.map((doc) => ({
        id:doc.id ,...doc.data()
      }))
      setdata(data)
    }
    dataFetch()
  },[])
  return (
    <div id="feed">
      {data.map((confession,index) => (
        <Conf 
        confess={confession.confession}
        date={confession.date}
        key={index}
        
        />
        ))}
        <button onClick={increment}>{count}</button>
    </div>
  )
}

export default Feed
