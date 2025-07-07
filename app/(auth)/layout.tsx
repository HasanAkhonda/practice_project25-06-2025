import LoginSidePage from "@/components/shared/LoginSidePage";

export default function ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="  max-w-[1440px] w-full mx-auto flex   gap-6">
            {/* <div className="hidden lg:block flex-1 bg-green-600 rounded-3xl  ">
            </div> */}
            <div className=" w-full hidden lg:flex flex-col h-screen justify-center items-center">

                <LoginSidePage />
            </div>
            <div className=" w-full h-screen  flex flex-col justify-center items-center ">
                {children}
            </div>

        </div>
    );
}
