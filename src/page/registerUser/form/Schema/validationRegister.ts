import {string, object} from 'yup';

export const schemaValidation = object().shape({

  username: string().required('Campo nome de usuário: é obrigatório.').typeError('Compo nome de usuário: é obrigatório.').min(6,'No mínimo 6 caracteres ou mais.') ,

  email: string().required('Campo email: é obrigatório.').typeError('Campo email: é obrigatório.').email('O email é inválido.'), 

  password: string().required('Campo senha: é obrigatório.').typeError('Campo senha: é obrigatório.').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  "A senha deve conter 8 caracteres ou mais, letras maiúsculas, letras minúsculas, caracteres especiais e número")
  .min(8, 'A senha precisa ter no mínimo 8 caracteres.')
})

export const defaultValue = {
  email: null, 
  password: null  
}