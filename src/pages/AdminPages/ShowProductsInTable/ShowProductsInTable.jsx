import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import AdminNavbar from '../../AdminNavbar/AdminNavbar';

const ShowProductsInTable = () => {
    const [products, setProducts] = useState([]);
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        axios.get(`${baseURL}/products/`)
            .then(res => setProducts(res.data))
            .catch(err => console.error(err))
            .catch((error) => console.error("Fetch error:", error));
    }, [baseURL]);

    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <div className='mt-36 overflow-x-auto'>
                <table className="table table-xs ms-2">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Hot Product</th>
                            <th>Brand</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            products.map((product, index) => <ProductTable key={product._id} product={product} index={index}></ProductTable>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowProductsInTable;