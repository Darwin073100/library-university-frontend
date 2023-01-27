import React from 'react'
import '../styles/Button.scss';

function Button({style,click,text}) {
  return (
    <button className={`btn ${style}`} onClick={click}>{text}</button>
  )
}

export { Button };