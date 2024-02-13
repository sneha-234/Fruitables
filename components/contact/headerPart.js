import Link from 'next/link'
import React from 'react'

const HeaderPart = () => {
  return (
    <div>
      <div>
       <div className="container-fluid page-header py-5">
            <h1 className="text-center text-white display-6">Contact</h1>
            <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><Link href="#">Home</Link></li>
                <li className="breadcrumb-item"><Link href="#">Pages</Link></li>
                <li className="breadcrumb-item active text-white">Contact</li>
            </ol>
        </div>
    </div>

    </div>
  )
}

export default HeaderPart