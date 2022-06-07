export default function Box({ on, id, toggle: toggler }) {
  const styles = {
    backgroundColor: on ? "#222222" : "transparent",
  };

  return <div onClick={() => toggler(id)} className="box" style={styles} />;
}
