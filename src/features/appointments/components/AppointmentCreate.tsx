import {Grid} from "@mui/material";
import {DateTimePicker, Input, InputType} from "@/components";
import {useFormContext} from "react-hook-form";
import {AppointmentCreateModel} from "@/features/appointments/models";
import {useAuth} from "@/context";

export const AppointmentCreate = () => {
  const {user} = useAuth()

  const form = useFormContext();
  // const  {isCreating,isEditing} = useFormDialogContext()
  const {register, formState} = form;

  const submitForm = (data: AppointmentCreateModel) => {
    console.log(data)
    data.userId = user?.uid as string;
    // await createAppointment(data);
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      width={600}
      columnSpacing={2}

    >
      <Grid item xs={5}>
        <Input
          required
          name="customer"
          type={InputType.TEXT}
          register={register}
          label="Nombre del cliente"
          errors={formState.errors}
        />
      </Grid>
      <Grid item xs={5}>
        <Input
          required
          name="customerPhone"
          type={InputType.TEXT}
          register={register}
          label="Teléfono del cliente"
          errors={formState.errors}
        />
      </Grid>
      <Grid item xs={5}>
        <DateTimePicker
          name="startDate"
          label="Fecha de inicio"
        />
      </Grid>
      <Grid item xs={5}>
        <DateTimePicker
          name="endDate"
          label="Fecha de fin"
        />
      </Grid>
      <Grid item xs={10}>
        <Input
          name="description"
          type={InputType.TEXT}
          register={register}
          label="Descripción"
          errors={formState.errors}
        />
      </Grid>
    </Grid>
  );
};
