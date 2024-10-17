import React, { useEffect } from "react";
import { useRouter } from 'next/router';
interface Props {
    name: string;
    city:string;
    country:string;
    contact:string;
}
const Indvidual = (data:Props) => {
    const router = useRouter();
    const { id } = router.query;
    // console.log(data)
    useEffect(() => {
        if (id) {
            // Perform actions with the ID, e.g., fetch data
            console.log('The ID from the query is:', id);
        }
    }, [id]);

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    if (!id) {
        return <div>Loading...</div>;
    }
    return (
        <div style={{padding:"10px"}}>
            Id:{id}<br/>
            Name:{data.name}<br/>
            City:{data.city}<br/>
            Country:{data.country}<br/>
            Conatct:{data.contact}
        </div>
    )
}
export default Indvidual;

export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/hello");
    const prop = await res.json();
    return {
        props: prop
    }
}