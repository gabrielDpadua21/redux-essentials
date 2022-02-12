import React from 'react';
import Card from './Card';

interface IProps {
    min: number;
    max: number;
}

const Sorteio = (props: IProps) => {

    const {min, max} = props;
    const aleatory = (Math.random() * (max - min)) + min;
    
    return (
        <Card title="Sorteio de numeros" color='purple'>
            <div>
                <span>
                    <span>
                        Resultado:
                    </span>
                    <strong>
                        {parseInt(aleatory.toString())}
                    </strong>
                </span>
            </div>
        </Card>
    )
}

export default Sorteio;