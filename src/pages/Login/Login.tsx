import {useState} from "react";

import {Navigate} from 'react-router-dom'

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {Box, Button, Grid, Typography} from "@mui/material";
import {LoginOutlined} from "@mui/icons-material";

import {LoginProps} from "@/pages/Login";
import {LoginSchema} from "@/pages/Login";

import {SnackbarUtilities} from '@/utilities'

import {Input, InputType} from "@/components";

export const Login = () => {
  const submitForm = (data: LoginProps) => {
    setIsLogged(true);
    SnackbarUtilities.success('Bienvenido', {vertical: 'bottom', horizontal: 'right'});
  };

  const [isLogged, setIsLogged] = useState(false);

  const {register, handleSubmit, formState} = useForm<LoginProps>({
    resolver: yupResolver(LoginSchema)
  })

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{height: '100vh'}}
      >
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="max-content"
          alignItems="center"
          justifyContent="center"
          padding={10}
          borderRadius={10}
          boxShadow={'5px 5px 10px #ccc'}
          sx={{
            ":hover": {
              boxShadow: '10px 10px 20px #ccc'
            }
          }}
        >
          <Typography
            variant="h2"
            padding={2}
            textAlign="center"
            maxHeight={100}
            sx={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: '2rem',
            }}
          >
            Iniciar Sesión
          </Typography>

          <Input
            name="email"
            type={InputType.TEXT}
            register={register}
            label="email"
            errors={formState.errors}
          />

          <Input
            name="password"
            type={InputType.PASSWORD}
            register={register}
            label="password"
            errors={formState.errors}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: 3,
              marginBottom: 3,
              borderRadius: 3
            }}
            endIcon={<LoginOutlined/>}
          >
            Login
          </Button>
        </Box>
      </Grid>

      { isLogged && <Navigate to="/" replace={true}/> }
    </form>
  )
}
