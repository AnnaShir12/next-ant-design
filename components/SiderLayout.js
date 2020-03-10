import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";
import React from "react";
import Link from "next/link";
const { Sider } = Layout;

function SiderLayout() {
  return (
    <Sider>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <UserOutlined />
          <Link href="/about">
            <a>nav 1</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <VideoCameraOutlined />
          <span>nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <UploadOutlined />
          <span>nav 3</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SiderLayout;
