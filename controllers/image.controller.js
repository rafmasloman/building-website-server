const { imageModel } = require('../models/imageModel');

const imageController = async (url) => {
  const Image = await imageModel();
  const query = new Image({
    url,
  });
};
