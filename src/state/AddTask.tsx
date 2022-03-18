import { atom } from "recoil";

export const date = atom<{from : Date, till : Date}>({
    key: "date",
    default: {
        from: new Date(),
        till: new Date()
    }
});
