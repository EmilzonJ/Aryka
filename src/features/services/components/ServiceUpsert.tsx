import {Input, InputType} from "@/components";
import {Grid} from "@mui/material";
import {useFormContext} from "react-hook-form";
import {useFormDialogContext} from "@/context";

export const ServiceUpsert = () => {
  const form = useFormContext();
  const {register, formState} = form;
  const {isCreating, open} = useFormDialogContext();


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
          label="Nombre"
          errors={formState.errors}
        />
      </Grid>
      <Grid
        item
        xs={7}
      >
        <Input
          required
          name="price"
          type={InputType.NUMBER}
          register={register}
          label="Precio"
          errors={formState.errors}
        />
      </Grid>
      <Grid
        item
        xs={7}
      >
        <Input
          name="description"
          type={InputType.TEXT}
          register={register}
          label="Descripción"
          errors={formState.errors}
        />
      </Grid>
    </Grid>
  )
}