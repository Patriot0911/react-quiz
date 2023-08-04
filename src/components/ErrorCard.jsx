export default function ErrorCard({ errName }){
    return (
        <div className={'info-container'}>
            <div className={'extra'}>
                {errName}
            </div>
        </div>
    );
};