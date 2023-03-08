import React from 'react'

const  Footer = () => {
  return (
    <>
    <style jsx>{`
        .footer-wrap {
         text-align: center;
         padding: 1rem 0px;
         background-color: #dae1f2;
        }
      `}</style>
    <footer className='footer-wrap'>
        <div className="container">
            <div>&copy; TVS Motor Company. All Rights Reserved</div>
        </div>
    </footer>
    </>
  )
}

export default Footer