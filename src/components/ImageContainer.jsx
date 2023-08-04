export default function ImageContainer({ link }) {
    return (
        <div className={'image-container'}>
            <img 
                className={'content-img'}
                src={`https://i.postimg.cc/${link}`}
                alt={'img-info'}
            />
        </div>
    );
};