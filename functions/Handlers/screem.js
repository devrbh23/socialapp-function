const {db} = require('../utility/admin');

exports.getAllScreem = (req, res) => {
  db.collection('screem')
    .orderBy('created', 'desc')
    .get()
    .then(data => {
      let screem = [];
      data.forEach(doc => {
        screem.push({
          screemId: doc.id,
          body: doc.data().body,
          userHandle: doc.data().userHandle,
          created: doc.data().created,
        });
      });
      return res.json(screem);
    })
    .catch(err => console.error(err));
};

exports.postScreem = (req, res) => {
  if (req.body.body.trim() === '') {
    return res.status(400).json({body: 'body must not be empty'});
  }
  const newScreem = {
    body: req.body.body,
    userHandle: req.user.handle,
    created: new Date().toISOString(),
  };

  db.collection('screem')
    .add(newScreem)
    .then(doc => {
      res.json({message: `document ${doc.id} created succesfully`});
    })
    .catch(err => {
      res.status(500).json({error: 'wrong'});
      console.error(err);
    });
};
