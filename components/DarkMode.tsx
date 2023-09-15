'use client'

import { themeState } from "@/store/theme";
import { useDarkMode } from "@/util/hooks/useDarkMode";
import { useRecoilState } from "recoil";
import { BsSunFill, BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function DarkMode() {
    const [now, setNow] = useState<string | undefined>('light')
    const [_, toggleTheme] = useDarkMode()
    const [theme] = useRecoilState(themeState)
    useEffect(()=>{
        if(document.body.dataset.theme){
            setNow(document.body.dataset.theme)
        }
    }, [])

    return (
        now === 'light' ? (
            <button onClick={toggleTheme} className={theme.value}>
                <BsSunFill size={20} />
            </button>
        ) : (
            <button onClick={toggleTheme} className={theme.value}>
                <BsSun size={20} />
            </button>
        )
    )
}