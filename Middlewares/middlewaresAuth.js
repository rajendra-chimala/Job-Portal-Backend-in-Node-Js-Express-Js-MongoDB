giveAccessToAuthorisedUsersOnly = (req, res, next) => {

    // Check if user has the necessary role
    const userRole = req.user.role;
    if (userRole!== 'admin') {
        return res.status(403).json({ message: 'You do not have the necessary role to access this resource.' });
    }

    // Check if user is authenticated
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'You are not authorised to access this resource.' });
    }
}