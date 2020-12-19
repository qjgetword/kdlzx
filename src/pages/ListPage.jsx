import React, { Component } from "react";

import "../assets/styles/listPage.less";

import Header from "../components/Header";
import MyListView from "../components/MyListView";

export default class ListPage extends Component {
  render() {
    return (
      <div className="list-page">
        {/* 头部组件 */}
        <Header></Header>

        {/* MyListView */}
        <div className="sub-list">
          <div className="sub-list-header">相关资讯</div>
          <MyListView></MyListView>
        </div>
      </div>
    );
  }
}
