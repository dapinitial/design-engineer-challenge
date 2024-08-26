import React from 'react'
import styles from './pagetitle.module.css'

interface PageTitleProps {
    text: string
}

export default function PageTitle({ text }: PageTitleProps) {
    return <h1 className={styles.title}>{text}</h1>
}