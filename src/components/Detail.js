import DetailTitle from "./DetailTitle";
import DetailInfo from "./DetailInfo";

export default function Detail({ item }) {
  return (
    <div className="detail">
      <img src={item.coverImg} alt="" />
      <div className="detail-info">
        <DetailTitle name={item.name} show={item.show} />
        <DetailInfo
          startDate={item.startDate}
          endDate={item.endDate}
          description={item.description}
        />
      </div>
    </div>
  );
}
