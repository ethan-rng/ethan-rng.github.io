import React from 'react';
import "./styles.css";

type propType = { tag: string }

const Tag = ( {tag}: propType) => {
  return (
    <div className='tag bg-primary/80 text-white'>
        {tag}
    </div>
  )
}

export default Tag