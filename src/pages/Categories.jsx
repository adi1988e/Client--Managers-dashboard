import CategoriesTable from "../features/Categories/CategoriesTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCategory from "../features/Categories/AddCategory";

function Categories() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Categories</Heading>
      </Row>

      <Row>
        <CategoriesTable />
        <AddCategory />
      </Row>
    </>
  );
}

export default Categories;
