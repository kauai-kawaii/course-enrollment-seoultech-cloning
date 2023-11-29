var express = require("express");
var router = express.Router();
const ctrl = require("../controllers/page");
const findCtrl = require("../controllers/findUserController");

/* GET home page. */
router.get("/", ctrl.output.home);
router.get("/basket", ctrl.output.basket);
router.get("/enrollCheck", ctrl.output.enrollCheck);
router.get("/register", ctrl.output.register);
router.get("/search", ctrl.output.search);
router.get("/signUp", ctrl.output.signUp);
router.get("/findUser", ctrl.output.findUser);
router.get("/findId", ctrl.output.findId);

router.post('/findUser', async (req, res, next) => {
    try {
        console.log('POST /findUser Request Received');
        await findCtrl.process.finduser(req, res);
    } catch (error) {
        console.error('에러 발생:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// router.post('/findUser', async (req, res, next) => {
//     try {
//         console.log('POST /findUser Request Received');
//         const result = await findCtrl.process.finduser(req, res);

//         // 학번과 이름 데이터를 가지고 findId 페이지 렌더링
//         if (result.success) {
//             res.render('findId', {
//                 studentName: result.studentName,
//                 studentNumber: result.studentNumber
//             });
//         } else {
//             res.status(404).json({ error: '학번을 찾을 수 없습니다.' });
//         }
//     } catch (error) {
//         console.error('에러 발생:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

module.exports = router;