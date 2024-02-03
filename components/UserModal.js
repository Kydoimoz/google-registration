"use client";
import React from "react";
import { useState } from "react";
import styles from "../components/UserModal.module.css";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
const UserModal = ({ onClose }) => {
    const { data: session } = useSession();
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
                    <Image src="/images/google-logo.jpg" height={30} width={30} />
                    <p>Sign In with Google</p>
                </button>
                <br />
                {   /* <button className={styles.btn} onClick={handleLoginWithApple}>
                    <Image src="/images/apple-logo.jpg" height={30} width={30} />
                    <p>Sign In with Apple</p>
    </button>*/}
                <button className={styles.btn} onClick={() => signIn("instagram")}>
                    <Image src="/images/" height={30} width={30} />
                    <p>Sign In</p>
                </button>
            </div>
        </div>
    );
};

export default UserModal;