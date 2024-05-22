import { Tabs as TabsComponent } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { Tab } from "@mui/base/Tab";
import Styles from "./TabsUI";
import "./Tabs.scss";
import { useState } from "react";

export type TabsCategoriesProps = "movie" | "tv" | "all";

type TabsPropTypes = {
  handleCategoryChange: (category: TabsCategoriesProps) => void;
};

const Tabs = ({ handleCategoryChange }: TabsPropTypes) => {
  const [category, setCategory] = useState<TabsCategoriesProps>("all");

  const handleChange = (
    event: React.SyntheticEvent<Element, Event> | null,
    newValue: string | number | null
  ) => {
    event?.preventDefault()
    if (typeof newValue === 'string' && (newValue === 'all' || newValue === 'movie' || newValue === 'tv')) {
      const newCategory = newValue as TabsCategoriesProps;
      setCategory(newCategory);
      handleCategoryChange(newCategory);
    }
  };

  return (
    <div className="tabs-container">
      <TabsComponent
        value={category}
        onChange={handleChange}
        defaultValue={"all"}
      >
        <TabsList className="CustomTabsListIntroduction">
          <Tab className="CustomTabIntroduction" value="all">
            All
          </Tab>
          <Tab className="CustomTabIntroduction" value="movie">
            Movies
          </Tab>
          <Tab className="CustomTabIntroduction" value="tv">
            TV Shows
          </Tab>
        </TabsList>
        <h3 className="tabs-sub">
          All <span>(120)</span>
        </h3>
      </TabsComponent>
      <Styles />
    </div>
  );
};

export default Tabs;
