import { useState } from 'react'

export default function Home() {
    const [home, setHome] = useState()

    return(
        <div className = 'home'>
            <h2>Home</h2>
            <p>Car Dash</p>
        </div>
    )
}