// import BreadcrumbItem from "./BreadcrumbItem";
import Link from "next/link";
import { Breadcrumb } from "antd";
function BreadcrumbsList(props) {
  return (
    <>
      <Breadcrumb.Item>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        {props.breadcrumbs.map(breadcrumb => {
          return <span>{breadcrumb.name}</span>;
        })}
      </Breadcrumb.Item>
    </>
  );
}

export default BreadcrumbsList;
