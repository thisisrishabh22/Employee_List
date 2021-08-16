import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../../styles/employee.module.css';

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: {
            employees: data
        }
    }
}

const Employees = ({ employees }) => {
    useEffect(() => {
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
                <title>Employees List</title>
            </Head>
            <div>
                <h1>All Employees</h1>
                {employees.map(employee => (
                    <Link href={"/employees/" + employee.id} key={employee.id}>
                        <a className={styles.single}>
                            <h3>
                                {employee.name}
                            </h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Employees;