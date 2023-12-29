
const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="h-full flex justify-center items-center mb-auto mt-50 bg-black text-white">
            {children}
        </div>
     );
}
 
export default AuthLayout;