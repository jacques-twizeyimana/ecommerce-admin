export interface ISidebar {
    id: number;
    name: string;
    subItems?: SubItem[][];
}

export interface SubItem {
    id: number;
    name: string;
    icon: string;
    nestedItems?: NestedItem[]
}

export interface NestedItem {
    id: number;
    name: string
}
