import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card1: {
    height: 0,
    paddingTop: 70,
    backgroundColor: 'dimgray',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    position: 'relative',
    backgroundColor: 'white',
    border:'1px solid black',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
    
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5px',
    flexDirection: 'column',
    borderRadius: '10px',
    backgroundColor: 'darkgray',
    fontFamily:'Roboto',
  },
  details2: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTop: '1px solid gray',
    
  },
  info: {
    
    display:'flex',
    flexDirection: 'column',
    margin:'auto',
    paddingLeft:'5px',
    paddingRight:'3px',
    marginBottom:'20px',
  },
  quality: {
    justifyContent:'right',
    alignItems:'right',
    margin:'10px 10px 10px 0',
    fontSize: '20px',
    fontFamily:'Roboto',
  },  
  time: {
    justifyContent:'left',
    alignItems:'left',
    margin:'10px 0 10px 10px',
    fontSize: '20px',
    fontFamily:'Roboto',
  },
  diary: {
    display:'flex',
    margin:'auto',
    justifyContent:'center',
    textDecoration:'underline',
    fontSize:'19px',
  },

});