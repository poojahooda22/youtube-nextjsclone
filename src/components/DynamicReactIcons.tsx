'use client'

import React, { ReactElement } from 'react'
import * as AiReactIcons from 'react-icons/ai'


interface IconType {
    icon: string;
    title: string;
}

const icons = [
    {
        icon: 'AiFillApple',
        title: 'Account Book'
    },
    {
        icon: 'AiFillGithub',
        title: 'Account',
    },
    {
        icon: 'AiFillApple',
        title: 'Account 2',
    }
]


const DynamicReactIcons = () => {

    /**
     * 
     * @param iconName 
     * @returns 
     */

    const DisplayIcons = (iconName: string) => {   
        return (AiReactIcons as any)[iconName]
    }


    return (
        <div>
            {
                icons.map((icon, index) => {
                    const IconComponent = DisplayIcons(icon.icon);
                    return IconComponent ? React.createElement(IconComponent, { key: index }) : null;
                })
            }
        </div>
    )
}

export default DynamicReactIcons
