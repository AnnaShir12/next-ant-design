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
import SiderLayout from "./SiderLayout";
// import HeaderLayout from "./HeaderLayout";
const { Header, Sider, Content } = Layout;

function AdminLayout({ children }) {
  const [collapsedState, setCollapsedState] = useState(false);

  return (
    <>
      <Layout>
        <SiderLayout trigger={null} collapsible collapsed={collapsedState} />
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

export default AdminLayout;
