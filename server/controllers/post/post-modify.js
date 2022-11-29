const { post } = require("../../models");

/**
 * @description @modify - 모집공고 수정하는 컨트롤러입니다.
 */
module.exports = {
  modify: async (req, res) => {
    const { id } = req.params;
    const { name, country, position, tech, message, detail } = req.body;
    if (!id) {
      return res.status(400).send({ message: "해당하는 id값이 없음" });
    } else {
      await post.update(
        {
          name,
          country,
          position,
          tech,
          message,
          detail,
          created_at: new Date(),
          updated_at: new Date(),
        },
        { where: { id } }
      );
      return res.status(200).send({ message: "모집공고가 수정되었습니다." });
    }
  },
};
