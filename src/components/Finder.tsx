import React, { useState } from 'react'

interface FinderProps {
    find: (text: string) => void
}

export default function Finder({ find }: FinderProps) {
    
    const [finder, setFinder] = useState('')

    const finderHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFinder(event.target.value)
    }
    const findSmth = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13) {
            find(finder)
        }

    }
    const clear = () =>{
        setFinder('')
        find('')
    }
    return (
        <div>
            <input className='search' id='searchT' placeholder='Search Tickets' onKeyDown={findSmth} value={finder} onChange={finderHandler} />
            <label htmlFor="searchT" onClick={clear}>&nbsp;</label>
        </div>
    )
}
