import './Intervalo.css';
import React from 'react';
import Card from './Card';

const Intervalo = () => {
    return (
        <Card title="Intervalor de numeros">
            <div className='intervalo'>
                <span>
                    <strong>
                        Minímo
                    </strong>
                    <input type="number" readOnly value={0} />
                </span>
                <span>
                    <strong>
                        Máximo
                    </strong>
                    <input type="number" readOnly value={10} />
                </span>
            </div>
        </Card>
    )
}

export default Intervalo;