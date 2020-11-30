import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        width: 330,
    },
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  form: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonSubmit: {
    marginBottom: 10,
    width: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    display:'flex',
    margin: 'auto',
  },
  clear: {
    alignSelf: 'right',
    display:'flex',
    marginLeft: 'auto',
  },
  header: {
    alignSelf: 'center',
    justifyContent: 'center',
    display:'flex',
  },
  plus: {
    fontSize:'25px',
    backgroundColor:'gray',
    borderRight:'1px solid black',
  },  
  stats: {
    backgroundColor:'gray',
  },
  text: {
    fontFamily:'Roboto',
    margin:'auto',
    paddingLeft:'5px',
    fontSize:'20px',
  },
  bottom: {
    flexDirection: 'row',
    margin:'auto',
    display:'flex',
  },

}));