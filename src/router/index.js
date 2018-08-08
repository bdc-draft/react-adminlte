import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import Header from '../components/common/Header';
import SideBar from '../components/common/SideBar';
import DashboardV1 from '../components/dashboard-v1';
import DashboardV2 from '../components/dashboard-v2';
import Widgets from '../components/widgets';
import ContentHeader from '../components/common/ContentHeader'

class MyRouter extends Component {

    render() {
        return (
            <Fragment>
                <Fragment>
                    <Header />
                </Fragment>
                <Fragment>
                    <SideBar />
                </Fragment>
                  <div className="content-wrapper">
                    <ContentHeader />
                    <div className="content">
                      <div className="row">
                        <Route path="/" exact
                            render={() => <DashboardV1 displayName="dashboard-v1" />}
                        />
                        <Route path="/dashboard-v1" exact
                            render={() => <DashboardV1 displayName="dashboard-v1" />}
                        />
                        <Route path="/dashboard-v2" exact
                            render={() => <DashboardV2 displayName="dashboard-v2" />}
                        />
                        <Route path="/widgets"
                            render={() => <Widgets displayName="widgets" />}
                        />
                      </div>
                    </div>
                  </div>
            </Fragment>
        )
    }
}

export default MyRouter