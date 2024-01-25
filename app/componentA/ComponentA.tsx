// components/ComponentA.tsx
import React from "react";
import { InstanceData } from "../interface";
import styles from "./styles.module.css"; // Import the styles
import Image from "next/image";
import { elements, YourComponentProps } from "../components/ParentComponent";
interface ComponentAProps {
    data: InstanceData;
}
interface PageElement {
    id: string;
    actualElement: string;
    elementType: string;
    elementValue: string;
    // Add other properties if needed
}

interface Section {
    sectionName: string;
    sectionId: string;
    sectionElements: PageElement[];
}

export interface PageData {
    page: string;
    sectionDetails: Section[];
}

// // Now, you can use the defined interfaces for the data prop
// interface ComponentAProps {
//     data: PageData;
// }

const ComponentA: React.FC<YourComponentProps> = ({ data }:any) => {
    const imageElement = data.filter((value: { elementType: string; }) => value.elementType === "image")[0]?.elementValue

    console.log("data==========>", data)

    return (
        <div className={styles.container}>
            <div className={styles.container1}>
                <div className={styles.container2}>
                    <h1 className={styles.title}>
                        {data.filter((value: { elementType: string; }) => value.elementType === "header1")[0]?.elementValue}
                    </h1>
                    <h2 className={styles.subtitle}>
                        {data.filter((value: { elementType: string; }) => value.elementType === "header2")[0]?.elementValue}
                    </h2>
                    <p className={styles.paragraph}>
                        {data.filter((value: { elementType: string; }) => value.elementType === "paragraph")[0]?.elementValue}
                    </p>
                </div>
                <Image className={styles.image} src={imageElement} alt='water' width={500} height={500} />
            </div>

            <button  className={styles.button}>
                {data.filter((value: { elementType: string; }) => value.elementType === "button")[0]?.elementValue}
            </button>
        </div>
    );
};

export default ComponentA;
