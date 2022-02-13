import './Intervalo.css';
import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

const Intervalo = (props: any) => {
    const {min, max} = props.numbers;
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
                        readOnly 
                    />
                </span>
                <span>
                    <strong>
                        Máximo
                    </strong>
                    <input 
                        type="number" 
                        value={max}
                        readOnly 
                    />
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = (state: any) => {
    return {
        numbers: state.numbers
    }
}

export default connect(mapStateToProps)(Intervalo);