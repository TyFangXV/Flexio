import db from '@react-native-async-storage/async-storage'

export const setItem = async (key: string, value: any) => {
    try {
        await db.setItem(key, value)
    } catch (e) {
        console.log(e)
    }
}

export const getItem = async (key: string) => {
    try {
        const value = await db.getItem(key)
        return value
    } catch (e) {
        console.log(e)
    }
}


export const deleteItem = async (key: string) => {
    try {
        await db.removeItem(key)
    } catch (e) {
        console.log(e)
    }
}
