import React, { useState,useEffect } from 'react'

interface FilterPanelProps {
    filters: {
        all: number
        open: number
        feedback: number
        resolved: number
    }
    setFilter: (filter: string) => void
}
export default function FilterPanel({ filters, setFilter }: FilterPanelProps) {
    
    const [chosenFilter, setChosenFilter] = useState({
        name: 'All filters',
        length: filters['all']
    })
    const [showPanel, setShowPanel] = useState(false)
    const setAll = () => {
        setFilter('all')
        setChosenFilter({
            name: 'All filters',
            length: filters['all']
        })
    }
    const setOpen = () => {
        setFilter('open')
        setChosenFilter({
            name: 'Open',
            length: filters['open']
        })
    }
    const setFeedback = () => {
        setFilter('feedback')
        setChosenFilter({
            name: 'Feedback',
            length: filters['feedback']
        })
    }
    const setResolved = () => {
        setFilter('resolved')
        setChosenFilter({
            name: 'Resolved',
            length: filters['resolved']
        })
    }
    const openPanel = () => {
        setShowPanel(true)
        document.addEventListener('click', evListener)
    }
    const evListener = (e: MouseEvent) => {
        var div: HTMLElement | null = document.getElementById('dropdown-panel')
        if (div == null) return
        const withinBoundaries = e.composedPath().includes(div);
        
        if (!withinBoundaries) {
            setShowPanel(false)
            document.removeEventListener('click', evListener)
        }else{
            
        }
        
    }
    useEffect(()=>{
        document.removeEventListener('click', evListener)
        setShowPanel(false)
    },[chosenFilter])

    if (showPanel) {
        return (
            <div id='dropdown-panel' className='filter dropdown-content dropdown-show'>
                <a onClick={setAll}>All
                    <div className='length'>
                        {filters.all}
                    </div></a>
                <a onClick={setOpen}>Open
                    <div className='length open'>
                        {filters.open}
                    </div></a>
                <a onClick={setFeedback}>Feedback
                    <div className='length feedback'>
                        {filters.feedback}
                    </div></a>
                <a onClick={setResolved}>Resolved
                    <div className='length resolved'>
                        {filters.resolved}
                    </div></a>
            </div>
        )
    }
    return (
        <div className='filter'>
            {chosenFilter.name}
            <div className='length'>
                {chosenFilter.length}
            </div>
            <img className='down' src='down.png' onClick={openPanel} />
        </div>


    )
}
