import * as types from './types';
import {toast, Type, TypeOptions} from "react-toastify";
import uniqueId from './utils/uniqueId';
import {
  ToastType, ToastAction, DismissActionPayload, Toast, ToastOptions, UpdateActionOptions, UpdateActionPayload,
} from './definitions';

export const toastActionCreator = (type: Type) => {
  return (message: any, options: ToastOptions = {}): ToastAction<Toast> => ({
    type: types.TOAST_MESSAGE,
    payload: {
      id: options.id || uniqueId('toast'),
      ...options,
      message,
      type: type as unknown as TypeOptions,
    }
  });
};

export const dismiss = (id?: string): ToastAction<DismissActionPayload> => ({
  type: types.TOAST_DISMISS,
  payload: {id}
});

export const update = (id: string, options: UpdateActionOptions): ToastAction<UpdateActionPayload> => ({
  type: types.TOAST_UPDATE,
  payload: {id, options}
});

export const error = toastActionCreator(toast.TYPE.ERROR as unknown as Type);
export const warning = toastActionCreator(toast.TYPE.WARNING as unknown as Type);
export const info = toastActionCreator(toast.TYPE.INFO as unknown as Type);
export const message = toastActionCreator(toast.TYPE.DEFAULT as unknown as Type);
export const success = toastActionCreator(toast.TYPE.SUCCESS as unknown as Type);
