export interface URLViewModel {
    id: number;
    shortURL: string;
    originalURL: string;
    createdById: number;
    createdDate: string;
    countOfRedirect: number;
}

export interface UserViewModel {
    id: string;
    username: string;
    password: string;
    role: string;
}
