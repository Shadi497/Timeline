import styles from "../styles";

const Telement = (props) => {
  return (
    <table style={styles.m}>
      <tr>
        <td>
          <img src={props.d.image} style={styles.i} />
        </td>
        <td style={styles.vline}></td>

        <td style={styles.p}>
          <h3 style={styles.s}>{props.d.date}</h3>
          <h3>{props.d.title}</h3>
          <p style={styles.d}> {props.d.description} </p>
          <h3>{props.d.location}</h3>
        </td>
      </tr>
    </table>
  );
};

export default Telement;
