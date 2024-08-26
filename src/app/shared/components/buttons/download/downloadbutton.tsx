import React, { useState } from 'react'
import styles from './downloadbutton.module.css'

interface DownloadButtonProps {
    title: string
    imageUrl: string
}

export default function DownloadButton({ title, imageUrl }: DownloadButtonProps) {
    const [buttonText, setButtonText] = useState('Download')
    const [isDownloading, setIsDownloading] = useState(false)
    const [isCompleted, setIsCompleted] = useState(false)

    const handleDownload = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        setButtonText('Downloading')
        setIsDownloading(true)

        const link = document.createElement('a')
        link.href = imageUrl
        link.download = title
        link.click()

        setTimeout(() => {
            setIsDownloading(false)
            setButtonText('Completed')
            setIsCompleted(true)

            setTimeout(() => {
                setButtonText('Download Again')
                setIsCompleted(false)
            }, 1500)
        }, 1500)
    }

    return (
        <button
            className={`${styles.button} ${isDownloading || isCompleted ? styles.disabled : ''} ${isDownloading ? styles.downloading : ''}`}
            onClick={handleDownload}
            disabled={isDownloading}
        >
            <span className={`${styles.buttonText} ${isDownloading ? styles.fadeOut : styles.fadeIn}`}>
                {buttonText}
            </span>
        </button>
    )
}
