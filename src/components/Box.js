export default function Box({ on, toggle: toggler }) {
  const styles = {
    backgroundColor: on ? "#222222" : "transparent",
  };

  return <div onClick={toggler} className="box" style={styles} />;
}
