import { Category } from "./categoryRoutes";
import TrashIcon from "../icons/trash.png";
import EditIcon from "../icons/edit.png";

type PageItemProps = {
  id: string;
  visibility?: boolean;
  category: Category;
};

const PageItem: React.FC<PageItemProps> = ({ id, category }) => {
  return category.items.map((page, i) => {
    return (
      <tr key={id + i} className="border-b">
        <td className="w-1/4 text-center py-3">{page}</td>
        <td className="w-1/4 text-center py-3">
          {/* Added just to check styling */}
          <select className="p-1 bg-blue-100 rounded-md">
            <option value="public">Public</option>
            <option value="hidden">Hidden</option>
          </select>
        </td>
        <td className="w-1/4 text-center py-3">{category.title}</td>
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
  });
};

export const PageContainer: React.FC<{ items: Category[] }> = ({ items: categories }) => {
  return (
    <table className="w-full">
      <tbody>
        <tr className="border-b">
          <th className="w-1/4 text-center py-3">Page Name</th>
          <th className="w-1/4 text-center py-3">Visbility</th>
          <th className="w-1/4 text-center py-3">Category</th>
          <th className="w-1/4 text-center py-3">Actions</th>
        </tr>

        {
          // go through each category's items
          categories.map((category: Category, i) => {
            return <PageItem key={i} id={category._id} category={category} />;
          })
        }
      </tbody>
    </table>
  );
};

export default PageContainer;
