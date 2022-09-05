import React, { useCallback } from 'react'
import { ITicket } from '../interfaces/ITicket'

interface TicketProps {
  ticket: ITicket
}

export default function Ticket({ ticket }: TicketProps) {

  const monthSwitch = (month: number): string => {
    var strMonth: string
    switch (month) {
      case (0):
        strMonth = 'January'
        break
      case (1):
        strMonth = 'February'
        break
      case (2):
        strMonth = 'March'
        break
      case (3):
        strMonth = 'April'
        break
      case (4):
        strMonth = 'May'
        break
      case (5):
        strMonth = 'June'
        break
      case (6):
        strMonth = 'July'
        break
      case (7):
        strMonth = 'August'
        break
      case (8):
        strMonth = 'September'
        break
      case (9):
        strMonth = 'October'
        break
      case (10):
        strMonth = 'November'
        break
      case (11):
        strMonth = 'December'
        break
      default:
        strMonth = ''
        break
    }

    return strMonth
  }

  const dateTransform = useCallback((date: Date): string => {
    var strDate: string
    var dateDiff: number = (new Date().getDate() - date.getDate())
    var pm: boolean = date.getHours() > 12
    if (dateDiff < 1) {
      strDate = `Today @ ${pm ? date.getHours() - 12 : date.getHours()}:${date.getMinutes()} ${pm ? 'PM' : 'AM'}`
    } else if (dateDiff < 2) {
      strDate = `Yesterday @ ${pm ? date.getHours() - 12 : date.getHours()}:${date.getMinutes()} ${pm ? 'PM' : 'AM'}`
    } else {
      strDate = `${monthSwitch(date.getMonth())} ${date.getDate()} @ ${pm ? date.getHours() - 12 : date.getHours()}:${date.getMinutes()} ${pm ? 'PM' : 'AM'}`
    }
    return strDate
  }, [ticket])

  return (
    <tr>
      <td className='ticket'>
        <a className='title'>{ticket.title}</a>
        <br />
        <a className='forum-title'>{ticket.forum.title}</a>
      </td>
      <td className='status'>
        <div className={ticket.status}>
          {ticket.status}
        </div>
      </td>
      <td className='created-on'>
        {dateTransform(ticket.created_time)}
      </td>
      <td className='replies'>
        <div className='reply-data'>
          <img className='avatar' src={ticket.latest_post_author.avatar_url} />
          <div className='last-by'>
            Last by {ticket.latest_post_author.display_name}
          </div>
          <div className='num-replies'>
            {ticket.num_replies}
          </div>
          <div className={ticket.latest_post_author.is_staff ? 'staff' : 'hide'}>
            staff
          </div>
        </div>
      </td>
    </tr>
  )
}
