import "./Article.css"

export function Article({ title, price, imageUrl, imageAlt }) {
  return (
    <div className="article">
      <div className="main-img">
        <img src={imageUrl || "https://res.cloudinary.com/dzhi3sfz7/image/upload/v1754287948/paintings/gfn4d6dvo7oeskup07gk.webp"} alt={imageAlt} />
      </div>
      <div className="art-info">
        <div className="art-info-content">
          <h3 className="art-title">{title || 'Lorem'}</h3>
          <p className="art-price">{price || '250 €'}</p>
        </div>
      </div>
    </div>
  )
}