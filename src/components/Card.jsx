import React from 'react';
import data from '../assets/data.json'

export default function card() {

    const Cards = data.map(item =>{
        return (
            <article className='Card-item' id={item['bg-color']} key={item.id}>
                 <div className='card-top'>
                   <img src={item.icon} alt="icon-img-car"/>
                   <h2 className='card-top-title'>{item.category}</h2>
                 </div>
                 <section className='main-card-content'>
                    <p className='card-main-text'>{item.information}</p>
                    <button className='card-btn' id={item.btnHover}>Learn more</button>
                 </section>
            </article>
        )
    })
   

    return (
        <>
          {Cards}
        </>
    )
}