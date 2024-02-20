'use client';
import React, { useState } from 'react';
import axios from 'axios'
import { useRouter } from 'next/navigation';

const RegistroPage: React.FC = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
      });
      const router = useRouter();
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await axios.post("/api/auth/login", credentials);
    
        if (res.status === 200) {
          router.push("/dashboard");
        }
      };

  return (
    <main>
        <form className="flex-1 pt-36 padding-x" onSubmit={handleSubmit}>
            <label htmlFor="nombre_user">Nombre de usuario:</label>
                <input id="nombre_user" type="text" 
                placeholder='username' onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value,
                })} /><br/>
            <label htmlFor='email'>Correo electrónico:</label>
                <input id="email" type="email" placeholder="email"
                    onChange={(e) =>
                        setCredentials({
                        ...credentials,
                        email: e.target.value,
                        })} /><br/>
            <label htmlFor="password">Contraseña:</label>
            <input id="password"type="password"
                placeholder="password"
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    password: e.target.value,
                  })
                }/><br/>
            <button className="custom-btn text-primary-blue rounded-full bg-white min-w-[130px]" type="submit" value="Enviar">Save</button>
        </form>
    </main>
  );
};

export default RegistroPage;
