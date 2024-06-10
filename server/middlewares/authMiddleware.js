import JWT from 'jsonwebtoken'

// protected Routes token base

export const requiredSingIn = async (req, res, next)=>{
    try {
        const decode = JWT.verify(req.headers.authorization , process.env.JWT_SECRET)

        next();
    } catch (error) {
        console.log(error)
    }
}

// admin access
export const isAdmin = (req, res, next){
    try {
        
    } catch (error) {
        
    }
}