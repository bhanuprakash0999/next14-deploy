import React from 'react';
import ComponentA from '../componentA/ComponentA';


const Components: Record<string, React.ComponentType<{ data: any }>> = {
    foo: ComponentA
};

const ParentComponent: React.FC<any> = async(props) => {
    return (
        <div >
            {props.data.content.body.map((item: { _uid: React.Key | null | undefined; component: string | number; instanceData: any; }) => {
                console.log('Rendering component with _uid:', item._uid);
                const Component = Components[item.component];
                return (
                    <div key={item._uid}>
                        <Component data={item.instanceData} />
                    </div>
                );
            })}
        </div>
    );
};

export default ParentComponent;
