import { Category } from "./categoryRoutes";

type EmergencyItemProps = {
  id: string;
  visibility?: boolean;
  category: Category;
};

const EmergencyItem: React.FC<EmergencyItemProps> = ({ id, category, visibility }) => {
  return category.items.map((page, i) => {
    return (
      <tr key={id + i}>
        <td>{page}</td>
        <td>{visibility ? "Public" : "Private"} </td> 
        <td>{category.title}</td>
      </tr>
    );
  });
};

export const EmergencyContainer: React.FC<{ items: Category[] }> = ({ items: categories }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Page Name</th>
          <th>Visbility</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>

        {
          // go through each category's items
          categories.map((category: Category, i) => {
            return <EmergencyItem key={i} id={category._id} category={category} />;
          })
        }
      </tbody>
    </table>
  );
};

export default EmergencyContainer;
