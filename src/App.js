import styles from "./mystyles.module.css";
import TaskComponent from "./Components/task";
import ModalComponent from "./Components/modal";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className={styles.outerContainer}>
      <TaskComponent></TaskComponent>
      <div>
        <button
          onClick={handleOpen}
        >
          Open modal
        </button>
      </div>
      <ModalComponent isOpen={open} onClose={handleClose}></ModalComponent>
    </div>
  );
}

export default App;
