const { applicant } = require("../../models");

module.exports = {
    apply: async (req, res) => {
        const { id } = req.params;
        const { employerid } = req.params;
        
        const data = await applicant.findAll({
            where : { user_id : id }
        }); 
        for(let i = 0; i < data.length; i++) {
            const result = data[i].dataValues;
            
            if(employerid === result.employer_id && result.isApply === true) {
              res.status(400).send({ message: "이미 지원하였습니다."})
            }
            else {
              await applicant.update({ isApply : true },{ where : { user_id : result.user_id }});
              const successApply = { user_id : result.user_id, employer_id : employerid };
              res.status(201).send({ successApply, message: "지원이 완료되었습니다."})
            }
          }
          
  },
};
