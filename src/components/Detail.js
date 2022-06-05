import DetailTitle from "./DetailTitle";
import DetailInfo from "./DetailInfo";

export default function Detail() {
  return (
    <div className="detail">
      <img src={require("../assets/itachi.jpg")} alt="" />
      <div className="detail-info">
        <DetailTitle />
        <DetailInfo />
      </div>
    </div>
  );
}
