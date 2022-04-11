export type Category = {
    id: string;
    name: string;
    icon: string;
    color: string;
};

export type TaskSettings = {
    category: Category;
}

export type Task = {
    _id: string;
    title: string;
    date: {
        from: Date;
        till: Date;
    };
    isDone: boolean;
    Time: {
        from: Date;
        till: Date;
    },
    settings: TaskSettings,
    isTemplate: boolean,
    userID : string
};