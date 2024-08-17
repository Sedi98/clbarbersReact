import React from 'react'
import style from './hero.module.css'
import Button from '../../basicComponents/Button/Button'

function Hero() {
  return (
    <section className={style.hero}>
        <div className={style.heroContent}>
            <p className={style.heroText}>with patrick potter</p>
            <h1 className={style.heroTitle}>Our Hair Style make your look elegance</h1>
            <Button />
        </div>
    </section>
  )
}

export default Hero