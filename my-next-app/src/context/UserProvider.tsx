"use client";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";


type UserProviderProps = {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
}

export const UserContext = createContext<UserProviderProps | undefined>(undefined);
export const UserProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [email, setEmail] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('email') || '';
        }
        return '';
    });
    const [password, setPassword] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('password') || '';
        }
        return '';
    });

    useEffect(() => {
        if (email) {
            localStorage.setItem('email', email);
        }
        if (password) {
            localStorage.setItem('password', password);
        }
    },[email, password]);



    return (
        <UserContext.Provider value={{ email, setEmail, password, setPassword }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserData = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUserData must be used within a UserProvider');
    }
    return context;
}