
import { useForm, useFieldArray } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import AdminNavbar from '../../AdminNavbar/AdminNavbar';




const AddProduct = () => {
    const { register, control, handleSubmit, reset, watch } = useForm({
        defaultValues: {
            features: [''],
            hotProduct: "No"
        }
    });

    const { fields: featuresFields, append: appendFeature, remove: removeFeature } = useFieldArray({
        control,
        name: 'features'
    });

    const categories = [
        'Fiber Cleaver',
        'OLT',
        'SFP',
        'SFP+',
        'QSFP',
        'QSFP+',
        'Fusion Splicer',
        'Patch Cords',
        'ONU'
    ];

    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {

        axiosSecure.post('/products', data)
            .then(res => {
                console.log(res.data)
                if (res.data.id) {

                    alert('Added.')
                }
            })
    };


    const hotProductValue = watch('hotProduct');

    return (
        <div >
            <AdminNavbar></AdminNavbar>
            <div className="max-w-3xl mt-36 mx-auto p-5 bg-white shadow-md rounded-lg">
                
                <h2 className="text-2xl font-bold mb-4">Add Product</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input {...register('name')} placeholder="Product Name" className="input input-bordered w-full" required />

                    {/* Category Dropdown */}
                    <select {...register('category')} className="select select-bordered w-full" required>
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>

                    <input {...register('brand')} placeholder="Brand" className="input input-bordered w-full" required />
                    <input {...register('price')} placeholder="Price" className="input input-bordered w-full" required />
                    <input {...register('image')} placeholder="Image URL" className="input input-bordered w-full" required />
                    <input {...register('specImage')} placeholder="Specification Image URL" className="input input-bordered w-full" required />
                    <textarea {...register('description')} placeholder="Description" className="textarea textarea-bordered w-full" required />

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Hot Product</span>
                        </label>
                        <select
                            {...register("hotProduct")}
                            className="select select-bordered w-full"
                            defaultValue="No"
                            required
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>


                    {/* Features */}
                    <div className="space-y-2">
                        <label className="font-semibold">Features</label>
                        {featuresFields.map((field, index) => (
                            <div key={field.id} className="flex gap-2">
                                <input {...register(`features.${index}`)} className="input input-bordered flex-1" required />
                                <button type="button" className="btn btn-error" onClick={() => removeFeature(index)}>Remove</button>
                            </div>
                        ))}
                        <button type="button" className="btn btn-outline" onClick={() => appendFeature('')}>Add Feature</button>
                    </div>

                    <button type="submit" className="btn btn-primary w-full mt-4">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
