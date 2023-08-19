import sequelize from "../Models/index.js";
import initModels from '../Models/init-models.js'

const model = initModels(sequelize);

// Xử lý like nhà hàng (LIKE)
const createLikeRes = async (req, res) => {
    try {
        const { user_id, res_id } = req.body;
        const date_like = new Date(); // Thời gian hiện tại

        // Thêm + kiểm tra dữ liệu 
        if (!user_id || !res_id) {
            return res.status(400).send("Thiếu thông tin cần thiết để thực hiện like.");
        }

        await model.like_res.create({ user_id, res_id, date_like });
        
        res.status(201).send("Bạn đã like thành công!");
    } catch (error) {
        console.error("Lỗi khi tạo like:", error);
        res.status(500).send("Đã có lỗi xảy ra trong quá trình xử lý.");
    }
};

// Xử lý like nhà hàng(UNLIKE)
const unlikeRes = async (req, res) => {
    try {
        const { user_id, res_id } = req.body;

        if (!user_id || !res_id) {
            return res.status(400).send("Thiếu thông tin cần thiết để thực hiện unlike.");
        }

        // Xóa dữ liệu
        await model.like_res.destroy({
            where: { user_id, res_id }
        });

        res.status(200).send("Bạn đã unlike thành công!");
    } catch (error) {
        console.error("Lỗi khi unlike:", error);
        res.status(500).send("Đã có lỗi xảy ra trong quá trình xử lý.");
    }
};

// Xử lý like nhà hàng (Lấy danh sách like theo user)
const getLikeByUserID = async(req, res) => {
    let { id } = req.params;
    let data = await model.like_res.findAll({
        where: {user_id: id}
    });
    res.send(data);
}

// Xử lý like nhà hàng (Lấy danh sách like theo nhà hàng)
const getLikeByResID = async(req, res) => {
    let { id } = req.params;
    let data = await model.like_res.findAll({
        where: {res_id: id}
    });
    res.send(data);
}

// Xử lý like nhà hàng (Lấy danh sách like theo nhà hàng và user)
const getLikeByResAndUserID = async (req, res) => {
    const { resID, userID } = req.params;
    const data = await model.like_res.findAll({
        where: { res_id: resID, user_id: userID }
    });
    res.send(data);
}

export { getLikeByResID, getLikeByUserID, createLikeRes, unlikeRes, getLikeByResAndUserID }
