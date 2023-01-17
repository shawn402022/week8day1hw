import { useState } from 'react'

export default function Home() {
    const [Inventory, setInventory] = useState([
        {
            "model": "Camery",
            "make": "Toyota",
            "year": "2000",
            "color": "Black"
        },
        {
            "model": "Focus",
            "make": "Ford",
            "year": "2020",
            "color": "White"
        },
        {
            "model": "Grand Cherokee",
            "make": "Jeep",
            "year": "2018",
            "color": "Red"
        }
    ])

    return(
        <div className = 'inventory'>
            <h2>make</h2>
            <h3>model</h3>
            <hr />
            
                <ul>
                    <li>Toyota Camery</li>
                    <li>Nissan Maxima</li>
                    <li>Ford Focus</li>
                </ul>

        </div>
    )
}