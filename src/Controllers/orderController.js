import sequelize from "../Models/index.js";
import initModels from '../Models/init-models.js'

const model = initModels(sequelize);

// User đặt món (Thêm order)
const createOrder = async(req, res) => {
    const { user_id, food_id, amount, code, arr_sub_id } = req.body;

    try {
        await model.order.create({
            user_id,
            food_id,
            amount,
            code,
            arr_sub_id
        });
        res.status(201).send("Bạn đã order thành công!");
    } catch (error) {
        console.log("Lỗi khi tạo đơn hàng:", error);
        res.status(500).send("Đã có lỗi xảy ra trong quá trình xử lý.");
    }
}

export {createOrder}