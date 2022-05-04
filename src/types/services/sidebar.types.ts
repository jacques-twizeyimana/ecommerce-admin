export interface ISidebar {
    name: string;
    subItems?: SubItem[][];
}

export interface SubItem {
    name: string;
    icon: string;
    nestedItems?: NestedItem[]
}

export interface NestedItem {
    name: string
}
