import React, { useEffect, useState } from "react";
import { fetchData } from "../helpers/fetchData";

export const useFetchData = ({endpoint}) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getData = async() =>{
        const {data, isLoading} = await fetchData({endpoint})
        setData(data)
        setIsLoading(isLoading)
    }

    useEffect(() => {
        getData()
    }, [endpoint])

    return {
        data,
        isLoading
    }
}
