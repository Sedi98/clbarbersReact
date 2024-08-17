import React from 'react'
import style from './hero.module.css'
import Button from '../../basicComponents/Button/Button'

function Hero({littleText,bigtext}) {
  return (
    <section className={style.hero}>
        <div className={style.heroContent}>
            <p className={style.heroText}>{littleText}</p>
            <h1 className={style.heroTitle}>{bigtext}</h1>
            <Button />
        </div>
    </section>
  )
}

export default Hero