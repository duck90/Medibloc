const router = require('express').Router();
const User = require('../models/model');

// Find All
router.get('/', (req, res) => {
  User.findAll()
    .then((users) => {
      if (!users.length) return res.status(404).send({ err: 'User not found' });
      res.send(users);
    })
    .catch(err => res.status(500).send(err));
});

// Create new user document
router.post('/', (req, res) => {
  var user = new User();
  user.email = req.body.email;
  user.name = req.body.name;
  user.address = req.body.address;
  user.phone = req.body.phone;
  user.insertedDate = new Date();
  user.deleteYN = false;

  user.save( (err) => {
    if(err){
        console.error(err);
        res.json({result: 0});
        return;
    }
    res.json(user);
  });
});

// Delete by userid
router.delete('/userid/:userid', (req, res) => {
  User.deleteByUserId(req.params.userid)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
