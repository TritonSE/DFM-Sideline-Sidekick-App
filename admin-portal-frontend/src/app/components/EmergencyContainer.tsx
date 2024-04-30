import { Category } from "./categoryRoutes";
import TrashIcon from "../icons/trash.png";
import EditIcon from "../icons/edit.png";

type EmergencyItemProps = {
  id: string;
  visibility?: boolean;
  category: Category;
};

const EmergencyItem: React.FC<EmergencyItemProps> = ({ id, category, visibility }) => {
  return category.items.map((page, i) => {
    return (
      <tr key={id + i} className="border-b">
        <td className="w-1/4 text-center py-3"> {page}</td>
        <td className="w-1/4 text-center py-3">{visibility ? "Public" : "Private"} </td>
        <td className="w-1/4 text-center py-3">{category.title}</td>
        <td className="w-1/4 text-center py-3">
          <button className="mr-3 bg-blue-100 p-2 rounded-full border border-black">
            <img src={EditIcon.src} alt="Edit" className="w-4 h-4" />
          </button>
          <button className="bg-blue-100 p-2 rounded-full border border-black">
            <img src={TrashIcon.src} alt="Delete" className="w-4 h-4" />
          </button>
        </td>
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
