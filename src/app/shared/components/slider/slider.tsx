'use client'

import React, { useRef } from 'react'
import styles from './slider.module.css'

interface SliderProps {
    children: React.ReactNode
}

export default function Slider({ children }: SliderProps) {
    const slidesRef = useRef<HTMLDivElement | null>(null)

    return (
        <section className={styles.slider} ref={slidesRef}>
            {children}
        </section>
    )
}
