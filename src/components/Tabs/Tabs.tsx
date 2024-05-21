import { Tabs as TabsComponent } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tab } from '@mui/base/Tab';
import Styles from './TabsUI';
import './Tabs.scss';

const Tabs = () => {
  return (
    <div className='tabs-container'>
      <TabsComponent defaultValue={0}>
        <TabsList className="CustomTabsListIntroduction">
          <Tab className="CustomTabIntroduction" value={0}>
            All
          </Tab>
          <Tab className="CustomTabIntroduction" value={1}>
            Movies
          </Tab>
          <Tab className="CustomTabIntroduction" value={2}>
            TV Shows
          </Tab>
        </TabsList>
        <TabPanel className="CustomTabPanelIntroduction" value={0}>
          All Content
        </TabPanel>
        <TabPanel className="CustomTabPanelIntroduction" value={1}>
          Movies
        </TabPanel>
        <TabPanel className="CustomTabPanelIntroduction" value={2}>
          TV Shows
        </TabPanel>
      </TabsComponent>
      <Styles />
    </div>
  );
}

export default Tabs;


