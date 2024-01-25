// interfaces.ts

interface ComponentData {
    _uid: string;
    component: string;
    instanceData?: InstanceData;
}

export interface InstanceData {
    filter(arg0: (value: any) => boolean): unknown;
    h1: string;
    h2?: string;
    p: string;
    img: string;
    button?: {
        label: string;
        onClick?: () => void;
    };
}

export interface YourPageProps {
    
}

export interface CombinedData extends ComponentData {
}


export interface ComponentAProps {
  data: InstanceData;
  customClassName?: string;
}


