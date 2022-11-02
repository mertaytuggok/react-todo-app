import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../Stores/Modal";
import Modals from "../Modals";
import styles from "../Css/Modal.module.css";

export default function Modal() {
  const dispatch = useDispatch();
  const { name, data } = useSelector((state) => state.Modal);
  const Modal = Modals.find((m) => m.name == name);

  const close = () => {
    dispatch(closeModal());
  };
  return (
    <div className={styles.Modal}>
      <div className={styles.inner}>
        <Modal.element close={close} data={data} />
      </div>
    </div>
  );
}
