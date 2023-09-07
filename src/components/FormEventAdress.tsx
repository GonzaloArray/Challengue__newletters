import { SubmitHandler, useForm } from "react-hook-form"
import { ButtonSubmit } from "./ButtonSubmit"
import { EmailAdress } from "./EmailAdress"
import { Dispatch, SetStateAction } from "react"

type Inputs = {
  email: string
}

interface Props{
  onModal: Dispatch<SetStateAction<boolean>>
}

export const FormEventAdress = ({onModal}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    onModal(() => true)
  }
  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <EmailAdress errors={errors} register={register} />
      <ButtonSubmit isValid={isValid}/>
    </form>
  )
}
