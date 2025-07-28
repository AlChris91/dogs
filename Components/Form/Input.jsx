import styles from "./Button.module.css";

const Input = ({ label, type, name }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <Input id={name} className={styles.input} type={type} />;
      <p className={styles.error}>Error</p>
    </div>
  );
};
export default Input;
