const Product = require("../../models/product.model")

module.exports.index = async (req, res) => {
    const find = {
        deleted: false
    }
    
    // Tìm kiếm
    if(req.query.keyword){
        const regex = new RegExp(req.query.keyword, "i"); // Tạo regex dựa trên keyword mới nhận
        find.title = regex;
    }
    // Hết Tìm kiếm

    // Bộ lọc
    if(req.query.status){
        find.status = req.query.status;
    }
    // Hết Bộ lọc

    const products = await Product.find(find);

    res.render("admin/pages/products/index", {
        pageTitle: "Trang danh sách sản phẩm",
        products: products
    })
}