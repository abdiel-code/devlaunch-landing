const corsMiddleware = (req, res, next) => {
  const origin = req.headers.origin;

  const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://abdiel-code.github.io",
    "https://devlaunch-landing.onrender.com",
  ];

  const dynamicRender = /^https:\/\/devlaunch-landing.*\.onrender\.com$/;

  if (allowedOrigins.includes(origin) || dynamicRender.test(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, PATCH, DELETE, GET, OPTIONS"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).json({});
  }

  next();
};

export default corsMiddleware;
