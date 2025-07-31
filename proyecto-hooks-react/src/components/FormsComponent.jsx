import React, { use } from 'react'
import { useForm } from '../hooks/useForm';
import { useEffect, useRef } from 'react';

export const FormsComponent = () => {

    const initialForm = {
        username: '',
        nickname: '',
        email: '',
        password: ''
    };

    const {formState, onInputChange} = useForm(initialForm);
    const { username, nickname, email, password } = formState;

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    };

    const focusRef = useRef()
    useEffect(() => {
        focusRef.current.focus();
    }, []);

    return (
        <>
            <h4>Formulario Test</h4>
            <br />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">User name</label>
                    <input type="text" className="form-control" id="username" name="username" value={username} onChange={onInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="nickname" className="form-label">Nick name</label>
                    <input type="text" className="form-control" id="nickname" name="nickname" value={nickname} onChange={onInputChange}/>
                </div>
                <div className="mb-3">
                    <label ref={focusRef} htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={onInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={password} onChange={onInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
