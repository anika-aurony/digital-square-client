import Swal from 'sweetalert2';

const ProductTable = ({ product, index }) => {

    const { _id, id, name, image, category, hotProduct, brand } = product;

    const baseURL = import.meta.env.VITE_API_BASE_URL;

    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {

                fetch(`${baseURL}/products/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.message == 'Product deleted successfully') {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    }

                    )

            }
        });
    }
    return (

        <tr>
            <th>{index + 1}</th>

            <td>
                <div className="avatar">
                    <div className="mask mask-squircle h-14 w-14">
                        <img
                            src={image}
                            alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{hotProduct}</td>
            <td>{brand}</td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-sm">Delete</button></td>
        </tr>

    );
};

export default ProductTable;