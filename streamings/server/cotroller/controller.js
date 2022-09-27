import Media from "../schema/mediaSchema.js";
//get video api
export const getvideo = async (req, res) => {
  try {
    const presentVideo = await Media.find();
    return res.status(201).json(presentVideo);
  } catch (error) {
    console.log(error);
  }
};
//set video into db
export const setvideo = async (req, res) => {
  //console.log(" file data", req.files);
  const { name } = req.body;
  //console.log("name", name);
  //req.files.videos
  let videoPaths = [];
  if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
    for (let video of req.files.videos) {
      videoPaths.push(video.filename);
      console.log(videoPaths);
    }
  }
  try {
    const createdVideo = await Media.create({
      name,
      videos: videoPaths,
    });
    res.status(201).json({ message: "video save successfully", createdVideo });
  } catch (error) {
    console.log(error);
  }
};
