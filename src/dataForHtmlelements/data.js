import {AiFillHome} from "react-icons/ai";
import {FaShoppingCart, FaUserAlt} from "react-icons/fa";
import {IoIosStats} from "react-icons/io";
import {BsFillKanbanFill} from "react-icons/bs";
import {RiLoginBoxFill} from "react-icons/ri";

export const sideBarData = [
    {
        text: 'Dashboard',
        icon: <AiFillHome size={22}/>,
        path: '/',
    },
    {
        text: 'NFT Marketplace',
        icon: <FaShoppingCart size={22}/>,
        path: '/marketplace',
    },
    {
        text: 'Tables',
        icon: <IoIosStats size={22}/>,
        path: '/tables',
    },
    {
        text: 'Kanban',
        icon: <BsFillKanbanFill size={22}/>,
        path: '/kanban',
    },
    {
        text: 'Profile',
        icon: <FaUserAlt size={22}/>,
        path: '/profile',
    },
    {
        text: 'Sign In',
        icon: <RiLoginBoxFill size={22}/>,
        path: '/sign',
    }
]