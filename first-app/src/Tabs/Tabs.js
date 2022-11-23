import React, {Component} from 'react';
import './Tabs.css';
import {Tab, TabList, TabPanel, Tabs} from 'react-web-tabs';
import {render} from "react-dom";

// function MyTabs() {
//
//     // return (
//     //     <div className="Tabs" style={{textAlign: "left"}}>
//     //         <div className="TabsList" style={{display: "flex"}}>
//     //             <div className="tabHead" onClick={() => setIndex(0)}>
//     //                 Tab1
//     //             </div>
//     //             <div className="tabHead" onClick={() => setIndex(1)}>
//     //                 Tab2
//     //             </div>
//     //         </div>
//     //         <div className="tabContact" hidden={index !== 0}>
//     //             This is First tab content.
//     //         </div>
//     //         <div className="tabContact" hidden={index !== 1}>
//     //             This is Second tab content.
//     //         </div>
//     //     </div>
//     // )
//
//
//     return (
//         <Tabs
//             defaultTab="one"
//             onChange={(tabId) => { console.log(tabId) }}
//         >
//             <TabList>
//                 <Tab tabFor="one">Tab 1</Tab>
//                 <Tab tabFor="two">Tab 2</Tab>
//                 <Tab tabFor="three">Tab 3</Tab>
//             </TabList>
//             <TabPanel tabId="one">
//                 <p>Tab 1 content</p>
//             </TabPanel>
//             <TabPanel tabId="two">
//                 <p>Tab 2 content</p>
//             </TabPanel>
//             <TabPanel tabId="three">
//                 <p>Tab 3 content</p>
//             </TabPanel>
//         </Tabs>
//     );
// }

class App extends Component {
    render() {
        return (
            <Tabs
                defaultTab="one"
                onChange={(tabId) => { console.log(tabId) }}
            >
                <TabList>
                    <Tab tabFor="one">Tab 1</Tab>
                    <Tab tabFor="two">Tab 2</Tab>
                    <Tab tabFor="three">Tab 3</Tab>
                </TabList>
                <TabPanel tabId="one">
                    <p>Tab 1 content</p>
                </TabPanel>
                <TabPanel tabId="two">
                    <p>Tab 2 content</p>
                </TabPanel>
                <TabPanel tabId="three">
                    <p>Tab 3 content</p>
                </TabPanel>
            </Tabs>
        );
    }
}

render(<App/>, document.getElementById('app'))

// export default MyTabs