import React from 'react'
import style from './style.module.css'

function SectionHeader({littleText, bigText,center}) {
  return (
    <div style={ center ? {display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '50px'} : {display: 'flex', flexDirection: 'column'}}>
      <p className={style.littleText}>{littleText}</p>
      <h2 className={style.bigText}>{bigText}</h2>
    </div>
  )
}

export default SectionHeader