import React, { useState } from 'react'
import Discussion from './Discussion'
import discussionsData from '../data/discussionsData'

const Discussions = () => {
  const [discussions] = useState(discussionsData)

  return (
    <ul className="discussions">
      {discussions.map((item) => (
        <Discussion
          key={item.id}
          id={item.id}
          title={item.title}
          author={item.author}
          date={item.date}
        />
      ))}
    </ul>
  )
}
export default Discussions
