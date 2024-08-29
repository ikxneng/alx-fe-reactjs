

const isAuthenticated = ()=> {
    return localStorage.getItem('authToken') !==null;
}

if(isAuthenticated()) {
    console.log('User is authenticated')
} else {
    console.log('User is not authenticated')
}

export default Auth;