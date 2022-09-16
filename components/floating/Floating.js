import React from 'react'

export default function Floating(props) {
  return (
    <div className='floating-style' id={props.id}>
      <button> Share <i class="fa-solid fa-share-nodes"></i></button>
      <div className="divider"></div>
      <button> Top <i class="fa-solid fa-arrow-up-long"></i></button>
    </div>
  )
}
