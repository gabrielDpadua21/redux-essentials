import React from 'react';
import Card from './Card';

interface IProps {
    min: number;
    max: number;
}

const Soma = (props: IProps) => {

    const {min, max} = props;

    return (
        <Card title="Soma dos numeros" color='blue'>
            <div>
                <span>
                    <span>
                        Resultado:
                    </span>
                    <strong>
                        {min + max}
                    </strong>
                </span>
            </div>
        </Card>
    )
}

export default Soma;