import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import SiteMapContext from '../../SiteMapContext';
import HailRoundedIcon from '@mui/icons-material/HailRounded';

const ContentBrowser = ({
  collapsed
}) => {
  const sitemap = useContext(SiteMapContext);
  if (!sitemap)
    return;

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
      <Sidebar collapsed={collapsed} >
        <Menu>
          <MenuItem component={<Link to='/home' className="link" />} icon={<HailRoundedIcon />} >
            Introduction
          </MenuItem>
          {/* <SubMenu label="Introduction" icon={<HailRoundedIcon/>}></SubMenu> */}

          {sitemap.chapters.map((chapterObj) => {
            let DynamicIcon = require('@mui/icons-material/' + chapterObj.icon + '.js').default;
            return (
              <SubMenu label={chapterObj.chapterTitle} icon={<DynamicIcon />}>

                {chapterObj.sections.map((sectionObj) => {
                  return (
                    <MenuItem component={<Link to={sectionObj.Link} className="link" />} >
                      {sectionObj.SectionTitle}
                    </MenuItem>
                  );

                })}
              </SubMenu>
            );
          })}
        </Menu>
      </Sidebar>
    </div>
  );

};

export default ContentBrowser;
