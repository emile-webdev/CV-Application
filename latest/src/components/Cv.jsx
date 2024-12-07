import React, { useState } from 'react';

export function Cv() {
    const [name, setName] = useState("");

    return (
        <div>
            <input 
                type="text" 
                id="first-name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            />
            <div>{name}</div>
        </div>
    )
}

export default Cv;