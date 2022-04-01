
export const userPermissionLevel = {
    ADMIN: {
        level : 6,
        name : 'Admin',
        description : 'Has access to the user management endpoint and can make new developer token'    
    },
    VIEWER : {
        level : 1,
        name : 'Viewer',
        description : 'Can only access specific endpoints and has only ready-only access to the database',

    },
    EDITOR : {
        level : 2,
        name : 'Editor',
        description : "Has acess to edit endpoints but cannot delete or create new ones",
    },
    THIRD_PARTY_DEVS : {
        level : 3,
        name : 'Third Party Developers',
        description : "Has access to the API but cannot create new endpoints or the databsae",
    },
    DEVELOPER : {
        level : 4,
        name : 'Developer',
        description : "Can create new endpoint, access the database and has read-write access to the database but cannot make new endpoint",
    },
    DEVELOPER_TOKEN : {
        level : 5,
        name : 'Developer Token',
        description : "Can create new endpoint, access the database and has read-write access to the database and can make new developer token",
    },
}

export const TokenPermissionLevel = {
    ADMIN: {
        level : 3,
        name : 'Admin',
        description : 'Has access to the user management endpoint and can make new developer token'
    },
    APPS : {
        level : 1,
        name : 'Apps',
        description : "Has access to the API but cannot create new endpoints or the databsae",
    },
    DEVELOPER : {
        level : 2,
        name : 'Developer',
        description : "Can create new endpoint, access the database and has read-write access to the database but cannot access the endpoints for diagonistics",

    },
}

export type TokenPermissionLevel = {
    level : number,
    name : string,
    description : string
}