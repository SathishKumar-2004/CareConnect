import jwt from "jsonwebtoken";

// doctor authentication middleware

const authDoctor = async (req, res, next) => {
  try {
    const { doctortoken } = req.headers;

    if (!doctortoken) {
      return res.json({
        success: false,
        message: "Not Authorized Login again",
      });
    }
    const decode_token = jwt.verify(doctortoken, process.env.JWT_SECRET);

    req.body.docId = decode_token.id;

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authDoctor;
