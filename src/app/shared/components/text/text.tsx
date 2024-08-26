import React from 'react'
import styles from './text.module.css'

interface TextProps {
    text: string
}

export default function Text({ text }: TextProps) {
    return <p className={styles.bodyLarge}>{text}</p>
}
