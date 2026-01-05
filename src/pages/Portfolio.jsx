import React from 'react';
import "../styles/Portfolio.scss";
import { portfolio } from '../assets/portfolioLinks';

export default function Portfolio() {

  return (
    <section className='portfolio'>
        <h2 >
          Portfolio
        </h2>
        <div className='portfolio_grid'>
          {
            portfolio.map((res, id)=>
              <article className='portfolio-card' key={id}>
                  <div className="portfolio-media">
                    {res.imgs}
                  </div>
                  <div className="portfolio-content">
                    <h3>{res.title}</h3>
                    <p>{res.about}</p>
                    <ul className="tech">
                      {
                        res.tech.map((res,id)=> <span key={id}>{res}</span>)
                      }
                    </ul>
                    <div className="actions">
                      <a href={res.links}>Live</a>
                      <a href={res.github}>GitHub</a>
                    </div>
                  </div>
              </article>
            )
          }
        </div>
    </section>
  );
}
