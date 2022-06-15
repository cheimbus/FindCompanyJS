const { post } = require("../../models");

module.exports = {
    getAllCompany: async (req, res) => {
      const result = await post.findAll();
      if(!result) {
        res.status(400).send({ message : "목록이 존재하지 않습니다." })
      } else {
        for(let i = 0; i < result.length; i++) {
            delete result[i].dataValues.detail;
            delete result[i].dataValues.message;
        }
  
        const data = result.map((el) => {
          return el.dataValues;
        });
  
        res.status(200).send({ data, message : "ok" });
      }
      
    },
};
