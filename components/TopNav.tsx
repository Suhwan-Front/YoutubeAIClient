import { BsSunFill, BsSun, BsList } from "react-icons/bs";

const TopNav = () => {
    return(
        <nav className="flex flex-col border-b-8 border-gray-200 m-gray py-4">
            <div className="flex justify-between px-4">
                <div>
                    <BsSunFill size={20}/>
                </div>
                <div>
                    
                </div>
                <div>
                    <BsList size={25} />
                </div>
            </div>
        </nav>
    )
}

export default TopNav

