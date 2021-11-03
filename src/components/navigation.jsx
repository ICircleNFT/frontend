export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            i CIRCLE
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li className="menu-item">
              <a href='#collections ' className='page-scroll'>
                Collections
              </a>
            </li>
            <li className="menu-item">
              <a href='#about_us' className='page-scroll'>
                About us
              </a>
            </li>
            <li>
              {/* <button type='button' className='btn btn-primary' role='button'>
                Connect to Wallet
              </button> */}
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
