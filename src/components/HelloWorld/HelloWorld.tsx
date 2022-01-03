import React, { useEffect, useState } from 'react';
import { IProfile } from '../../interfaces/IProfile';

interface IHelloWorldProps {
    name:       string;
}

export default function HelloWorld({name}: IHelloWorldProps) {

    const [profile, setProfile] = useState<IProfile>();

    useEffect(() => {
        setProfile({
            name,
            surname: 'Siles'
        })
        
    }, [name])

    return <>
        <h1>Hello {profile?.name || 'World'}</h1>
        <span>{profile?.surname}</span>
    </>
}