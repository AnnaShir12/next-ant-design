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
import BreadcrumbsList from "./BreadcrumbsList";
const { Header, Sider, Content } = Layout;
// const breadcrumbs = [
//   { href: "/", name: "Home" },
//   { href: "/about", name: "About" }
// ];

function AdminLayout({ breadcrumbs, children }) {
  const [collapsedState, setCollapsedState] = useState(false);
  console.log(breadcrumbs);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsedState}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <UserOutlined />
            <Link href="/about">
              <a>About</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <VideoCameraOutlined />
            <Link href="/contacts">
              <a>Contacts</a>
            </Link>
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
        <Breadcrumb style={{ margin: "20px 0 0 20px" }}>
          <BreadcrumbsList breadcrumbs={breadcrumbs} />
          {/* <Breadcrumb.Item>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/about">
              <a>About</a>
            </Link>
          </Breadcrumb.Item> */}
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
  );
}

export default AdminLayout;
