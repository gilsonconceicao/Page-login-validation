import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Controller } from 'react-hook-form'
import { TypeInputProps } from './type';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: '10px 0 0 0 ',
            width: '100%',
        },
    }),
);

const TextFieldForm = ({
    control,
    errors,
    label,
    name,
    placeholder,
    type, 
    required
}: TypeInputProps) => {
    const classe = useStyles();
    return (
      <>
        <Controller 
          render={({field}) => (
            <>
              <TextField
                {...field} 
                className={classe.root}
                id="outlined-basic"
                variant="outlined"
                placeholder={placeholder}
                label={label}
                type={type}
                required={required}
              />  
            </>
          )}
          control={control}
          name={name}  
        />
        <p className='error_message'>{errors && errors?.message}</p>
      </>  
    )
}

export default TextFieldForm;