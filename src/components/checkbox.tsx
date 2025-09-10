import styles from "./checkbox.module.css";

type CheckboxProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
};

const Checkbox = ({ checked = false, onChange, label }: CheckboxProps) => {
  const toggleCheckbox = () => {
    onChange?.(!checked);
  };

  return (
    <div className={styles.container} onClick={toggleCheckbox}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.wrapper}>
        <div className={`${styles.box} ${checked ? styles.checked : ""}`}>
          <div
            className={styles.tick}
            style={{ display: checked ? "block" : undefined }}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
