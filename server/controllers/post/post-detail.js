const { post } = require("../../models");

module.exports = {
    companyDetail: async (req, res) => {
    const { id } = req.params;

    if(id) {
        const data = await post.findOne({
            where : { employer_id : id }
        });
        if(!data) {
            return res.status(404).send({ message : "존재하지 않은 공고문입니다." })    
        }
        return res.status(200).send({ data, message : "ok" })
    }
  },
};
