const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { addNewImageSchema } = require('./schemas/image.schema');

const app = express();

app.use(cors());
app.use(express.json());

const usersFilePath = path.join(__dirname, 'db', 'users.json');

app.post('/api/favoriteImage', async (req, res) => {
  try {
    const { error } = addNewImageSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let usersData = JSON.parse(await fs.readFile(usersFilePath, 'utf8'));
    const { user, imageUrl } = req.body;

    const userObj = usersData.find((u) => u.user === user);
    if (userObj) {
      console.log(userObj);
      userObj.favoriteImages.push({ imageUrl, imageId: uuidv4() });
    } else {
      usersData.push({
        user: user,
        favoriteImages: [{ imageUrl, imageId: uuidv4() }],
      });
    }

    const dataToWrite = JSON.stringify(usersData, null, 2);
    await fs.writeFile(usersFilePath, dataToWrite);

    res.status(200).json('Image added');
  } catch (error) {
    console.error('Serverfel vid hantering av begäran:', error);
    res.status(500).send('Serverfel vid hantering av begäran');
  }
});

app.get('/api/favoriteImages/:userid', async (req, res) => {
  const userId = req.params.userid;

  let usersData = JSON.parse(await fs.readFile(usersFilePath, 'utf8'));

  const userObj = usersData.find((u) => u.user === userId);
  const { favoriteImages } = userObj;
  res.status(200).json(favoriteImages);
});

app.listen(3000, () => console.log('Server is up...'));
