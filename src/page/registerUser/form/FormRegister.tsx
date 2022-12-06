import { useEffect, useState } from 'react';
// ui
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
//validation
import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaValidation } from '../../loginUser/form/Schema/validation';
// component
import TextFieldForm from '../../../components/textField/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '10px',
      marginTop: '10px'
    },
  }),
);

type RegisterTypeProps = {
  username: string;
  email: string;
  password: string | number
}


const FormRegister = () => {
  const classe = useStyles();
  const [isLogged, setIsLogged] = useState<boolean | null>(true); 
  
  //checked data
  useEffect(() => {
    const checkedIsUser = () => {
      if (localStorage.getItem('@data-user') === null) {
        setIsLogged(null)
      }
    }
    checkedIsUser()
  }, [])

  // validation
  const { control, handleSubmit } = useForm<RegisterTypeProps>({
    resolver: yupResolver(schemaValidation)
  })
  const { errors } = useFormState({ control });

  // save form
  const onSubmitData = (data: any) => {
    console.log(data);

    let people = {
      ...data, 
      id: String(Math.random() * 100000)
    };

    localStorage.setItem("@data-user", JSON.stringify(people));

    window.location.href = '/'
  }

  const onErrors = (data: any) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmitData, onErrors)} autoComplete='off'>
     
      <TextFieldForm
        label='Nome de usuário'
        placeholder='Digite um nome de usuário'
        name='username'
        type='text'
        control={control}
        errors={errors.username}
      />

      <TextFieldForm
        label='E-mail'
        placeholder='Digite um e-mail'
        name='email'
        type='email'
        control={control}
        errors={errors.email}
      />

      <TextFieldForm
        label='Senha'
        placeholder='Digite uma senha'
        name='password'
        type='password'
        control={control}
        errors={errors.password}
      />

      <Button className={classe.root} type='submit' variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  )
}

export default FormRegister