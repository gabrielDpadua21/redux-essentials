import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

const Media = (props: any) => {
    const { min, max } = props.numbers;
    return (
        <Card title="Média dos numeros" color='green'>
            <div>
                <span>
                    <span>
                        Resultado:
                    </span>
                    <strong>
                        {(min + max) / 2}
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

export default connect(mapStateToProps)(Media);