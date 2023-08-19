import sequelize from "../Models/index.js";
import initModels from '../Models/init-models.js'

const model = initModels(sequelize);

// Xử lý đánh giá nhà hàng (Thêm đánh giá)
const createRateRes = async (req, res) => {
    try {
        const { user_id, res_id, amount} = req.body;
        const date_rate = new Date(); // Thời gian hiện tại

        if (!user_id || !res_id || !amount || amount < 1 || amount > 5) {
            return res.status(400).send("Thông tin đánh giá không hợp lệ.");
        }
        
        await model.rate_res.create({ user_id, res_id, amount, date_rate });

        res.status(201).send("Bạn đã đánh giá thành công!");
    } catch (error) {
        console.log("Lỗi khi tạo đánh giá:", error);
        res.status(500).send("Đã có lỗi xảy ra trong quá trình xử lý.");
    }
};

// Xử lý đánh giá nhà hàng (Lấy danh sách theo nhà hàng)
const getRateByResID = async(req, res) => {
    let { id } = req.params;
    let data = await model.rate_res.findAll({
        where: {res_id: id}
    });
    res.send(data);
}

// Xử lý đánh giá nhà hàng (Lấy danh sách theo user)
const getRateByUserID = async(req, res) => {
    let { id } = req.params;
    let data = await model.rate_res.findAll({
        where: {user_id: id}
    });
    res.send(data);
}

// Xử lý đánh giá nhà hàng (Lấy danh sách theo nhà hàng và user)
const getRateByResAndUserID = async(req, res) => {
    const { resID, userID } = req.params;
    const data = await model.rate_res.findAll({
        where: { res_id: resID, user_id: userID }
    });
    res.send(data);
}

export {createRateRes, getRateByResID, getRateByUserID, getRateByResAndUserID}