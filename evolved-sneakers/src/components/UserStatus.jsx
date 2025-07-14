const UserStatus = ({isLoggedIn, isAdmin}) => {
    return (
        <div>
            {isLoggedIn && isAdmin && <h2>Welcome Admin!</h2>}
            {isLoggedIn && !isAdmin && <h2>Welcome User!</h2>}
            {!isLoggedIn && <h2>Please Log In</h2>}
        </div>
    );
}

export default UserStatus