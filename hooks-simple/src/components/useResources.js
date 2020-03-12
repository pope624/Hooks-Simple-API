import {useState, useEffect} from 'react'
import axios from 'axios'

export const useResources = (resource) =>{
    const [resources, setResources] = useState([]);

    /*const fetchResource = async resource =>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data)
    }*/

    /*
    si no se pasa el arreglo como segundo parámetro siempre se llama el useEffect
    [] solo se llama una vez, similar al componentDidmount
    [resource] siempre se va a llamar si hay algun cambio en resource
     */
    useEffect(() => {
       (async resource =>{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            setResources(response.data)
        })(resource)
        //fetchResource(resource)
    }, [resource]);

    return resources;
}