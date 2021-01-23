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
          <p> {props.d.description} </p>
        </td>
      </tr>
    </table>
  );
};

export default Telement;
