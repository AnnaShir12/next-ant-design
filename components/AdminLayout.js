import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from "@ant-design/icons";
import React, { useState } from "react";
import Link from "next/link";
const { Header, Sider, Content } = Layout;

function SliderDemo({ children }) {
  const [collapsedState, setCollapsedState] = useState(false);

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsedState}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <UserOutlined />
              <Link href="'../pages/user/userPage1'">
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
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsedState ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => {
                  setCollapsedState(!collapsedState);
                }
              }
            )}
          </Header>
          <Breadcrumb style={{ margin: "16px 0 0 16px" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default SliderDemo;
