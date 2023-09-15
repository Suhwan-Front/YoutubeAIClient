const MainContent: React.FC = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const target = event.target as typeof event.target & {
            data: { value: string}
        }
        const data = target.data.value

        try{
            const response = await fetch(``)
        }
    }

    return(
        <div className="flex flex-col justify-center w-full">
            <form>
                <input id="data" />
                <button>검사</button>
            </form>
        </div>
    )
}

export default MainContent