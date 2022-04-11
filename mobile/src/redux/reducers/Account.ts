import { Reducer } from "redux";
import { Account } from "../../../types";


let initialState = {
    Account : {
        _id: '',
        username: '',
        email: '',
        password: '',
        isSignIn: false,
    }
}

export const UpdateAccount = (account:Account) => {
    return {
        type: 'UPDATE_ACCOUNT',
        payload: {
            account
        }
    }
}


export const accountReducer: Reducer<Account> = (state = initialState.Account, action) => {
    switch (action.type) {
        case 'UPDATE_ACCOUNT':
            const newAccount:Account = action.payload.account;
            state = newAccount;
            return state;
        default:
            return state;
    }
}

export default accountReducer;