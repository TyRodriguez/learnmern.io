import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IframeResizer from 'iframe-resizer-react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="To Do" {...a11yProps(0)} />
          <Tab label="Blog" {...a11yProps(1)} />
          <Tab label="Node Express" {...a11yProps(2)} />
          <Tab label="Read Me" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <IframeResizer
        log
        src="https://stackblitz.com/edit/mern-todo"
        style={{
            width: '95vw',
            height: '80vh',
            position: 'relative',
            overflow: 'hidden'}}
            />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <IframeResizer
        log
        src="https://stackblitz.com/edit/mern-blog-example?file=data%2Fmodels%2FArticles.js"
        style={{
            width: '95vw',
            height: '80vh',
            position: 'relative',
            overflow: 'hidden'}}
            />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <IframeResizer
        log
        src="https://stackblitz.com/edit/node-express-ejs-example"
        style={{
            width: '95vw',
            height: '80vh',
            position: 'relative',
            overflow: 'hidden'}}
            />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <IframeResizer
        log
        src="https://stackblitz.com/edit/react-blank-example?file=index.js"
        style={{
            width: '95vw',
            height: '80vh',
            position: 'relative',
            overflow: 'hidden'}}
            />
      </TabPanel>
    </div>
  );
}