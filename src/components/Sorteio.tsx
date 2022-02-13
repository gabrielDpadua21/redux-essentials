import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

const Sorteio = (props: any) => {
    const { min, max } = props.numbers;
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

const mapStateToProps = (state: any) => {
    return { 
        numbers: state.numbers
    }
}

export default connect(mapStateToProps)(Sorteio);