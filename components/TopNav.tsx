import { BsSunFill, BsSun, BsList } from "react-icons/bs";
import DarkMode from "./DarkMode";

const TopNav = () => {
    return(
        <nav className="flex flex-col border-b-8 border-gray-200 m-gray py-4">
            <div className="flex justify-between px-4">
                <div>
                    <DarkMode />
                </div>
                <div>
                    유튜브 제목추천기
                </div>
                <div>
                    <BsList size={25} />
                </div>
            </div>
        </nav>
    )
}

export default TopNav

