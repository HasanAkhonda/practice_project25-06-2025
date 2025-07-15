'use client'
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog'
import { useForm } from 'react-hook-form';

const AddAnotherVehicle = ({ open, setIsOpen, handleAddVehicle }) => {

    const { handleSubmit, register, formState: { errors } } = useForm()

    const handleForm = (e) => {
         handleAddVehicle(e)
    }
    return (
        <div>
            <Dialog open={open} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[425px] p-0 border-0 bg-transparent">
                    <DialogTitle />
                    <div>
                        <div className=" w-full p-8 relative bg-green-600 rounded-tl-2xl rounded-tr-2xl backdrop-blur-[5px]  flex flex-col justify-start items-start gap-8">
                            <div className=" w-full justify-start text-white text-3xl font-medium font-Inter leading-9">Add Another Vehicle</div>
                            <div className="w-7 h-7   absolute right-2 top-3 overflow-hidden">
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(handleForm)} className=" w-full p-8 bg-white rounded-bl-2xl rounded-br-2xl   outline-1 outline-offset-[-1px] outline-green-500 backdrop-blur-[5px] inline-flex flex-col justify-start items-start gap-8">
                            <div className=" w-full flex flex-col justify-start items-start gap-5">
                                <div className=" w-full flex flex-col justify-start items-start gap-3">
                                    <div className="justify-start text-zinc-950 text-lg font-normal font-Inder leading-snug">Registration Number</div>
                                    <div className=" w-full flex flex-col justify-start items-end gap-2">
                                        <input
                                            {...register("registrationNumber", {
                                                required: "This field is required",
                                                minLength: {
                                                    value: 5,
                                                    message: "At least 5 characters are required"
                                                }
                                            })}
                                            placeholder='XXXXXXXXXX' className=" w-full px-2.5 py-2.5 bg-white rounded-lg  outline-1 outline-offset-[-1px] outline-green-500 backdrop-blur-[5px] inline-flex justify-start items-center gap-2.5  text-zinc-950 text-lg font-normal font-Inter leading-relaxed"
                                        />
                                        {errors.registrationNumber && <p className='text-red-600'>{`${errors.registrationNumber.message}`}</p>}
                                    </div>
                                </div>
                                <button type='submit' className=" w-full flex flex-col justify-start items-start gap-3">
                                    <div className=" w-full px-3 py-3 bg-green-500 rounded-lg   outline-1 outline-offset-[-1px] outline-green-500 inline-flex justify-center items-center gap-2">
                                        <div className="justify-start text-white text-lg font-medium font-Inter leading-relaxed">Add Vehicle</div>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default AddAnotherVehicle
