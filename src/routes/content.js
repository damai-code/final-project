const express = require('express');
const router = express.Router()
const contentCtrl = require('../controllers/content');

router.post('/', contentCtrl.insertContent);
router.get('/all', contentCtrl.getAllContent);
router.get('/:id', contentCtrl.getOneContent);
router.get('/:intensity', contentCtrl.getContentByIntensity);
router.put('/:id', contentCtrl.updateContent);
router.delete('/:id', contentCtrl.deleteContent);



module.exports = router;