



export const ISAUTH = 'ISAUTH'

export const isAuth = (data) => {
    return {
        type:ISAUTH,
        payload:data,
    }
}