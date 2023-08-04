export default function CardHead({ 
    info, 
    index, 
    helpState,
    helpSet 
}) {
    return (
        <div className={'card-name'}>
            <h1>{info.name} №{index+1}</h1>
            <sup 
                className={'help'}
                onClick={() => helpSet(!helpState)}
            >
                ?
            </sup>
            <div 
                className={'help-window'}
                style={helpState ? { display: "inline-block" } : {}}
            >
                {info.help}
            </div>
        </div>
    ); 
};