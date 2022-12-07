import {
  createService,
  deleteService,
  getAllServices,
  getServiceById,
  updateService
} from '@/features/services/services';
import {useEffect, useState} from "react";
import {Service, ServiceUpsertModel} from '@/features/services/models';
import {DataTable, FormDialog} from "@/components";
import {serviceColumns} from "@/features/services/components";
import {deleteWithConfirm} from "@/utilities";
import {useFormDialog} from "@/hooks";
import {ServiceUpsert} from "@/features/services/components/ServiceUpsert";

export const ServicesList = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedRowId, setSelectedRowId] = useState('');

  const onDelete = async (id: string) => {
    await deleteWithConfirm({
      title: '¿Estás seguro de eliminar este servicio?',
      action: async () => await deleteService(id),
    })
  }
  

  useEffect(() => {
      const unsubscribe = getAllServices(
        (data) => setServices(data))
      return () => unsubscribe();
    },
    []
  );
  
  const formDialog= useFormDialog({
      onCreateAction: async (data: unknown) => {
          console.log(data);
          await createService(data as ServiceUpsertModel);
      },
    onUpdateAction: async (data: unknown) =>
    {
      console.log(data);
      await updateService(selectedRowId,data as ServiceUpsertModel);
    }  })

  const onEdit = async (id: string) => {
    setSelectedRowId(id);
    const service = await getServiceById(id);
    formDialog.handleEdit(service);
  }
  
  return (
    <>
      <FormDialog title="Servicios" {...formDialog} >
          <ServiceUpsert/>
      </FormDialog>
      <DataTable columns={serviceColumns} rows={services} onEdit={onEdit} onDelete={onDelete}/>
    </>
  )
}
