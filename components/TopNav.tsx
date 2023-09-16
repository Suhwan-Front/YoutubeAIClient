'use client'

import { BsList } from 'react-icons/bs'
import DarkMode from './DarkMode'
import { Black_Han_Sans } from 'next/font/google'
import { useRecoilState } from 'recoil'
import { themeState } from '@/store/theme'
import { useEffect, useState } from 'react'

const TopNav = () => {
  const [theme] = useRecoilState(themeState)
  const [now, setNow] = useState(theme.value)
  useEffect(() => {
    setNow(theme.value)
    console.log(theme.value)
  }, [theme.value])
  return (
    <nav
      className={`flex flex-col border-b-8 m-gray py-4 ${
        now !== 'dark' ? 'border-gray-500' : 'border-gray-200'
      }`}
    >
      <div className="flex justify-between px-4">
        <div>
          <DarkMode />
        </div>
        <div className={`flex flex-row ${now !== 'dark' ? 'text-white' : ''}`}>
          <p className="text-red-700">유튜브</p> 제목추천기
        </div>
        <div>
          <BsList
            size={25}
            className={`${now !== 'dark' ? 'text-white' : ''}`}
          />
        </div>
      </div>
    </nav>
  )
}

export default TopNav
