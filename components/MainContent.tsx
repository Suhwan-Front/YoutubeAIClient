'use client'

import { useState } from 'react'
import Category from './Category'

const MainContent = () => {
  const [score, setScore] = useState<string>('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const target = event.target as typeof event.target & {
      data: { value: string }
    }
    const data = target.data.value

    try {
      const response = await fetch(`http://127.0.0.1:5000/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input: data,
        }),
      })

      const res = await response.json()

      if (response.ok) {
        setScore(res.score)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={`flex flex-col justify-center w-full`}>
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <input
          id="data"
          autoComplete="off"
          className="bg-gray-200 text-black hover:bg-white"
        />
        <button className="bg-red-600 text-white px-2 font-extralight">
          검사
        </button>
      </form>
      <div className="flex justify-center">
        {score !== '' ? <div>이 이름은 {score}점 입니다.</div> : <div></div>}
      </div>
      <Category />
    </div>
  )
}

export default MainContent
