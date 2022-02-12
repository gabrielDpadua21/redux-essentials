import React from 'react';
import Card from './Card';


const Media = (props: any) => {
    return (
        <Card title="Média dos numeros" color='green'>
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

export default Media;