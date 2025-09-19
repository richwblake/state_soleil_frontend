export default function HeaderImage({ imageText = "", imageTitle, imageUrl, position = "left" }) {
    return (
        <div style={{
            backgroundImage: `url("${imageUrl}")`,
            backgroundPosition: position,
        }}
            className="header-img">
            <h1>{imageTitle}</h1>
            {imageText !== "" ? <p>{imageText}</p> : ""}
        </div>
    );
}

