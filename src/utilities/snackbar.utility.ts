import {SnackbarOrigin, useSnackbar, VariantType, WithSnackbarProps} from 'notistack';
import React from 'react';

let useSnackbarRef: WithSnackbarProps;
export const SnackbarUtilsConfigurator: React.FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

const defaultSnackbarOrigin: SnackbarOrigin = {
  vertical: 'top',
  horizontal: 'right'
}

export const SnackbarUtilities = {
  success(msg: string, anchorOrigin: SnackbarOrigin = defaultSnackbarOrigin) {
    this.toast(msg, 'success', anchorOrigin);
  },
  warning(msg: string, anchorOrigin: SnackbarOrigin = defaultSnackbarOrigin) {
    this.toast(msg, 'warning', anchorOrigin);
  },
  info(msg: string, anchorOrigin: SnackbarOrigin = defaultSnackbarOrigin) {
    this.toast(msg, 'info', anchorOrigin);
  },
  error(msg: string, anchorOrigin: SnackbarOrigin = defaultSnackbarOrigin) {
    this.toast(msg, 'error', anchorOrigin);
  },

  toast(msg: string, variant: VariantType = 'default', anchorOrigin: SnackbarOrigin) {
    useSnackbarRef.enqueueSnackbar(msg, {
      variant,
      autoHideDuration: 2000,
      onClick: () => {
        useSnackbarRef.closeSnackbar();
      },
      preventDuplicate: true,
      anchorOrigin: anchorOrigin
    });
  }
};
