import React from 'react';
import "../styles.css";

type MyComponentProp = { tag: string }

const Tag: React.FC<MyComponentProp> = ({ tag }) => {
  return (
    <div className='tag bg-primary/80 text-white'>
        {tag}
    </div>
  )
}

export default Tag