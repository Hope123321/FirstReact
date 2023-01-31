import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

export default function Password(props: passwordProps) {
    //顯示密碼Flag
    const [showPassword, setShowPassword] = useState(false);
    //眼睛點選事件
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    //取消預設點選事件
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <TextField
            error={props.ErrorMsg !== ''}
            margin="normal"
            required
            fullWidth
            name={props.Name}//"password"
            label={props.Label}//"Password"
            id={props.ID}//"password"
            autoComplete="current-password"
            helperText={props.ErrorMsg !== '' ? props.ErrorMsg : ""}

            InputProps={{
                type: showPassword ? 'text' : 'password',
                endAdornment:
                    <InputAdornment position="end" >
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
            }
            }
        />
    );
}

interface passwordProps {
    ID:string
    Name: string
    Label:string
    ErrorMsg?: string;
}
