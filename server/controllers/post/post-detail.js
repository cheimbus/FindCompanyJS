const { post } = require("../../models");

/**
 * @description @companyDetail - 모집공고 상세페이지 컨트롤러입니다.
 */
module.exports = {
  companyDetail: async (req, res) => {
    const { employerid } = req.params;
    if (employerid) {
      const data = await post.findOne({
        where: { employer_id: employerid },
      });
      console.log(data);
      if (!data) {
        return res.status(404).send({ message: "존재하지 않은 공고문입니다." });
      }
      return res.status(200).send({ data, message: "ok" });
    }
  },
};
