import React, { FC } from 'react'

interface IProps {
    photo: string; 
    number: number;
}

const Friend: FC<IProps> = ({ photo, number }): JSX.Element => {   //const Friend: FC<{photo: string, number: number}> = ({ photo, number }): JSX.Element => {
    if (number === 7) {
        return <img className='bottomLeft' src={photo} alt={`friend${number}`} />
    }    
    if (number === 9) {
        return <img className='bottomRight' src={photo} alt={`friend${number}`} />
    } else {
        return <img src={photo} alt="friend" />
    }
}

export default Friend