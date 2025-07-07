export type UserDetailsType = {
    username: string;
    name: string;
    password?: string;
    amount?: number;
};

export type ContributionType = Omit<UserDetailsType, 'password'> & {
    isChecked: boolean;
};

export type RoomType = {
    id: string;
    roomName: string;
    createdBy: string;
    contributors: string[];
    contributions: Omit<UserDetailsType, 'password'>[];
    total: number;
};
