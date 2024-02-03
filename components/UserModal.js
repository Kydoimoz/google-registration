"use client";
import React from "react";
import { useState } from "react";
import styles from "../components/UserModal.module.css";
import Image from "next/image";
import { signIn } from "next-auth/react";
const UserModal = ({ onClose }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };

    return (
        <div className={`${styles.modalOverlay} ${isOpen ? styles.open : ''}`}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={handleClose}>
                    X
                </button>
                <h2>Sign Up or Sign In</h2>
                <button className={styles.btn} onClick={() => signIn("google")}>
                    <Image src="/images/google-logo.jpg" height={30} width={30} />
                    <p>Register</p>
                </button>
            </div>
        </div>
    );
};

export default UserModal;