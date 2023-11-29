import { useState } from "react"
import close_icon from "assets/icons/close_black.svg"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { ROUTES } from "helpers/ROUTES"

interface VoucherModalTypes {
  onCloseModal: () => void
}

const defaultValues = {
  variant: "",
  acceptTerms: false
}

export const voucherValidation = yup.object({
  variant: yup.string().required("Wybierz jeden z wariantów"),
  acceptTerms: yup
    .boolean()
    .oneOf([true], "Musisz zaakceptować regulamin sklepu")
})

type defaultFormValuesTypes = {
  variant: string
  acceptTerms: boolean | undefined
}

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

  const onSubmit: SubmitHandler<
    Pick<defaultFormValuesTypes, "variant">
  > = async data => {
    const ParsedData = parseInt(data.variant)
    console.log(ParsedData)
    try {
      const response = await axios.post(
        "https://beautyessence-backend.vercel.app/api/generate-payment",
        {
          variant: ParsedData
        }
      )
      if (response.status === 200) {
        const paymentLinkUrl = response.data.url
        window.location.href = paymentLinkUrl
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
              <p className="font-primary text-md text-secondary">
                &sdot; Voucher jest ważny przez 6 miesięcy od daty zakupu.
                <br />
                &sdot; Voucher do druku oraz potwierdzenie płatności znajdą
                Państwo na e‑mailu po dokonaniu płatności.
                <br />
                &sdot; Korzystając ze strony zgadzasz się na używanie plików
                cookies zainstalowanych na Twoim urządzeniu. Więcej o plikach
                cookies i możliwościach zmiany ich ustawień dowiesz się w
                <a href={ROUTES.policy} className="font-bold underline ml-1">
                  polityka prywatności
                </a>
              </p>
              <div className="flex gap-2 items-baseline">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  {...register("acceptTerms")}
                />

                <p className="font-primary text-md text-secondary">
                  Akceptuję
                  <a
                    href={ROUTES.regulations}
                    className="font-bold underline ml-1"
                  >
                    regulamin sklepu
                  </a>
                </p>
              </div>
              <p className="font-primary text-md text-[#ff0000]">
                {errors.acceptTerms?.message}
              </p>
              <button
                type="submit"
                className="bg-primary font-primary self-end px-10 py-2 text-lg mt-8 border-primary border-2
                hover:bg-white hover:transition hover:duration-200 hover:ease-in-out"
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
