import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Members(){
  const [members, setMembers] = useState<any[]>([])

  useEffect(()=>{
    axios.get('/api/members')
      .then(r => setMembers(r.data))
      .catch(() => setMembers([]))
  },[])

  return (
    <div>
      <h2>Members</h2>
      <ul>
        {members.map(m => (
          <li key={m.id}>{m.firstName} {m.lastName} {m.role ? `- ${m.role}` : ''}</li>
        ))}
      </ul>
    </div>
  )
}
