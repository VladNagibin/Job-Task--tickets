import { IAuthor } from "./IAuthor"
import { IForum } from "./IForum"

export type status = 'open' | 'resolved' | 'feedback'
export interface ITicket{
    id:number
    title:string
    created_time:Date
    created_time_utc:Date
    forum:IForum
    author:IAuthor
    latest_post_author:IAuthor
    num_replies:number
    status:status
    url:string

}