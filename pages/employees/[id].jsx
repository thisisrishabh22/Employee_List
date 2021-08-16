import Head from "next/head";
import { useEffect } from "react";

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map(employee => {
        return {
            params: { id: employee.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await res.json();

    return {
        props: {
            employee: data
        }
    }
}

const Details = (props) => {

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 10000);
        window.scrollTo(
            {
                top: 0,
                behavior: "smooth"
            }
        );
    }, []);    
    return (
        <>
            <Head>
                <title>{props.employee.name} | Employee details</title>
            </Head>
            <div>
                <h1>{props.employee.name}</h1>
                <p>{props.employee.email}</p>
                <p>{props.employee.website}</p>
                <p>{props.employee.address.city}</p>
            </div>
        </>
    );
}

export default Details;