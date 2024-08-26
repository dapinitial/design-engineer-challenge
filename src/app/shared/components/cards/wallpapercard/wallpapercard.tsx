import React from 'react'
import styles from './wallpapercard.module.css'
import CopyButton from '@/app/shared/components/buttons/copy/copybutton'
import DownloadButton from '@/app/shared/components/buttons/download/downloadbutton'
import Table from '../../table/table'

interface WallpaperCardProps {
    title: string
    description: string
    category: string
    totalAssets: string
    assetType: string
    imageUrl: string
    isActive: boolean
}

export default function WallpaperCard({
    title,
    description,
    category,
    totalAssets,
    assetType,
    imageUrl,
    isActive
}: WallpaperCardProps) {
    return (
        <article className={`${styles.card} ${isActive ? styles.active : ''}`}>
            <div className={styles.details}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.category}>{category}</p>
                <p className={styles.description}>{description}</p>
                <Table data={[
                    { "Total Assets": totalAssets },
                    { "Asset Type": assetType }
                ]} />
                <div className={styles.footer}>
                    <CopyButton imageUrl={imageUrl} title={title} />
                    <DownloadButton title={title} imageUrl={imageUrl} />
                </div>
            </div>
        </article>
    )
}