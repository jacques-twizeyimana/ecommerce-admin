
export interface IUser {
   id: string;
   username: string;
   email: string;
   profileUrl: string;
   seqNumber: string;
   firstName: string;
   lastName: string;
   currentUserRoles: IRole[]
}

export type IRole = 'User' | 'SuperUser' | 'Admin' | 'Guest';