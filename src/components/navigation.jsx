import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const Navigation = (props) => {
  const history = useHistory();
  const onChange = (e) => {

    let path = "/app";
    //let history = useHistory();
    console.log ("function calleddd");
    history.push(path);
  

  }


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
            Sounds of Pakistan
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
              <li>
              <Link to="/app">Upload Audio</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
