import {deleteService, getAllServices} from '@/features/services/services';
import {useEffect, useState} from "react";
import {Service} from '@/features/services/models';
import {DataTable, FormDialog} from "@/components";
import {serviceColumns} from "@/features/services/components";
import {deleteWithConfirm} from "@/utilities";

export const ServicesList = () => {
  const [services, setServices] = useState<Service[]>([]);

  const onDelete = async (id: string) => {
    await deleteWithConfirm({
      title: '¿Estás seguro de eliminar este servicio?',
      action: async () => await deleteService(id),
    })
  }

  const onEdit = (id: string) => {
    console.log(id)
  }

  useEffect(() => {
      const unsubscribe = getAllServices(
        (data) => setServices(data))
      return () => unsubscribe();
    },
    []
  );

  return (
    <>
      <FormDialog/>
      <DataTable columns={serviceColumns} rows={services} onEdit={onEdit} onDelete={onDelete}/>
    </>
  )
}
