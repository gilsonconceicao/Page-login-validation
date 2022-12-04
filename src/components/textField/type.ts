import {FieldError} from 'react-hook-form'; 

export interface TypeInputProps {
  label: string, 
  placeholder: string, 
  name: string, 
  type: string, 
  errors?: FieldError, 
  control: any, 
  required?:any
}