const systemConfig = require("../../config/system");
const productRoute = require("../../routes/admin/product.route");

module.exports = (app) => {
    const prefixAdmin = `/${systemConfig.prefixAdmin}`
    app.use(`${prefixAdmin}/products`, productRoute)
}