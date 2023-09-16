'use client'

import { themeState } from '@/store/theme'
import { useDarkMode } from '@/util/hooks/useDarkMode'
import { useRecoilState } from 'recoil'
import { BsSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa6'
import { useEffect, useState } from 'react'

export default function DarkMode() {
  const [now, setNow] = useState<string | undefined>('light')
  const [_, toggleTheme] = useDarkMode()
  const [theme] = useRecoilState(themeState)
  useEffect(() => {
    setNow(theme.value)
  }, [theme.value])

  return now === 'dark' ? (
    <button onClick={toggleTheme} className={theme.value}>
      <BsSunFill size={20} />
    </button>
  ) : (
    <button onClick={toggleTheme} className={theme.value}>
      <FaMoon size={20} color="#fff" />
    </button>
  )
}
