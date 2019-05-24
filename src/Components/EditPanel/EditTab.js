import React, {Component} from 'react';

import classes from './EditTab.module.css';

class EditTab extends Component {
  render() {
    const { activeTab, onUpdateTab, tabs } = this.props;
    return (
        <div className={classes.EditTab}>
          <div className={classes.SwitchTab}>
            {tabs.map(tab => {
              return (
                  <TabLink
                      key={tab.type}
                      active={activeTab === tab.type}
                      onClick={() => { onUpdateTab(tab.type); }}>
                    {tab.text}
                  </TabLink>
              );
            })}
          </div>
          <div className={classes.Content}>
            {tabs.map(tab => {
              return (
                  <TabPanel
                      active={activeTab === tab.type}
                      key={tab.type}>
                    {tab.panel}
                  </TabPanel>
              );
            })}
          </div>
        </div>

    )
  }
}

export default EditTab;

// sub component

const TabLink = ({ active, children, onClick }) => {
//   let tabClass = classNames('tab-item', {active: active});
  return (
        <button onClick={e => {
          e.preventDefault();
          onClick();
        }}>
          {children}
        </button>
  )
};

const TabPanel = ({ active, children }) => {
  if (!active) {
    return (<div></div>);
  } else {
    return (
        <div>
          {children}
        </div>
    );
  }
};