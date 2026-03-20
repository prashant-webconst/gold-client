const AddProduct = () => {
  return (
    <div className="container-fluid">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Add Product</h5>
        </div>

        <div className="card-body">
          <form>
            <div className="row">
              
              {/* Product Name */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter product name"
                />
              </div>

              {/* Category */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Category</label>
                <select className="form-select">
                  <option>Select category</option>
                  <option>Rings</option>
                  <option>Necklaces</option>
                  <option>Bracelets</option>
                </select>
              </div>

              {/* Price */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter price"
                />
              </div>

              {/* Image Path */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Image URL / Path</label>
                <input
                  type="file"
                  className="form-control"
                  placeholder="/images/product.jpg"
                />
              </div>

            </div>

            {/* Submit Button */}
            <div className="mt-3">
              <button type="submit" className="btn btn-success">
                Add Product
              </button>
              <button type="reset" className="btn btn-secondary ms-2">
                Reset
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;