'use client'

import { themeState } from '@/store/theme'
import { useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { useRecoilState } from 'recoil'

const Footer = () => {
  const [theme] = useRecoilState(themeState)
  const [now, setNow] = useState(theme.value)
  useEffect(() => {
    setNow(theme.value)
    console.log(theme.value)
  }, [theme.value])
  return (
    <footer
      className={`border-t-8 ${
        now !== 'dark' ? 'border-gray-500' : 'border-gray-200'
      }`}
    >
      <div className="flex flex-col mt-4 items-center">
        <p className="text-gray-500 text-sm">
          이 프로젝트는 개인이 만든 프로젝트 입니다
        </p>
        <p className="text-gray-500 text-sm">
          만약 후원을 한다면 감사하는 마음을 담아 열심히
        </p>
        <p className="text-gray-500 text-sm">노력하겠습니다</p>
        <button className="flex flex-row items-center text-sm rounded-xl border-gray-500 border px-2 my-4 text-gray-500">
          후원하기
          <AiFillHeart className="ml-2" />
        </button>
      </div>
    </footer>
  )
}

export default Footer
