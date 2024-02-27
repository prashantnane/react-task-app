import styles from "../mystyles.module.css";
import { useState } from "react";

const ModalComponent = ({ isOpen, onClose }) => {
  const [addTask, setAddTask] = useState([
    {
      id: 1,
      title: "Go to gym",
      completed: true,
    },
  ]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <div className={styles.taskHeader}>
          <span>Title </span>
          <span style={{ color: "red" }}>*</span>
        </div>
        <input
          className={styles.taskInput}
          placeholder="Enter Task Title"
        ></input>
        <div className={styles.priorityContainer}>
          <div>
            <span>Select Priority </span>
            <span style={{ color: "red" }}>*</span>
          </div>
          <div className={styles.taskContent}>
            <span>RED</span>
            <span>HIGH PRIORITY</span>
          </div>
          <div className={styles.taskContent}>
            <span>BLUE</span>
            <span>MODERATE PRIORITY</span>
          </div>
          <div className={styles.taskContent}>
            <span>GREEN</span>
            <span>LOW PRIORITY</span>
          </div>
        </div>
        <div>
          <span>Checklist(0/0) </span>
          <span style={{ color: "red" }}>*</span>
        </div>
        <div className={styles.addTask}>
          <AddTask></AddTask>
          <button
            style={{
              backgroundColor: "transparent",
              color: "grey",
              border: "transparent",
              padding: "0px",
            }}
          >
            + Add New
          </button>
        </div>
        <div className={styles.buttonContainer}>
          <button
            style={{
              backgroundColor: "white",
              color: "grey",
              border: "2px solid rgb(203, 201, 201)",
            }}
          >
            Select Due Date
          </button>
          <div>
            <button
              onClick={onClose}
              style={{
                backgroundColor: "white",
                color: "red",
                border: "2px solid red",
              }}
            >
              Cancel
            </button>
            <button
              style={{
                backgroundColor: "#0d8090",
                color: "white",
                marginLeft: "10px",
                border: "2px solid #0d8090",
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function AddTask() {
  return (
    <div className={styles.addTaskContainer}>
      <div>
        <span>CheckBox</span>
        <input
          style={{
            height: "90%",
            border: "none",
            outline: "none",
            marginLeft: "5px",
          }}
          placeholder="Add a Task"
        ></input>
      </div>
      <button>Delete</button>
    </div>
  );
}

export default ModalComponent;
