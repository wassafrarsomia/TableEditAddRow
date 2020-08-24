import React, { useState } from 'react';

import FormContainer from '../components/form-container';
import TextInput from '../components/text-input';

export default function Login() {

    const [login, setLogin ] = useState('');
    const [password, setPassword] = useState('');

    function submit(e) {
        e.preventDefault();
        console.log({login, password})
    }

    return (<div>
        <FormContainer title="Login" onSubmit={submit}>
            <TextInput label="Login" value={login} onChange={(e) => {setLogin(e.target.value)}} />
            <TextInput
                label="Mot de passe"
                type="password"
                icon="lock"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}} />
        </FormContainer>
    </div>);
}