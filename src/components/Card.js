import photo from "../assets/sasuke.jpg";

export default function Card() {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <p>SOLD OUT</p>
        <img src={photo} alt="" className="card-image" />
      </div>
      <div className="card-rating">
        <small>star icon</small>
        <span>5.0</span>
        <span>(4) •</span>
        <span>USA</span>
      </div>
      <p className="card-review">
        Duis laboris cupidatat pariatur mollit sunt sit enim est culpa in
        excepteur proident laborum.
      </p>
      <p className="card-price">
        <small>From $145</small> / person
      </p>
    </div>
  );
}
