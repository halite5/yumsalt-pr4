import React from 'react'
import './TabList.css'
import Tab from './Tab';

function TabList({ tabInfo, activeTab, onSelected }) {
    let tabs = tabInfo.map(t =>
        <Tab key={t.name} name={t.name} isActive={activeTab === t.name} onSelected={() => onSelected(t.name)} />
    )

    return (
        <nav>
            {
                tabs
            }
        </nav>
    )
}

export default TabList
