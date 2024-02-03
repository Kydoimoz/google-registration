import React, { useState } from "react";
import classes from "../components/HomePage.module.css";
import UserModal from "../components/UserModal";
export default function HomePage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  }
  const handleCloseModal = () => {
    setModalOpen(false);
  }
  return (
    <div className={classes.outerdiv}>

      <main className={classes.container}>
        <button type="button" onClick={handleOpenModal}>Sign Up</button>
        {isModalOpen && <UserModal onClose={handleCloseModal} />}
        {/*<UserModal onClose={handleCloseModal} />*/}
      </main>
    </div>
  );
}