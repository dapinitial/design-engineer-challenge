'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Banner from './shared/components/banner/banner'
import PageTitle from './shared/components/pagetitle/pagetitle'
import Text from './shared/components/text/text'
import Slider from './shared/components/slider/slider'
import wallpapers from './data/nft-wallpapers.json'
import styles from './page.module.css'
import slider from './shared/components/slider/slider.module.css'
import PhoneWatchToggle from './shared/components/toggles/phonewatchtoggle/phonewatchtoggle'
import WallpaperCard from './shared/components/cards/wallpapercard/wallpapercard'

export default function Home() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const handleSlideClick = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index))
    } else {
      setOpenIndexes([...openIndexes, index])
    }
  }

  return (
    <section className={styles.container}>
      <Banner text="Introducing NFT Wallpapers" />
      <PageTitle text="CC0 NFT Assets as Wallpapers" />
      <Text text="Grab the NFT you like for your phone wallpaper" />
      <PhoneWatchToggle />
      <Slider>
        <ul className={slider.slides}>
          {wallpapers.map((wallpaper, index) => (
            <li
              key={index}
              className={`${slider.slide} ${openIndexes.includes(index) ? slider.active : ''}`}
              onClick={() => handleSlideClick(index)}
              aria-atomic="true"
              aria-live="polite"
            >
              <Image priority src={wallpaper.imageUrl} height={"520"} width={300} alt={wallpaper.description} className={slider.image} />
              <WallpaperCard
                title={wallpaper.title}
                description={wallpaper.description}
                category={wallpaper.category}
                totalAssets={wallpaper.totalAssets}
                assetType={wallpaper.assetType}
                imageUrl={wallpaper.imageUrl}
                isActive={openIndexes.includes(index)}
              />
            </li>
          ))}
        </ul>
      </Slider>
    </section>
  )
}
