'use client'

import React, { useState } from 'react'
import styles from './phonewatchtoggle.module.css'

export default function PhoneWatchToggle() {
    const [selected, setSelected] = useState('phone')

    const handleToggle = () => {
        setSelected((prevSelected) => (prevSelected === 'phone' ? 'watch' : 'phone'))
    }

    return (
        <label className={styles.switch}>
            <input
                type='checkbox'
                checked={selected === 'watch'}
                onChange={handleToggle}
            />
            <div className={styles.slider} />
            <div className={styles.labels}>
                <span
                    className={`${styles.label} ${selected === 'phone' ? styles.activeLabel : styles.inactiveLabel}`}
                >
                    Phone
                </span>
                <span
                    className={`${styles.label} ${selected === 'watch' ? styles.activeLabel : styles.inactiveLabel}`}
                >
                    Watch
                </span>
            </div>
        </label>
    )
}
