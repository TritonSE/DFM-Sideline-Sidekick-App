import { Category } from "./categoryRoutes";

type CategoryItemProps = {
  id: string;
  title: string;
  visbility?: boolean;
  pages: number;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ id, title, pages }) => {
  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{pages}</td>
    </tr>
  );
};

export const CategoryContainer: React.FC<{ items: Category[]; type: string }> = ({ items: categories, type }) => {
  return (
    <table>
      {/* table heading */}
      <tbody>
        <tr>
          <th>Category Name</th>
          <th>Visbility</th>
          <th>Pages</th>
          <th>Actions</th>
        </tr>
        
        {categories
          // gets only either emergency or general principle
          .filter((category) => category.type === type)
          .map((category: Category) => {
            return (
              <CategoryItem id={category._id} title={category.title} pages={category.items.length} />
            );
          })}
      </tbody>
    </table>
  );
};

export default CategoryContainer;
