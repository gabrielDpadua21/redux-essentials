import React from 'react';
import './Card.css';

interface IProps {
    title: string,
    color?: string,
    children?: any
}

const COLORS = ['red', 'blue', 'green', 'purple'];

const getColor = (props: IProps): string => {
    if(props.color && COLORS.includes(props.color)) {
        return props.color;
    }
    return 'red';
}

const Card = (props: IProps) => {
    return (
        <div className={`card ${getColor(props)}`}>
            <div className="header">
                <span className="title">
                    {props.title}
                </span>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}

export default Card;