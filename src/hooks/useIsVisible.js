import {useState} from "react";

export const useIsVisible = (initialValue) => {
    const [isMenuVisible,setIsMenuVisible] = useState(initialValue);

    const showToggle = () => {
        setIsMenuVisible(!isMenuVisible)
    }
    return [isMenuVisible,showToggle]
}