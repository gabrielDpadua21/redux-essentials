import './Intervalo.css';
import React from 'react';
import Card from './Card';

const Intervalo = (props: any) => {

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
                        value={1}
                        readOnly 
                    />
                </span>
                <span>
                    <strong>
                        Máximo
                    </strong>
                    <input 
                        type="number" 
                        value={10}
                        readOnly 
                    />
                </span>
            </div>
        </Card>
    )
}

export default Intervalo;