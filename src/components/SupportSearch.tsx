import React, { useState } from 'react'
import messages from '../../public/messages.png'
export default function SupportSearch() {
    const [searchText,setSearchText] = useState('')
    const searchHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchText(event.target.value)
    }
    return (
    <div className='support-search'>
      <div className='top-buttons'>
        <div className='left-buttons'>
            <a>Support</a>
            <a>Resources</a>
        </div>
        <div className='right-buttons'>
            <a className='href'>Need help?</a>
            <button><a>Get Support</a></button>
        </div>
      </div>
      <div className='main-part'>
        <div className='black-messages'>
            <img src={messages}/>
        </div>
        <h1>Support Forums</h1>
        <div className='text'>Search the topic you need help with in our support forums.</div>
        <a className='link'>Browse Forums</a>
        <input className='search' id = 'search' placeholder='Search support forum' value={searchText} onChange={searchHandler}/>
        <label htmlFor="search">&nbsp;</label>
      </div>
    </div>
  )
}
