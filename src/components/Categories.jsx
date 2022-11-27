import { categories } from "../utils/data"
import CategoryItem from "./CategoryItem"

const Categories = () => {
  return (
    <div className="categoires w-full flex p-5 justify-between  ms:flex-col ms:p-0">
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