const Category = () => {
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex flex-row">
        <p className="flex mr-1 items-center border rounded-xl px-2 border-red-400 text-sm">
          해커톤
        </p>
        <p className="flex mr-1 items-center border rounded-xl px-2 border-orange-400 text-sm">
          개발톤
        </p>
        <p className="flex mr-1 items-center border rounded-xl px-2 border-amber-400 text-sm">
          개발 대회
        </p>
        <p className="flex items-center border rounded-xl px-2 border-lime-400 text-sm">
          프로그래밍
        </p>
      </div>
      <div className="flex flex-row mt-1">
        <p className="flex mr-1 items-center border rounded-xl px-2 border-green-400 text-sm">
          코딩
        </p>
        <p className="flex mr-1 items-center border rounded-xl px-2 border-emerald-400 text-sm">
          대학생 개발
        </p>
        <p className="flex items-center border rounded-xl px-2 border-violet-400 text-sm">
          연합 해커톤
        </p>
      </div>
    </div>
  )
}

export default Category
