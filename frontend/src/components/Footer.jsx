import React from 'react'

function Footer() {
  return (
    <div>
      <footer>
        <div className='grid md:grid-cols-3 grid-cols-1'>
            <div className='flex flex-col'>
                <h3 className='font-semibold cursor-pointer'>Nearest Doctor</h3>
                <p className='cursor-pointer'>All rights reserved</p>
            </div>
            <div>middle</div>
            <div>Right</div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
