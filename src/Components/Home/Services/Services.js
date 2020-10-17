import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';


// const services = [
//         {
//             id: 1,
//             name: 'Web and Mobile Design',
//             description: 'We craft stunning and amazing web UI, using a well drrafted.',
//             img: 'https://i.imgur.com/jGJix9B.png',
//         },
//         {
//             id: 2,
//             name: 'Graphic Design',
//             description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
//             img: 'https://i.imgur.com/6Ts9fX2.png',
//         },
//         {
//             id: 3,
//             name: 'Web Development',
//             description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
//             img: 'https://i.imgur.com/q0dw9dg.png',
//         }
//     ]


const Services = () => {

    // const handleAddProduct = () => {
    //     fetch('http://localhost:4000/addService', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(services)
    //     })
    // }

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://damp-tundra-32037.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (


        <section className="sevices-container mt-5">
           <div className="text-center">
                <h2>Provide awesome services</h2>
                {/* <button onClick={handleAddProduct}>Add Product</button> */}
           </div>
           <div className='d-flex justify-content-center'>
           <div className='w-75 row mt-5 pt-5'>
           {
                    services.map(service => <ServiceCard service={service} key={service.id}></ServiceCard>)
                }
           </div>
           
        </div>

       </section>
    );
};

export default Services;