import React, { useEffect, useState } from 'react';
import ArticleItem from './ArticleItem';

const Info = () => {
    const [articles, setArticles] = useState([])

    console.log(articles)

    useEffect(()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7aa6b3ce9de342dfaae15fc2b164e427`
        fetch(url)
            .then(res => res.json())
            .then(data=>setArticles(data.articles))
            .catch(e=>e)
    },[])
    return (
        <>
            <h1 className='text-center'>Latest <span className='badge bg-danger'>News</span></h1>
             {articles.map((news,index)=>{
                return <ArticleItem key={index} title={news.tite} description={news.description} src={news.urlToImage} url={news.url}/>
             })}
        </>
    );
}

export default Info;
