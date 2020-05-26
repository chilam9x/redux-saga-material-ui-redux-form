import { createMuiTheme } from '@material-ui/core/styles';
const theme=createMuiTheme({
    color:{
        primary:'#D32F2F',
        secondary:'#00BCD4',
        error:'#FFEB3B'
    },
    typography:{
        fontFamily:'Roboto'
    },
    shape:{
        borderRadius:4,
        background:"#FFFFFF",
        textColor:"#212121",
        borderColor:"#ccc"
    }
});

export default theme;