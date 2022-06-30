import Category from "../category/Category.js";

import "./styles.scss";

const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Category key={category.id} {...category} />
      ))}
    </div>
  );
};

export default Categories;
