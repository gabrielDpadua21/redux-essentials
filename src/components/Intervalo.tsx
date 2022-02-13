import './Intervalo.css';
import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { changeMinNumber, changeMaxNumber } from '../store/actions/numbers';

const Intervalo = (props: any) => {
    const { min, max } = props.numbers;
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
                        onChange={e => props.changeMin(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>
                        Máximo
                    </strong>
                    <input
                        type="number"
                        value={max}
                        onChange={e => props.changeMax(+e.target.value)}
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

function mapDispatchToProps(dispatch: any)  {
    return {
        changeMin(newNumber: number) {
            const action = changeMinNumber(newNumber);
            dispatch(action);
        },
        changeMax(newNumber: number) {
            const action = changeMaxNumber(newNumber);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);