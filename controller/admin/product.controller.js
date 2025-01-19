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

    // Phân trang
    let limitItems = 4;
    let page = 1;

    if(req.query.page){
        page = parseInt(req.query.page);
    }
    if(req.query.limit){
        limitItems = parseInt(req.query.limit);
    }

    const skip = (page - 1) * limitItems;

    const totalProduct = await Product.countDocuments(find);
    const totalPage = Math.ceil(totalProduct / limitItems);
    // Hết Phân trang

    const products = await Product.find(find).limit(limitItems).skip(skip);

    res.render("admin/pages/products/index", {
        pageTitle: "Trang danh sách sản phẩm",
        products: products,
        totalPage: totalPage,
        currentPage: page,
        limitItems: limitItems
    })
}