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
                <h2>Sign In</h2>
                <button className={styles.btn} onClick={() => signIn("google")}>
                    {/* Use a proper alt text for accessibility */}
                    <Image src="/images/google-logo.jpg" height={30} width={30} alt="Google Logo" />
                    <p>Sign In with Google</p>
                </button>
                <br />

                <button className={styles.btnInsta} onClick={() => signIn("twitter")}>
                    {/* Update text to be more accurate */}
                    <p>Sign In with Twitter</p>
                </button>
            </div>
        </div>
    );
};

export default UserModal;