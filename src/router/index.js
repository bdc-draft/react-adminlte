import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import Header from '../components/common/Header';
import LeftMenu from '../components/common/LeftMenu';
import SideBar from '../components/common/SideBar';
import DashboardV1 from '../components/DashboardV1';
import DashboardV2 from '../components/DashboardV2';
import Widgets from '../components/Widgets';

class MyRouter extends Component {

    render() {
        return (
            <div>
                <div>
                  <Header/>
                </div>
                <div>
                  <SideBar/>
                </div>
                <div> 
                    <Route path="/" exact
                        render={() => <DashboardV1 displayName="dashboard-v1"/>}
                    />
                    <Route path="/dashboard-v1" exact
                        render={() => <DashboardV1 displayName="dashboard-v1"/>}
                    />
                    <Route path="/dashboard-v2" exact
                        render={() => <DashboardV2 displayName="dashboard-v2"/>}
                    />
                    <Route path="/widgets" 
                        render={() => <Widgets displayName="widgets"/>} 
                    />
                </div>
            </div>
        )
    }
}

export default MyRouter