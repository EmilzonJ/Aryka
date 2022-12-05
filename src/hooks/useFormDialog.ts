import {FieldValues, Resolver, useForm} from "react-hook-form";
import {useState} from "react";
import {SnackbarUtilities} from "@/utilities";

interface UseDialogProps<C, U> {
  mapper?: (values: FieldValues) => any;
  resolver?: Resolver<FieldValues, any>;
  onCreateAction?: (data: unknown) => Promise<void>;
  onUpdateAction?: (data: unknown) => Promise<void>;
  defaultValues?: Record<string, any>
}

export function useFormDialog<TCreate = FieldValues, TUpdate = FieldValues>(
  {
    mapper,
    resolver,
    onUpdateAction,
    onCreateAction,
    defaultValues
  }: UseDialogProps<TCreate, TUpdate> = {}) {

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);


  const form = useForm<FieldValues>({
    resolver,
    mode: 'onChange',
    defaultValues
  })


  const openDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = (values: FieldValues) => {
    if (mapper) {
      form.reset(mapper(values));
    } else {
      form.reset(values);
    }

    setEditing(true);
    openDialog();
  }

  const handleCreate = () => {
    form.reset({});
    openDialog();
    setEditing(false);
  }

  const handleSubmit = async (data: FieldValues) => {
    if (editing) {
      try {

        await onUpdateAction?.(data);
        handleClose();

      } catch (e) {
        SnackbarUtilities.error((e as Error).message)
      }
    } else {
      try {
        await onCreateAction?.(data);
        handleClose();
      } catch (e) {
        SnackbarUtilities.error((e as Error).message)
      }
    }
  }

  const onSubmit = () => form.handleSubmit(handleSubmit)();

  return {
    open,
    handleClose,
    handleEdit,
    handleCreate,
    form,
    onSubmit,
    isEditing: editing,
    isCreating: !editing
  }
}
