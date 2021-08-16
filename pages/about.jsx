import Head from 'next/head'
import { useEffect } from 'react';
const About = () => {
    useEffect(()=>{
        window.scrollTo(
            {
              top: 0,
              behavior: "smooth"
            }
          );
    },[]);
    return (
        <>
            <Head>
                <title>About | Employee List</title>
            </Head>
            <div>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam inventore, cum natus beatae odit culpa provident molestias! Qui placeat impedit perferendis reprehenderit rerum quidem facere, asperiores inventore voluptatibus eveniet omnis.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis modi quos aspernatur magni hic blanditiis? Sed odio a vel debitis! Quis eius in tenetur eaque et, ducimus obcaecati quos modi!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur cumque ratione obcaecati nemo asperiores earum nulla facilis fugiat doloribus praesentium non harum, quasi recusandae, dolore fugit distinctio! Laboriosam, tenetur optio?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia quidem odit accusantium aspernatur culpa dolorum. Sint deleniti totam nesciunt tempore nemo eum exercitationem at odit praesentium rerum, odio est?</p>
            </div>
        </>
    );
}

export default About;