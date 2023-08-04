import { useState } from "react";

export default function CardHead({ info, index }) {
    const [help, setHelp] = useState(false);
    return (
        <div className={'card-name'}>
            <h1>{info.name} №{index+1}</h1>
            <sup 
                className={'help'}
                onClick={() => setHelp(!help)}
            >
                ?
            </sup>
            <div 
                className={'help-window'}
                style={help ? { display: "inline-block" } : {}}
            >
                {info.help}
            </div>
        </div>
    ); 
};