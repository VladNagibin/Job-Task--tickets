import { useState } from 'react'
import { data } from '../TicketsData'
import FilterPanel from './FilterPanel'
import Finder from './Finder'
import Tickets from './Tickets'
import React from 'react'

  
export default function MyTicketsPanel() {
  const [filterStatus, setFilter] = useState('all')
  const [filterName,setName] = useState('')
  
  const find = (text:string) =>{
    setName(text)
  }
  const filter = (filter:string = filterStatus) =>{
    var byStatus = filter === 'all' ? data : data.filter(el => el.status === filter)
    var byName = filterName === ''?byStatus: byStatus.filter(el=> el.title.includes(filterName))
    
    return byName
  }

  const filters = {
    all: filter('all').length,
    feedback: filter('feedback').length,
    open: filter('open').length,
    resolved: filter('resolved').length
  }
  return (
    <>
      <div className='tickets'>
        <div className='top-panel'>
          <h3>My Tickets</h3>
          <div className='top-right'>
            {/* <div className='filter'>
              All Tickets
              <div className='length'>
              {drawedIds.length}
              </div>
              
              <img className='down' src='down.png'/>
            </div> */}
            <FilterPanel filters={filters} setFilter={setFilter} />
            <Finder find={find}/>
          </div>
        </div>

      </div>
      <Tickets tickets={filter()} />
      {/* <Tickets tickets={data.filter(el => {
            if (drawedIds.indexOf(el.id) == -1) {
              return false
            } else {
              return true
            }
          })} /> */}
    </>
  )
}
