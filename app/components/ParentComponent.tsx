import React from 'react';
import ComponentA from '../componentA/ComponentA';
import { PageData } from '../componentA/ComponentA';


export interface elements{
    elementType:string, 
    elementValue: string
}
export interface YourComponentProps {
    data: elements;
}

const Components: Record<string, React.FC<YourComponentProps>> = {
    "foo": ComponentA
};
function getElementTypeAndName(section: { sectionElements: any[]; sectionName: any; }) {
    const elementsInfo = section.sectionElements.map((element: { elementType: any; elementValue: any; }) => ({
        elementType: element.elementType,
        elementValue: element.elementValue
    }));

    return { sectionName: section.sectionName, elementsInfo };
}

const ParentComponent: React.FC<any> = (props:any) => {


    // Iterate through each section and get element type and name
    const sectionInfoArray = props.data.sectionDetails.map(getElementTypeAndName);

    // Output the result
    console.log(sectionInfoArray[0]);
    // return
    return (
        <div>
            {
                sectionInfoArray.map((sectionDetails:any)=>{
                    let ComponentDetails :any = Components[sectionDetails.sectionName];
                    console.log("ComponentDetails", ComponentDetails)
                    return(
                        <ComponentDetails data={sectionDetails.elementsInfo}/>
                    )

                })
            }
        </div>
    );
};

export default ParentComponent;
