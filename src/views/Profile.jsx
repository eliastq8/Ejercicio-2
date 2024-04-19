import { Box, Button, Card, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import app from '../../firebase-config';
import { useNavigate } from 'react-router-dom';
import { signOut, getAuth, onAuthStateChanged } from 'firebase/auth';

function Profile() {
    const auth = getAuth(app);
    const navigate = useNavigate();
    const handleSignOut = () =>{
        signOut(auth)
        .then(() => {
            return navigate("/login", {replace: true});
        })
        .catch((error) =>{
            alert(
                `Se perdio la conexión, intentalos más tarde. \n Error: ${error}`
            );
        });
    };
    const [userAuth, setUserAuth] = useState();
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if (user){
                setUserAuth(user.email);
                console.log(user);
            }else{
                setUserAuth(null);
            }
        });
    });
    return (
        <>
     <Box px={60} backgroundSize={"cover"}
            backgroundPosition={"center"}
            display={"flex"}
            w={"100%"}
            h={"700"}
            justifyContent={"center"}
            alignItems={"center"}>
                <Card>
      <Heading>Hola: {userAuth}</Heading>
      <Button onClick={handleSignOut}>Cerrar sesión </Button>
      </Card>
     </Box>
    </>
    )
}

export default Profile