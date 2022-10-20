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
            <Link to='/clock' className='ms-3'>
                時鐘
            </Link>
            <Link to='/pdfSign' className='ms-3'>
                pdf簽名
            </Link>
            <Link to='/protocolPage' className='ms-3'>
                ProtocolPage
            </Link>
        </div>
)
}
