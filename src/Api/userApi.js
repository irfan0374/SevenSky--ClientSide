import { userAxiosInstance } from "./axiosInstance";
export const userSignup=async(signupdata)=>{
    console.log("signup")
    const data= await userAxiosInstance.post('/signup',signupdata)
    
return data;

}
export const otpVerification= async (otp,otpId,userId)=>{
    const data=await userAxiosInstance.post('/otpVerify',{otp,userId});
    return data;
}
export const userlogin=async(loginData)=>{
        const data=await userAxiosInstance.post('/userLogin',loginData)
        return data;
};
export const userLoginWithGoogle=async(userEmail)=>{
    const data=await userAxiosInstance.post('/googleUserLogin',{userEmail})
    console.log(data,"data")
    return data;
}

