export default function DetailInfo({ startDate, endDate, description }) {
  return (
    <div className="info">
      <p className="info-date">{`${startDate} - ${endDate}`}</p>
      <p className="info-description">{description}</p>
    </div>
  );
}
