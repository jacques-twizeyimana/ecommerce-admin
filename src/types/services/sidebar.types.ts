export interface ISidebar {
    id: number;
    allowedRoles?: string[];
    link?: string;
    name: string;
    subItems?: SubItem[][];
}

export interface SubItem {
    id: number;
    name: string;
    link: string;
    allowedRoles?: string[];
    icon: string;
    nestedItems?: NestedItem[]
}

export interface NestedItem {
    id: number;
    link: string;
    allowedRoles?: string[];
    name: string
}
