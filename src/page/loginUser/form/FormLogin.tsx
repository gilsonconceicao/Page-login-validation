// ui
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// validation
import {useForm, FieldValues, useFormState} from 'react-hook-form'; 
import {yupResolver} from '@hookform/resolvers/yup'; 
import { schemaValidation, defaultValue } from './Schema/validation';
// input
import TextFieldForm from '../../../components/textField/TextField';

const storagePeople = JSON.parse(localStorage.getItem('@data-user') || '{}');

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '10px', 
      marginTop: '10px'
    },
  }),
);

const FormLogin = () => {
  const classe = useStyles(); 

  const {control, handleSubmit} = useForm({
    resolver: yupResolver(schemaValidation), 
    defaultValues: defaultValue
  })  

  const { errors } = useFormState({ control });

  const onSubmit = (data: FieldValues) => {
    if (storagePeople.email === data.email && storagePeople.password === data.password) {
      window.location.href = '/';

      localStorage.setItem('@userCamein',JSON.stringify({
        email: data.email, 
        password: data.password
      }))

    } else {
      alert('Usuário inválido.')
    }
  }; 

  const onErrors = (data: FieldValues) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit, onErrors)}>
      <TextFieldForm
        name='email'
        type='email'
        control={control}
        label='Email'
        placeholder='Digite o seu e-mail'
        errors={errors.email}
      />  

    <TextFieldForm
        name='password'
        type='password'
        control={control}
        label='Senha'
        placeholder='Digite a sua senha '
        errors={errors.password}
    />  

    <Button className={classe.root} type='submit' variant="contained" color="primary">
      Entrar
    </Button>
    </form>
  )
}

export default FormLogin;