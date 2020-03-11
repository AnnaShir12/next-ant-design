import AdminLayout from "../components/AdminLayout";
const breadcrumbs = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" }
];

function AboutPage() {
  return <AdminLayout breadcrumbs={breadcrumbs}>About Page</AdminLayout>;
}
export default AboutPage;
