export interface IModal {
    name: string;
    subItems?: ModalSubItem[];
}


export interface ModalSubItem {
    name: string;
    icon?: string;
}