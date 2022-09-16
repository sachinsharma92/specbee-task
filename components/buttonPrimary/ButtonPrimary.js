import React from 'react'

export default function ButtonPrimary(props) {
  return (
    <div className="action-sec">
      <button type="button" class="btn-join">{props.title} {props.iconRight && <i class="fa-solid fa-arrow-right"></i>}</button>
    </div>
  )
}
