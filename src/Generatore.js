import { fakerIT as faker } from '@faker-js/faker'
import {useState, useEffect} from 'react';

const Generatore = ({children}) => {
    const [array, setArray] = useState([]);

    useEffect(() => {
        const newArray = Array.from({length: 10}, () => faker.person.fullName());
        setArray(newArray);
    }, []);

    return children(array);
};

export default Generatore;