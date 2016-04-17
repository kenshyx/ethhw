import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  container: {
    padding: '24px'
  }
};

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'transact',
      open: false
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value
    });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <Tabs
      >
        <Tab label="Transact" value="transact"
             icon={<FontIcon className="material-icons">account_balance_wallet</FontIcon>}>
          <div style={styles.container}>
            <TextField
              hintText="0x0"
              floatingLabelText="Send ether to"
            />
            <br />
            <RaisedButton label="Cancel"/> <RaisedButton label="Submit" onTouchTap={this.handleOpen}
                                                         primary/>
            <Dialog
              title="Unlock account"
              actions={actions}
              modal={true}
              open={this.state.open}
            >
              <TextField
                hintText="Password"
                type="password"
              />
            </Dialog>
          </div>
        </Tab>
        <Tab label="History" value="history"
             icon={<FontIcon className="material-icons">history</FontIcon>}>
          <div>
            <List>
              <ListItem primaryText="Sent 12 eth" leftIcon={<FontIcon className="material-icons">arrow_back</FontIcon>}/>
              <ListItem primaryText="Received 10 eth" leftIcon={<FontIcon className="material-icons">arrow_forward</FontIcon>}/>
            </List>
          </div>
        </Tab>

        <Tab label="Settings" value="settings"
             icon={<FontIcon className="material-icons">settings</FontIcon>}>
          <div style={styles.container}>
             <TextField hintText="First name" underlineShow={false} />
    <Divider />
    <TextField hintText="Middle name" underlineShow={false} />
    <Divider />
    <TextField hintText="Last name" underlineShow={false} />
    <Divider />
    <TextField hintText="Email address" underlineShow={false} />
    <Divider />
          </div>
        </Tab>
      </Tabs>

    );
  }
}