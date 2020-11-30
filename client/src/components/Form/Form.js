import React from 'react';
import PropTypes from 'prop-types';
import { Typography, AppBar, Tab, Tabs, Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import useStyles from './styles';
import AddItem from './AddItem';
import Average from './Average';

const Form = ({currentId, setCurrentId, item}) => {
  const style = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);


  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
    return (
      <div className={style.root}>
        <AppBar position="static" color="default">
          <Tabs value={value} onChange={handleChange} indicatorColor="secondary" textColor="black" variant="fullWidth">
            <Tab label="+" className={style.plus}{...a11yProps(0)} />
            <Tab label="Stats" className={style.stats}{...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value} onChangeIndex={handleChangeIndex}>
          <TabPanel value={value} index={0} dir={theme.direction}>
              <AddItem currentId={currentId} setCurrentId={setCurrentId}/>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Average item={item}/>
          </TabPanel>
        </SwipeableViews>
      </div>
    );
  

};

export default Form;