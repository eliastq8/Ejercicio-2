import { Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return <>            
    <p>Nombre: VALERIA BAÑUELOS MONTEVERDE, ELIAS LEONARDO RIVERA</p>
    <p>Fecha: 18/04/24</p>
    <p>Materia: Programación Avanzada</p>
    <p>Segundo parcial</p>
    <Button onClick ={() => navigate("/profile")}>Profile</Button>
    </>;

}

export default Home;