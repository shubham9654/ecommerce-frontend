import { categories } from "../utils/data"
import CategoryItem from "./CategoryItem"

const Categories = () => {
  return (
    <div className="categoires flex p-5 justify-between">
      {
        categories.map((item, index) => (
          <CategoryItem
            key={`category_${index}`}
            item={item}
          />
        ))
      }
    </div>
  )
}

export default Categories