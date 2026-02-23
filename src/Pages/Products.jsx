import { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollReveal from "../Components/Scrollreveal"

const Products = () => {

    const [categoryType, setCategoryType] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const [products, setProducts] = useState([]);
    const fileInputRef = useRef(null);

    const [file, setFile] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleAddProduct = () => {
        document.querySelector(".products-add-form").style.display = "flex";
    }

    const handleCancel = () => {
        document.querySelector(".products-add-form").style.display = "none";
    }

    const handleAdd = (e) => {
        e.preventDefault();

        if (!categoryType) {
            toast.error("Please select category type");
            return;
        }

        let finalCategory = "";

        if (categoryType === "new") {
            if (!newCategory.trim()) {
                toast.error("Please enter new category name");
                return;
            }

            finalCategory = newCategory;
        }

        if (categoryType === "existing") {
            if (!selectedCategory) {
                toast.error("Please select existing category");
                return;
            }

            finalCategory = selectedCategory;
        }

        if (!file) {
            toast.error("Please upload product image");
            return;
        }

        if (!name.trim()) {
            toast.error("Please enter product name");
            return;
        }

        if (!price) {
            toast.error("Please enter product price");
            return;
        }

        const product = {
            id: Date.now(),
            productcategory: finalCategory,
            productimage: URL.createObjectURL(file),
            productname: name,
            productprice: price
        };

        setProducts((prev) => [...prev, product]);

        toast.success("Product Added Successfully 🔥");

        setCategoryType("");
        setNewCategory("");
        setSelectedCategory("");
        setFile(null);
        setName("");
        setPrice("");

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }

        document.querySelector(".products-add-form").style.display = "none";
    };


    return (
        <>
            <div className="products-main">
                <h1 className="products-header">Products</h1>
            </div>
            <div className="products-add">
                <button className="products-add-btn-main" onClick={handleAddProduct}>Add Product + </button>
                <form onSubmit={handleAdd}>
                <div className="products-add-form">
                        <select onChange={(e) => setCategoryType(e.target.value)}>
                            <option value="">Select Category Type</option>
                            <option value="new">New Category</option>
                            <option value="existing">Existing Category</option>
                        </select>
                        {categoryType === "new" && (
                            <input
                                type="text"
                                placeholder="Enter Category Name"
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value)}
                            />
                        )}
                        {categoryType === "existing" && (
                            <select onChange={(e) => setSelectedCategory(e.target.value)}>
                                <option value="">Select Category</option>
                                {[...new Set(products.map(p => p.productcategory))].map((cat, index) => (
                                    <option key={index} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        )}
                        <input type="file" ref={fileInputRef}
                            onChange={(e) => setFile(e.target.files[0])} />
                    <input type="text" placeholder="Product Name..." value={name} onChange={e => setName(e.target.value)} />
                    <input type="number" placeholder="Product Price..." value={price} onChange={e => setPrice(e.target.value)} />
                    <button className="products-add-btn" >Add Product</button>
                        <button type="button"
                            className="products-cancel-btn"
                            onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
                <ScrollReveal>
                <div className="products-list">
                    {Object.entries(
                        products.reduce((acc, product) => {
                            if (!acc[product.productcategory]) {
                                acc[product.productcategory] = [];
                            }
                            acc[product.productcategory].push(product);
                            return acc;
                        }, {})
                    ).map(([category, items]) => (
                        <div key={category} className="category-section">
                            <h1 className="category-heading">{category}</h1>
                            <div className="category-products">
                                {items.map((item) => (
                                    <div key={item.id} className="product-card">
                                        <img src={item.productimage} alt={item.productname} />
                                        <h3>{item.productname}</h3>
                                        <p><strong>₹{item.productprice}</strong></p>
                                        <button>Add to cart</button>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                    </div>
                </ScrollReveal>
            </div>
        </>
    )
}

export default Products