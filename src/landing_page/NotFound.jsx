import {Link} from 'react-router-dom'
function NotFound() {
    return ( 
        <div className="container p-5">
           
        <div className="text-center">
            <h1 className='mt-5'>404, Kiaan couldn’t find that page</h1>
            <p>We couldn’t find the page you were looking for. Visit <Link className='text-decoration-none' to="/" >Zerodha’s home page.</Link></p>
        </div>
        </div> 
     );
} 

export default NotFound;