import AdminLayout from "../components/AdminLayout";
const breadcrumbs = [
  { href: "/", name: "Home" },
  { href: "/contacts", name: "Contacts" }
];
function ContactsPage() {
  return <AdminLayout breadcrumbs={breadcrumbs}>Contacts Page</AdminLayout>;
}
export default ContactsPage;
