import React from 'react'
import styles from './banner.module.css'

interface BannerProps {
    text: string
}

export default function Banner({ text }: BannerProps) {
    return (
        <div className={styles.banner}>
            <span>{text}</span>
        </div>
    )
}
