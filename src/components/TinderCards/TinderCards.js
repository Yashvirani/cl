import React,{useState} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';


function TinderCards() {
    const [people,setPeople] = useState([
        {
            name:'Steve Jobs',
            url:'https://www.incimages.com/uploaded_files/image/1920x1080/getty_946964370_200013332000928085_381902.jpg'
        },
        {
            name:'Mark Zukerberg',
            url:'https://api.time.com/wp-content/uploads/2020/07/Mark-Zuckerberg-Surfing.jpg?w=600&quality=85'
        }
    ]);
    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard className="swipe" key={person.name} preventSwipe={['up','down']}>
                        <div className="card" style={{backgroundImage:`url(${person.url})`}}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
            
        </div>
    )
}

export default TinderCards;
