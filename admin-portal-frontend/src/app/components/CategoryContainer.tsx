import { Category } from "./categoryRoutes";
import TrashIcon from "../icons/trash.png";
import EditIcon from "../icons/edit.png";

type CategoryItemProps = {
  id: string;
  title: string;
  visbility?: boolean;
  pages: number;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ id, title, pages }) => {
  return (
    <tr key={id} className="border-b">
      <td className="w-1/4 text-center py-3">{title}</td>
      <td className="w-1/4 text-center py-3">
        {/* Added just to check styling */}
        <select className="p-1 bg-[#E5EFF5] rounded-md" defaultValue="public">
          <option value="public" >Public</option>
          <option value="hidden">Hidden</option>
        </select>
      </td>
      <td className="w-1/4 text-center py-3">{pages}</td>
      <td className="w-1/4 text-center py-3">
        <button className="mr-3 bg-[#E5EFF5] p-2 rounded-full border border-black">
          <img src={EditIcon.src} alt="Edit" className="w-4 h-4" />
        </button>
        <button className="bg-[#E5EFF5] p-2 rounded-full border border-black">
          <img src={TrashIcon.src} alt="Delete" className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
};

export const CategoryContainer: React.FC<{ items: Category[]; type: string }> = ({
  items: categories,
  type,
}) => {
  return (
    <table className="w-full">
      {/* table heading */}
      <tbody>
        <tr className="border-b">
          <th className="w-1/4 text-center py-3">Category Name</th>
          <th className="w-1/4 text-center py-3">Visbility</th>
          <th className="w-1/4 text-center py-3">Pages</th>
          <th className="w-1/4 text-center py-3">Actions</th>
        </tr>

        {categories
          // gets only either emergency or general principle
          .filter((category) => category.type === type)
          .map((category: Category) => {
            return (
              <CategoryItem
                id={category._id}
                title={category.title}
                pages={category.items.length}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default CategoryContainer;
