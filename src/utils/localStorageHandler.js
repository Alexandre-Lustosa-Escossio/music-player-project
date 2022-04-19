
export const saveOnLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}