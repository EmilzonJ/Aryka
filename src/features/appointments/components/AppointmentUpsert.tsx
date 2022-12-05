import {Grid} from "@mui/material";
import {DateTimePicker, Input, InputType, MultipleSelect} from "@/components";
import {useController, useFormContext} from "react-hook-form";
import {useAuth, useFormDialogContext} from "@/context";
import {useEffect, useState} from "react";
import {getAllServices} from "@/features/services/services";
import {Service} from "@/features/services/models";

export const AppointmentUpsert = () => {
  const {user} = useAuth()

  const form = useFormContext();
  const {isCreating, isEditing, open} = useFormDialogContext()
  const {register, formState} = form;

  const [services, setServices] = useState<Service[]>([]);

  const initialSelectedServices = (form.getValues('services') as Service[])?.map((service) => service.name);
  const [selectedServices, setSelectedServices] = useState<string[]>(initialSelectedServices);

  const {field: {onChange}} = useController({name: 'services', control: form.control})
  const getIdsFromSelectedServices = (names: string[]) => {
    const items = services.filter((service) => {
      return names.find((name) => name === service.name);
    });

    setSelectedServices(items.map((service) => service.name));
    onChange(items.map((service) => service.id));
  }

  useEffect(() => {
    if (!open) return;
    const unsubscribe = getAllServices(data => setServices(data));
    return () => unsubscribe();
  }, [open]);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      width={600}
      columnSpacing={2}
      rowSpacing={2}
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
      <Grid item xs={10}>
        <MultipleSelect
          label='Servicios'
          data={services}
          onChange={getIdsFromSelectedServices}
          defaultValues={selectedServices}
        />
      </Grid>
    </Grid>
  );
};
