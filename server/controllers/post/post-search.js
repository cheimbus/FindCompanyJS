const { post } = require("../../models");

module.exports = {
    search: async (req, res) => {
        const query = req.query;
        
        if(query.name) {
            const data = await post.findOne({
                where : { name : query.name }
            });
            const isName = await post.findAll();
            let exist = false;

            for(let i = 0; i < isName.length; i++) {
                if(isName[i].dataValues.name === query.name) {
                    exist = true;
                }
            }
            if(!exist) {
                return res.status(404).send({ message : "잘못된 URL입니다." }) 
            }
            
            delete data.dataValues.detail;
            delete data.dataValues.message;

            return res.status(200).send({ data, message : "ok"})
        }

        else if(query.employerid) {
            const data = await post.findOne({
                where : { employer_id : query.employerid }
            })
            const isEmployerid = await post.findAll();
            let exist = false;

            for(let i = 0; i < isEmployerid.length; i++) {
                if(isEmployerid[i].dataValues.employer_id === query.employerid) {
                    exist = true;
                }
            }
            if(!exist) {
                return res.status(404).send({ message : "잘못된 URL입니다." })
            }
            
            delete data.dataValues.detail;
            delete data.dataValues.message;

            return res.status(200).send({ data, message : "ok" })
        }

        else if(query.country) {
            const data = await post.findAll({
                where : { country : query.country }
            })
            
            const isCountry = await post.findAll();
            let exist = false;

            for(let i = 0; i < isCountry.length; i++) {
                if(isCountry[i].dataValues.country === query.country) {
                    exist = true;
                }
            }
            if(!exist) {
                return res.status(404).send({ message : "잘못된 URL입니다." })
            }
            
            for(let i = 0; i < data.length; i++) {
                delete data[i].dataValues.detail;
                delete data[i].dataValues.message;
            }
            return res.status(200).send({ data, message : "ok" })
        }

        else if(query.position) {
            const data = await post.findAll({
                where : { position : query.position }
            })
            const isPosition = await post.findAll();
            let exist = false;

            for(let i = 0; i < isPosition.length; i++) {
                if(isPosition[i].dataValues.position === query.position) {
                    exist = true;
                }
            }
            if(!exist) {
                return res.status(404).send({ message : "잘못된 URL입니다." })
            }

            for(let i = 0; i < data.length; i++) {
                delete data[i].dataValues.detail;
                delete data[i].dataValues.message;;
            }
            return res.status(200).send({ data, message : "ok" })
        }

        else if(query.tech) {
            const data = await post.findAll({
                where : { tech : query.tech }
            })
            const isTech = await post.findAll();
            let exist = false;

            for(let i = 0; i < isTech.length; i++) {
                if(isTech[i].dataValues.tech === query.tech) {
                    exist = true;
                }
            }
            if(!exist) {
                return res.status(404).send({ message : "잘못된 URL입니다." })
            }
            
            for(let i = 0; i < data.length; i++) {
                delete data[i].dataValues.detail;
                delete data[i].dataValues.message;
            }
            return res.status(200).send({ data, message : "ok" })
        }
    },
};
