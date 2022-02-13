import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';


const Soma = (props: any) => {
    const { min, max } = props.numbers;
    return (
        <Card title="Soma dos numeros" color='blue'>
            <div>
                <span>
                    <span>
                        Resultado:
                    </span>
                    <strong>
                        { min + max }
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

export default connect(mapStateToProps)(Soma);