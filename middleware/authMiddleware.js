const jwt = require('jsonwebtoken');

// Middleware to protect routes
const authMiddleware = (req, res, next) => {
  let token;

  // Check if token is in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];  // 'Bearer token'

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Add user information to request object for further use in routes
      req.user = decoded.id;
      next();  // Allow access to the next middleware/route handler
    } catch (err) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'No token, authorization denied' });
  }
};

module.exports = authMiddleware;
