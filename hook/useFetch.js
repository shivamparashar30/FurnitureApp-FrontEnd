import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import axios from 'axios';


const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get("https://furniture-app-backend-two.vercel.app/api/products/");
            setData(response.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }
    }


    useEffect(() => {
        fetchData()
    }, []);

    const refetch = () => {
        setIsLoading(true)
        fetchData();
    }


    return { data, isLoading, error, refetch }
}

export default useFetch

const styles = StyleSheet.create({})