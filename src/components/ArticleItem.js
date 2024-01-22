import React from 'react';
import { Link } from 'react-router-dom';
import news from '../assets/img/news.jpg'

const ArticleItem = (prop) => {
    const {title,description,src,url} = prop
    return (
       
         <div className="conatiner card d-inline-block my-3 mx-2 py-2 px-2" style={{width: '18rem'}}>
             <img style={{height:'40vh'}} src={src?src:news}className="card-img-top" alt="..." />
             <div className="card-body">
                 <h5 className="card-title">{title}</h5>
                 {/* <p className="card-text">{description}</p> */}
                 <Link to={url} target='__blank' className="btn btn-primary">Lire plus</Link>
             </div>
         </div>

    );
}

export default ArticleItem;
