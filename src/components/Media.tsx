import React from 'react';
import Card from './Card';


interface IProps {
    min: number;
    max: number;
}

const Media = (props: IProps) => {

    const {min, max} = props;

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

export default Media;