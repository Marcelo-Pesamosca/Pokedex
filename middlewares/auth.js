function isAuthenticated(request, response, next) {
  if (!request.headrs.authorization) {
  //     return response.status(401).json({
  //         error: 'User not authenticated'
  //     })
   return response.redirect('/login');
  }
   
  next();
}

module.exports = isAuthenticated;