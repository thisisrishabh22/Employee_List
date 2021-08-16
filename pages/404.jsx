import Link from "next/link";
import {useEffect} from 'react';
import {useRouter} from 'next/router';

const NotFound = () => {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/");
        },10000)
    },[])

    return ( 
        <div className="not-found">
            <h1>Oooopsss.....</h1>
            <p>The page you looking for cannot be found !</p>
            <p>Go back to the <Link href="/"><a>Home Page</a></Link></p>
        </div>
     );
}
 
export default NotFound;