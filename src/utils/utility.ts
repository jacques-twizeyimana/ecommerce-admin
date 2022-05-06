import { IRole } from "../types/services/user.types";

export const containsAll = (arr1: IRole[], arr2: string[]) => {

    return arr1.every(element => {
        return arr2.indexOf(element) !== -1;
    });
    // return arr1.find((elem) => elem == arr2[0])
}