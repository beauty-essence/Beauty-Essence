import { useState } from "react"
import close_icon from "assets/icons/close_black.svg"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"

interface VoucherModalTypes {
  onCloseModal: () => void
}

const defaultValues = {
  identity: "",
  emailAddress: "",
  variant: ""
}

export const voucherValidation = yup.object({
  identity: yup
    .string()
    .max(50, "Imię i nazwisko nie mogą być dłuższe niż 50 znaków")
    .matches(/^[^0-9]*$/, "Imie i Nazwisko nie mogą zawierać cyfr")
    .required("Imie i nazwisko są wymagane"),
  emailAddress: yup
    .string()
    .email("Podaj prawidłowy adres e-mail")
    .required("Adres e-mail jest wymagany"),
  variant: yup.string().required("Wybierz jeden z wariantów")
})

type defaultFormValuesTypes = typeof defaultValues

const VoucherModal = ({ onCloseModal }: VoucherModalTypes) => {
  const [selectedVariant, setSelectedVariant] = useState(defaultValues.variant)
  const form = useForm({
    defaultValues,
    resolver: yupResolver(voucherValidation)
  })
  const {
    formState: { errors },
    register,
    setValue
  } = form

  const onVariantClick = (value: string) => {
    setValue("variant", value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })
    setSelectedVariant(value)
  }

  const onSubmit: SubmitHandler<defaultFormValuesTypes> = async data => {
    console.log(data)
    try {
      const response = await axios.post(
        "https://hook.eu2.make.com/ijk9zimndmohxjs9j2pd19nf6m164mhp",
        data
      )
      if (response.status === 200) {
        return response.data
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="w-full h-screen fixed top-0 left-0 bg-button-dark bg-opacity-80 z-50 flex justify-center items-center">
        <div className="relative bg-white w-full max-w-md p-11 rounded-lg">
          <img
            src={close_icon.src}
            alt="Ikona zamknij"
            className="absolute top-5 right-5 cursor-pointer"
            onClick={onCloseModal}
          />
          <h6 className="font-primary text-3xl text-button-dark font-bold mb-8">
            Komu chcesz <br /> sprawić prezent?
          </h6>
          <FormProvider {...form}>
            <form className="flex flex-col gap-2 md:w-full">
              <div className="flex flex-wrap justify-center gap-3">
                <div
                  className={`border-2 border-primary py-2 px-4 cursor-pointer ${
                    selectedVariant === "100" ? "bg-primary" : ""
                  }`}
                >
                  <p
                    className="font-primary text-xl text-button-dark font-medium text-center"
                    onClick={() => onVariantClick("100")}
                  >
                    100 zł
                  </p>
                </div>
                <div
                  className={`border-2 border-primary py-2 px-4 cursor-pointer ${
                    selectedVariant === "150" ? "bg-primary" : ""
                  }`}
                >
                  <p
                    className="font-primary text-xl text-button-dark font-medium text-center"
                    onClick={() => onVariantClick("150")}
                  >
                    150 zł
                  </p>
                </div>
                <div
                  className={`border-2 border-primary py-2 px-4 cursor-pointer ${
                    selectedVariant === "200" ? "bg-primary" : ""
                  }`}
                >
                  <p
                    className="font-primary text-xl text-button-dark font-medium text-center"
                    onClick={() => onVariantClick("200")}
                  >
                    200 zł
                  </p>
                </div>
                <div
                  className={`border-2 border-primary py-2 px-4 cursor-pointer ${
                    selectedVariant === "300" ? "bg-primary" : ""
                  }`}
                >
                  <p
                    className="font-primary text-xl text-button-dark font-medium text-center"
                    onClick={() => onVariantClick("300")}
                  >
                    300 zł
                  </p>
                </div>
                <div
                  className={`border-2 border-primary py-2 px-4 cursor-pointer ${
                    selectedVariant === "500" ? "bg-primary" : ""
                  }`}
                >
                  <p
                    className="font-primary text-xl text-button-dark font-medium text-center"
                    onClick={() => onVariantClick("500")}
                  >
                    500 zł
                  </p>
                </div>
                <div
                  className={`border-2 border-primary py-2 px-4 cursor-pointer ${
                    selectedVariant === "1000" ? "bg-primary" : ""
                  }`}
                >
                  <p
                    className="font-primary text-xl text-button-dark font-medium text-center"
                    onClick={() => onVariantClick("1000")}
                  >
                    1000 zł
                  </p>
                </div>
              </div>
              <p className="font-primary text-md text-[#ff0000]">
                {errors.variant?.message}
              </p>
              <div className="flex flex-col gap-1">
                <label htmlFor="identity" className="font-primary text-lg">
                  Imię i nazwisko
                </label>
                <input
                  id="identity"
                  type="text"
                  {...register("identity")}
                  placeholder="Jan Kowalski"
                  className="border-2 border-primary px-2 py-1"
                />
                <p className="font-primary text-md text-[#ff0000]">
                  {errors.identity?.message}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="emailAddress" className="font-primary text-lg">
                  Email
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  {...register("emailAddress")}
                  placeholder="twój@email.com"
                  className="border-2 border-primary px-2 py-1"
                />
                <p className="font-primary text-md text-[#ff0000]">
                  {errors.emailAddress?.message}
                </p>
              </div>
              <button
                type="submit"
                className="bg-primary font-primary self-end px-10 py-2 text-lg mt-8"
                onClick={form.handleSubmit(onSubmit)}
              >
                Przejdź do płatności
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  )
}

export default VoucherModal
