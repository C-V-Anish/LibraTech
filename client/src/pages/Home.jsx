import React, { useEffect, useState } from "react";

const Home = () => {
    const [name,setName]=useState('');

    useEffect(()=>{
        (
            async() => {
                const response = await fetch('http://127.0.0.1:8000/user/view', {
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                });

                const content = await response.json();

                setName(content.name); 
            }
        )()
    })

    return (
        <div>
            {name ? 'Hi' + name : 'You are not logged in!!'}
        </div>
    )
}

export default Home;