export default function Question({ str }) {
    const test =str.replace('<br>', <br />);
    return (
        <div className={'question'}>
            {test}
        </div>
    );
};