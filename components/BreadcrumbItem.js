import Link from "next/link";
import { Breadcrumb } from "antd";

function BreadcrumbItem({ breadcrumb }) {
  return (
    <>
      {/* <Breadcrumb.Item>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link href={breadcrumb.href}>
          <a>{breadcrumb.name}</a>
        </Link>
      </Breadcrumb.Item> */}
    </>
  );
}

export default BreadcrumbItem;
