export const fetchData = async ({endpoint}) => {

    const urlBase = `https://jsonplaceholder.typicode.com/${endpoint}`

    try {
        const res = await fetch(urlBase)
        const data = await res.json()
        console.log(data)
        return{
            data,
            isLoading: false
        }
    } catch (error) {
        console.error(error)
        return {
            isLoading: false
        }

    }
}