import './Intervalo.css';
import React from 'react';
import Card from './Card';

interface IProps {
    min: number;
    max: number;
    onMinChange?: any;
    onMaxChange?: any;
}


const Intervalo = (props: IProps) => {

    const {min, max} = props;

    return (
        <Card title="Intervalor de numeros">
            <div className='intervalo'>
                <span>
                    <strong>
                        Minímo
                    </strong>
                    <input 
                        type="number" 
                        value={min}
                        onChange={e => props.onMinChange(+e.target.value)} 
                    />
                </span>
                <span>
                    <strong>
                        Máximo
                    </strong>
                    <input 
                        type="number" 
                        value={max}
                        onChange={e => props.onMaxChange(+e.target.value)} 
                    />
                </span>
            </div>
        </Card>
    )
}

export default Intervalo;