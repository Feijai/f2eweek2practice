import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="container d-flex">
            <Link to='/'>
                小畫家
            </Link>
            <Link to='/lottoryTicket' className='ms-3'>
                刮刮樂
            </Link>
        </div>
)
}
