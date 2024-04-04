import restaurantFood from '../assets/restauranfood.jpg';
import BruchettaImage from "../assets/bruchetta.svg";
import LemonDessertImage from "../assets/lemon dessert.jpg";
import GreekSaladImage from "../assets/greek salad.jpg";

import { Link } from 'react-router-dom';

export const HeroContent = () => {
    return <section className="hero-container">
        <div className="hero-content">
        <div className="hero-text">
            <div className='hero-title'>Little Lemon</div>
            <div className='hero-subtitle'>Chicago</div>
            <div className='hero-para'>We are a family owned meditteranean restaurant, focused on traditional recipes served with a modern twist. </div>
            <div className='reserve-table-btn'>

            <Link to="/booking" >Reserve a table</Link>
            </div>
        </div>
        <div>
            <img className="hero-image" src={restaurantFood} width={230} />
        </div>
        </div>
    </section>
}

const cardData = [
    {
        img: GreekSaladImage,
        title: 'Greek Salad',
        price: '$12.99',
        description: 'The famouse greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunch garlic and rosemary croutons'
    },
    {
        img: BruchettaImage,
        title: 'Bruchetta',
        price: '$12.99',
        description: 'The famouse greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunch garlic and rosemary croutons'
    },
    {
        img: LemonDessertImage,
        title: 'Lemon Dessert',
        price: '$12.99',
        description: 'The famouse greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunch garlic and rosemary croutons'
    }
]

const Cards = () => {
    return (
        <ul className='specials-container'>
            {cardData.map( card => {
                return (<li className='card-container'>
                    <img src={card.img} width={80}/>
                    <div className='card-text'>
                        <div className='price-container'>
                            <div className='card-title'>{card.title}</div>
                            <div>{card.price}</div>
                        </div>
                        <div className='card-description'>
                            {card.description}
                        </div>
                    </div>
                </li>)
            })}
        </ul>
    )
}

export const Specials = () => {
    return <section>
        <div className="specials-header">
               <h2>This Week specials!</h2>
               <div className='reserve-table-btn'>

            <Link to="/booking" >Online menu</Link>
            </div>
        </div>
        <div className='special-cards'>
            <Cards />
        </div>
    </section>
}

export const Testimonials = () => {
    return <section>
        Testimonials
    </section>
}

export const Chicagosection = () => {
    return <section>
        Chicagosection
    </section>
}

export const HomePage = () => {
    return <>
        <HeroContent/>
        <Specials/>
        {/* <Testimonials/>
        <Chicagosection/> */}
    </>
}