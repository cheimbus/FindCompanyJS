const { post } = require("../../models");

/**
 * @description @delete - 모집공고 삭제하는 컨트롤러입니다.
 */
module.exports = {
    delete : async (req, res) => {
        const { id } = req.params;
        if(!id) {
            return res.status(400).send({ message : "해당하는 id값이 없습니다." })
        } else {
            const isDelete = await post.findOne({ where : { id : id } });
            
            if(!isDelete) {
                return res.status(400).send({ message : "이미 삭제되었습니다." })
            }
            await post.destroy({ where : { id } });

            return res.status(200).send({ message : "모집공고가 삭제되었습니다." })
        }
    }
}