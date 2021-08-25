let id = parseInt(window.localStorage.getItem('id') || "0")
export const CreateId = () => {
    id += 1
    window.localStorage.setItem('id', id.toString())
    return id
}