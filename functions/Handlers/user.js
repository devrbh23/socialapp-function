const {db, admin} = require('../utility/admin');
const config = require('../utility/config');
const firebase = require('firebase');
firebase.initializeApp(config);

const {
  validateSignUpData,
  validateLogInData,
} = require('../utility/validators');

exports.signUp = (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle,
  };

  const {valid, errors} = validateSignUpData(newUser);
  if (!valid) return res.status(400).json(errors);

  const noImg = 'no-image.png';

  let token, userId;
  db.doc(`/users/${newUser.handle}`)
    .get()
    .then(doc => {
      if (doc.exists) {
        return res.status(400).json({handle: ' handle already taken'});
      } else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    .then(data => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then(idToken => {
      token = idToken;
      const userCredentials = {
        email: newUser.email,
        handle: newUser.handle,
        created: new Date().toISOString(),
        imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
        userId,
      };
      return db.doc(`/users/${newUser.handle}`).set(userCredentials);
    })
    .then(() => {
      return res.status(201).json({token});

      // return res.sendStatus(201).json({token});
    })
    .catch(err => {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        return res.status(400).json({email: 'email already taken'});
      } else {
        return res.status(500).json({error: err.code});
      }
    });
};

exports.logIn = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  const {valid, errors} = validateLogInData(user);
  if (!valid) return res.status(400).json(errors);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(data => {
      return data.user.getIdToken();
    })
    .then(token => {
      return res.json({token});
    })
    .catch(err => {
      console.error(err);
      if (err.code === 'auth/wrong-password') {
        return res
          .status(403)
          .json({general: 'wrong creadential please try again'});
      } else return res.status(500).json({error: err.code});
    });
};

exports.upload = (req, res) => {
  const BusBoy = require('busboy');
  const path = require('path');
  const fs = require('fs');
  const os = require('os');

  const busboy = new BusBoy({headers: req.headers});
  let imageFileName;
  let imageToBeUpliaded = {};
  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    console.log(filename);
    console.log(fieldname);
    console.log(mimetype);
    //image.png
    const imageExtension = filename.split('.')[filename.split('.').length - 1];
    imageFileName = `${Math.round(
      Math.random() * 100000000000
    )}.${imageExtension}`;
    //6775665666.png
    const filepath = path.json(os.tmpdir(), imageFileName);
    imageToBeUpliaded = {filepath, mimetype};
    file.pipe(fs.createWriteStream(filepath));
  });
  busboy.on('finish', () => {
    admin
      .storage()
      .bucket()
      .upload(imageToBeUploaded.filepath, {
        resumable: false,
        metadata: {
          metadata: {
            contentType: imageToBeUploaded.mimetype,
          },
        },
      })
      .then(() => {
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`;
        return db.doc(`users/${req.user.handle}`).update({imageUrl});
      })
      .then(() => {
        return res.json({message: 'image upload succesfully'});
      })
      .catch(err => {
        console.error(err);
        return res.status(500).json({error: err.code});
      });
  });
  busboy;
};
