import './directory.styles.scss'
import Categories from '../categories/categories.component'
import CategoryItem from '../category-item/category-item.component';

const Directory = () => {
    return (
        <div className="directory-container">
            {Categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default Directory;