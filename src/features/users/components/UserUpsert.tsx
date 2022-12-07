import {Grid} from "@mui/material";
import {useForm, useFormContext} from "react-hook-form";
import {useFormDialogContext} from "@/context";
import {Input, InputType} from "@/components";

export const UserUpsert = () => {
  const form = useFormContext();
  const {isCreating, open} = useFormDialogContext();
  const {register, formState} = form;

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      width={600}
      columnSpacing={2}
      rowSpacing={2}
    >
      <Grid
        item
        xs={7}
      >

        <Input
          required
          name="name"
          type={InputType.TEXT}
          register={register}
          label="Nombre y Apellido"
          errors={formState.errors}

        />

      </Grid>
      <Grid
        item
        xs={7}
      >
        <Input
          required
          name="email"
          type={InputType.TEXT}
          register={register}
          label="E-mail"
          errors={formState.errors}
        />
      </Grid>
      <Grid
        item
        xs={7}
      >
        <Input
          required
          name="password"
          type={InputType.PASSWORD}
          register={register}
          label="Contraseña"
          errors={formState.errors}
        />
      </Grid>
      <Grid
        item
        xs={7}
      >
        <Input
          required
          name="cel"
          type={InputType.TEXT}
          register={register}
          label="Celular"
          errors={formState.errors}
        />
      </Grid>
      <Grid
        item
        xs={7}
      >
        <Input
          required
          name="Area"
          type={InputType.TEXT}
          register={register}
          label="Area en la que labora"
          errors={formState.errors}
        />
      </Grid>
    </Grid>
  )
}