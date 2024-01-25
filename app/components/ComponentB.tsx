// components/ComponentA.tsx
import React from 'react';
import { InstanceData } from '../interface';
import styles from '../styles/styles.module.css';  // Import the styles
import Image from 'next/image';

interface ComponentAProps {
    data: InstanceData;
}

const ComponentA: React.FC<ComponentAProps> = ({ data }) => {
    return (
        <div className={styles.container}>
            <div className={styles.container1}>
                {/* <img className={styles.image} src={data.img} alt="Random Image" /> */}
                <Image src="https://unsplash.com/photos/shallow-focus-photography-of-water-peaTniZsUQs" alt='water'/>
                <div className={styles.container2}>
                    <div className={styles.title}>{data.h1}</div>
                    {data.h2 && <div className={styles.subtitle}>{data.h2}</div>}
                    <div className={styles.paragraph}>{data.p}</div>
                </div>
            </div>
            {data.button && (
                <button onClick={data.button.onClick} className={styles.button}>
                    {data.button.label}
                </button>
            )}
        </div>
    );
};

export default ComponentA;
