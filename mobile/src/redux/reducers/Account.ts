import { Reducer } from "redux";
import { Account } from "../../../types";


let initialState = {
    Account : {
        id: '',
        username: '',
        email: '',
        password: '',
    }
}

export const UpdateAccount = (account:Account) => {
    return {
        type: 'UPDATE_ACCOUNT',
        payload: {
            account: account
        }
    }
}


export const accountReducer: Reducer<Account> = (state = initialState.Account, action) => {
    switch (action.type) {
        case 'UPDATE_ACCOUNT':
            const newAccount = action.payload.account;
            return newAccount;
        default:
            return state;
    }
}

export default accountReducer;