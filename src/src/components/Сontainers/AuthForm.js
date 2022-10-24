import { TextField } from "@mui/material";
import Button from '@mui/material/Button';

export default function AuthForm() {
    return <div style={{
        backgroundColor: "#FFFFFF",
        padding: 40,
        width: 200,
    }}>
        <TextField id="outlined-basic" label="login" variant="outlined" />
        <TextField id="filled-basic" label="password" variant="filled" type="password" />
        <Button variant="contained" color="inherit">Ну попробуй</Button>
    </div>


}