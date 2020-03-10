import { Layout } from "antd";
const { Content } = Layout;
import { Layout, Breadcrumb } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import React from "react";
import SiderLayout from "../components/SiderLayout";
const { Header, Content } = Layout;

function AboutPage() {
  return (
    <Layout>
      <SiderLayout />
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
          "jjj"
        </Content>
      </Layout>
    </Layout>
  );
}
export default AboutPage;
