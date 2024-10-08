'use client'

import { useRef } from 'react'
import styles from './logo.module.css'

export default function Logo() {
    const logoRef = useRef<SVGSVGElement | null>(null)

    const restartAnimation = () => {
        if (logoRef.current) {
            const logo = logoRef.current
            logo.classList.remove(styles.animate)
            void logo.getBoundingClientRect()
            logo.classList.add(styles.animate)
        }
    }

    return (
        <svg
            ref={logoRef}
            onMouseEnter={restartAnimation}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles.logo} ${styles.animate}`}
        >
            <g className={styles.part1}>
                <path
                    d="M24.2924 21.1221C24.8472 21.6744 24.8976 22.5385 24.4437 23.1475L24.2924 23.322L18.0422 29.5444C17.432 30.1519 16.4428 30.1519 15.8326 29.5444C15.2778 28.9921 15.2274 28.128 15.6813 27.519L15.8326 27.3445L22.0828 21.1221C22.693 20.5146 23.6822 20.5146 24.2924 21.1221Z"
                    fill="var(--color-white)"
                />
            </g>
            <g className={styles.part2}>
                <path
                    d="M15.375 2C20.5527 2 24.75 6.17868 24.75 11.3333C24.75 16.4879 20.5527 20.6666 15.375 20.6666C10.1973 20.6666 6 16.4879 6 11.3333C6 6.17868 10.1973 2 15.375 2ZM15.375 5.1111C11.9233 5.1111 9.125 7.89676 9.125 11.3333C9.125 14.7698 11.9233 17.5555 15.375 17.5555C18.8269 17.5555 21.625 14.7698 21.625 11.3333C21.625 7.89676 18.8269 5.1111 15.375 5.1111Z"
                    fill="var(--color-white)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </g>
            <g className={styles.part3}>
                <path
                    d="M26.3127 2C27.1756 2 27.875 2.69632 27.875 3.55555C27.875 4.41478 27.1756 5.1111 26.3127 5.1111C25.4496 5.1111 24.7502 4.41478 24.7502 3.55555C24.7502 2.69632 25.4496 2 26.3127 2Z"
                    fill="var(--color-white)"
                />
            </g>
        </svg>
    )
}
