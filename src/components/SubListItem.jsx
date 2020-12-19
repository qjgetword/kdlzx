import React, { Component } from "react";
import { Flex } from "antd-mobile";
import Img from "./Img";

export default class SubListItem extends Component {
  render() {
    return (
      <div className="sub-list-item">
        <Flex>
          <Flex.Item className="sub-list-item-left">
            <Img src={this.props.img} height={80}></Img>
          </Flex.Item>
          <Flex.Item>
            <h3>{this.props.title}</h3>
            <p>{this.props.des}</p>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}
