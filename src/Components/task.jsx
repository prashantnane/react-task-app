import styles from "../mystyles.module.css";

function TaskComponent() {
    return (
      <div className={styles.innerContainer}>
        <div className={styles.highPriority}>
          <span style={{ justifyContent: "space-between" }}>
            <span>red icon</span>
            <span style={{ fontSize: 10, padding: 5 }}>HIGH PRIORITY</span>
          </span>
  
          <span>More icon</span>
        </div>
        <div className={styles.taskHeader}>Hero section</div>
        <div style={{ justifyContent: "space-between" }}>
          <span style={{ fontSize: 15, fontWeight: "bold" }}>
            Checklist (1/3)
          </span>
          <span>Up Icon</span>
        </div>
        <div className={styles.taskContent}>
          <span>CheckBox</span>
          <span>Task to be done</span>
        </div>
        <div>
          <span>CheckBox</span>
          <span>Task to be done</span>
        </div>
        <div>
          <span>CheckBox</span>
          <span>Task to be done lorem ipsum</span>
        </div>
        <div>
          <span>Feb 10th</span>
          <span>PROGRESS</span>
          <span>TO-DO</span>
          <span>DONE</span>
        </div>
        
      </div>
    );
  }

  export default TaskComponent;