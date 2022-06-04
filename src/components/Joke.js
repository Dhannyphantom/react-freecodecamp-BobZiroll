export default function Joke({ setup, punchline }) {
  return (
    <div>
      {setup && <h2>{setup}</h2>}
      <span>
        <i> {punchline} </i>
      </span>
      <hr />
    </div>
  );
}
