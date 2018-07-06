import React from 'react';

const Card = (props) => {
    return(
        <div className='tc bg-light-green ma3 br2 grow shadow-5'>
            <img alt='robotImg' src={`https://robohash.org/${props.id}?200x200`}/>
            <div>
                <h2>{ props.name }</h2>
                <p>{ props.email }</p>
            </div>
        </div>
    );
}

export default Card
