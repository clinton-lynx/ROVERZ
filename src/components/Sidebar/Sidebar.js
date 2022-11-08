import React from "react";
// import * as  FaIcons from "react-icons/fa"
import * as AmenitiesIcon from "react-icons/io"
import { Link } from "react-router-dom"
import './index.scss'
import { useState } from "react";


const SidebarItems = [
    {
        title: 'Amenities',
        to: '/Amenities',
        icons: <AmenitiesIcon.IoIosCreate />
    },
    {
        title: 'Hotels',
        to: '/Hotels',
        icons: <AmenitiesIcon.IoIosBed />
    },
    {
        title: 'Resturrants',
        to: '/Resturrants',
        icons: <AmenitiesIcon.IoIosCafe />
    },
    {
        title: 'Malls',
        to: '/Malls',
        icons: <AmenitiesIcon.IoIosCart />
    },
    {
        title: 'Event Places',
        to: '/Event Places',
        icons: <AmenitiesIcon.IoIosPeople />
    },
    {
        title: 'Cinemas',
        to: '/Cinemas',
        icons: <AmenitiesIcon.IoIosTv />
    },
    {
        title: 'Night Clubs',
        to: '/Night Clubs',
        icons: <AmenitiesIcon.IoIosMoon />
    }
]
const Sidebar = () => {
    //  const [activeIndex, setactiveIndex] = useState(0)
    return (
        <div className="side-bar-parent-container">
            <div className="side-bar-menu-container">
                <div className="side-bar-indicator">
                    {
                        SidebarItems.map((items, Index) => (
                            <Link to={items.to} key={Index}>
                                <div className="side-bar-menu-items">
                                    <div className="side-bar-menu-icon">
                                        {items.icons}
                                    </div>

                                    <div className="side-bar-menu-text">
                                        {items.title}
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar