import { useState } from 'react';
import { finalImg } from '../scripts/info';

export default function FinalInfo() {
    const [isHidden, setIsHidden] = useState(false);
    return (
        <div 
            className={'final-container'}
            style={
                !isHidden ? {
                    zIndex: '101', 
                    width: '100%', 
                    height: '100%'
                } : {}
            }
        >
            <div className={isHidden ? 'info-container is-hidden' : 'info-container is-appeared'}>
                <button 
                    className={'close'}
                    onClick={() => {
                        setIsHidden(!isHidden);
                    }}
                >
                    {isHidden ? 'Показати' : 'Сховати'}
                </button>
                {
                    finalImg &&
                    <img 
                        src={`https://i.postimg.cc/${finalImg}`}
                    />
                }
                Вітаємо!
            </div>
        </div>
    );
};