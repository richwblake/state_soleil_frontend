import './headerImage.css';

export default function HeaderImage({ imageText = "", imageTitle, imageUrl }) {
    return (
        <div style={{
            backgroundImage: `url("${imageUrl}")`
        }}
            className="header-img">
            <h1>{imageTitle}</h1>
            {imageText !== "" ? <p>{imageText}</p> : ""}
        </div>
    );
}

