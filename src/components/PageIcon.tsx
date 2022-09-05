import React from 'react'

interface PageIconProps{
    i:number
    page:number
    setPage:(data:number)=>void
}

export default function PageIcon({i,page,setPage}:PageIconProps) {
    const changePage = () =>{
        setPage(i)
    }
    return (
    <div className={i==page?'chosen':''} onClick={changePage}>{i}</div>
  )
}
