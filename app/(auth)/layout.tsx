
export default function ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen max-w-[1440px] w-full mx-auto flex   p-4 gap-6">
            {/* <div className="hidden lg:block flex-1 bg-green-600 rounded-3xl  ">
            </div> */}
            <div className=" flex-1 flex flex-col h-full justify-center items-center">
                <div className="w-full  h-screen   p-8 bg-white rounded-[10px] outline-1 outline-offset-[-1px] outline-green-500 flex flex-col justify-start items-center gap-6 md:gap-12">
                     
                </div>
            </div>
            <div className=" flex-1 flex flex-col h-full justify-center items-center">
                {children}
            </div>

        </div>
    );
}
