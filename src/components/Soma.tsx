import React from 'react';
import Card from './Card';


const Soma = (props: any) => {
    return (
        <Card title="Soma dos numeros" color='blue'>
            <div>
                <span>
                    <span>
                        Resultado:
                    </span>
                    <strong>
                        10
                    </strong>
                </span>
            </div>
        </Card>
    )
}

export default Soma;