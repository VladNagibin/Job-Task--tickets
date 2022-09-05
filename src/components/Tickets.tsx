import React, { useEffect, useState } from 'react'
import { ITicket } from '../interfaces/ITicket'
//import { data } from '../TicketsData'
import PageIcon from './PageIcon'
import Ticket from './Ticket'

type Tsort = null| 'inc' | 'dec'

interface TicketsProps {
  tickets: Array<ITicket>
}

export default function Tickets({ tickets}: TicketsProps) {
  const onPage = 3
  const [drawedIds, setIds] = useState(tickets.slice(0, onPage).map(el => el.id))
  const [page, setPage] = useState(1)
  const [sort,setSort] = useState<Tsort>(null) //inc dec
  const numOfPages = Math.ceil(tickets.length / onPage)

  const changeSort = () =>{
    switch(sort){
      case null:
        setSort('inc')
        break
      case 'inc':
        setSort('dec')
        break
      case 'dec':
        setSort(null)
        break
    }
  }

  const pagePlus = () => {
    if (page === numOfPages) return
    setPage(prevPage => prevPage + 1)
  }
  const pageMinus = () => {
    if (page === 1) return
    setPage(prevPage => prevPage - 1)
  }
  const drawPages = () => {
    var htmlArray = []
    for (var i = 1; i <= numOfPages; i++) {
      htmlArray.push(<PageIcon key={i} i={i} page={page} setPage={setPage} />)
    }
    return htmlArray
  }

  useEffect(() => {
    setIds(tickets.slice(onPage * page - onPage, onPage * page).map(el => el.id))
  }, [page, tickets])

  useEffect(()=>{
    var result = sort === null?tickets: tickets.sort((a,b)=>{
      if(a.created_time.getTime()>b.created_time.getTime()){
        return sort ==='inc'?1:-1
      }else if(a.created_time.getTime()<b.created_time.getTime()){
        return sort ==='dec'?1:-1
      }else{
        return 0
      }
    })
    console.log(result)
    setIds(result.slice(onPage * page - onPage, onPage * page).map(el => el.id))
  },[sort,tickets])
  return (
    <>
      <div className='tickets'>
        {/*  */}

        <table>
          <thead>

            <tr>
              <th className='ticket'>Ticket</th>
              <th>Status</th>
              <th onClick={changeSort}>Created on
              <img className={sort?sort:'hide'} src='down.png'/>
              </th>
              <th className='replies'>Replies</th>
            </tr>
          </thead>
          <tbody>
            {tickets.filter(el => {
              if (drawedIds.indexOf(el.id) === -1) {
                return false
              } else {
                return true
              }
            }).map(ticket => {
              return <Ticket key={ticket.id} ticket={ticket} />
            })}
          </tbody>
        </table>
      </div>
      <div className='buttons-panel'>
        <div className='pages'>
          {
            drawPages()
          }
        </div>
        <div className='left-right'>
          {`${onPage * page - onPage + 1} - ${onPage * page < tickets.length ? onPage * page : tickets.length}`} of {tickets.length}
          <div className={`button ${page === 1 ? 'unable' : ''}`} onClick={pageMinus}>
            <img src='left.png' alt='previous page' />
          </div>
          <div className={`button ${page === numOfPages ? 'unable' : ''}`} onClick={pagePlus}>
            <img src='right.png' alt='next page' />
          </div>
        </div>
      </div>
    </>

  )
}
