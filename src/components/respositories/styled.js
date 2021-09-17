import styled from 'styled-components'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
// import 'react-tabs/style/react-tabs.css'

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 10px;
`

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`
WrapperTabList.tabsRole = 'TabList'

export const WrapperTab = styled(Tab)`
 border-radius: 16px;
 border: 1px solid #ccc;
 padding: 12px;
 user-select: none;
 cursor: pointer;
 z-index: 99999;
 background-color: #ffff;
 margin-right: 10px;

 &:focus {
   outline: none;
 }
 &.is-selected {
   box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
 }
`
WrapperTab.tabsRole = 'Tab'

export const WrapperTabPanel = styled(TabPanel)`
  padding: 8px;
  border: 1px solid #ccc;
  display: none;
  margin-top: 5px;

  &.is-selected {
    display: block;
  }
`
WrapperTabPanel.tabsRole = 'TabPanel'

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`