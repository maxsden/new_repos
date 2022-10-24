import { textAlign } from "@mui/system";
import { Children } from "react";

export default function Main({children}) {
    return (
      <div style={{
        backgroundColor: '#fdd5b1',
        height: 1000,
        textAlign: "center",
        fontSize: 100,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
      }}>{children}</div>
    );}  