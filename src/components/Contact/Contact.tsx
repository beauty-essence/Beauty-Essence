import React, { useState } from "react"
import facebook_icon from "assets/icons/FacebookIconGreen.svg"
import instagram_icon from "assets/icons/InstagramIconGreen.svg"
import whatsapp_icon from "assets/icons/WhatsappIconGreen.svg"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { ROUTES } from "helpers/ROUTES"

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  message: ""
}

export const formValidation = yup.object({
  name: yup
    .string()
    .max(50, "Imię i nazwisko nie mogą być dłuższe niż 50 znaków")
    .matches(/^[^0-9]*$/, "Imie i Nazwisko nie mogą zawierać cyfr")
    .required("Imie i nazwisko są wymagane"),
  email: yup
    .string()
    .email("Podaj prawidłowy adres e-mail")
    .required("Adres e-mail jest wymagany"),
  phone: yup
    .string()
    .matches(/^\d{3}[-\s]?\d{3}[-\s]?\d{3}$/, {
      message:
        "Numer telefonu powinien składać się z 9 cyfr i może zawierać opcjonalnie myślniki lub spacje po trzeciej i szóstej cyfrze",
      excludeEmptyString: true
    })
    .required("Numer telefonu jest wymagany"),
  message: yup
    .string()
    .max(200, "Wiadomość nie może być dłuższa niż 200 znaków")
    .required("Wiadomość jest wymagana")
})

type defaultFormValuesTypes = typeof defaultValues

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(formValidation)
  })
  const {
    formState: { errors },
    register,
    reset
  } = methods

  const onSubmit: SubmitHandler<defaultFormValuesTypes> = async data => {
    try {
      const response = await axios.post(
        import.meta.env.PUBLIC_FORM_ENDPOINT,
        data
      )
      if (response.status === 200) {
        setIsSuccess(true)
        reset()
        return response.data
      }
    } catch (error) {
      setIsError(true)
    }
  }
  return (
    <section className="relative w-full flex justify-center items-center pt-36 lg:pb-16 lg:pt-48">
      <div className="container md:flex md:gap-5 justify-center">
        <div className="bg-primary-light p-10 flex flex-col gap-5 text-secondary-text md:w-full max-w-[450px] relative">
          <h1 className="text-5xl font-primary font-bold text-button-dark">
            Kontakt
          </h1>

          <p>W razie pytań, nie wahaj się napisać!</p>

          <div>
            <p>
              BEAUTY ESSENCE Sp. z o.o.
              <br />
              ul. Most Pauliński 1/3
              <br />
              87-100 Toruń
              <br />
              <br />
            </p>
            <p>Recepcja Salonu +48 789 585 586</p>
            <a
              href="mailto:recepcja@beauty-essence.pl"
              className="hover:underline"
            >
              recepcja@beauty-essence.pl
            </a>
          </div>

          <p>Dołącz do nas: </p>
          <div className="flex gap-2">
            <a
              href="https://www.facebook.com/BeautyEssenceTorun"
              target="_blank"
            >
              <img src={facebook_icon.src} alt="Ikona Facebook" />
            </a>
            <a
              href="https://www.instagram.com/beautyessence_torun/"
              target="_blank"
            >
              <img src={instagram_icon.src} alt="Ikona instagram" />
            </a>
            <a href="https://wa.me/48789585586" target="_blank">
              <img
                src={whatsapp_icon.src}
                alt="Ikona whatsapp"
                className="max-w-[19px]"
              />
            </a>
          </div>
          <p className="text-[10px]">
            Beauty Essence sp. z o.o. z siedzibą w Toruniu pod adresem <br />
            ul. Most Pauliński 1/3, wpisana jest do rejestru przedsiębiorców
            Krajowego Rejestru Sądowego pod numerem KRS: 0001045932, posiadająca
            REGON: 525782795, NIP: 9562385613.
            <br />
            <br />
            Rachunek bieżący w PLN 24 1240 1183 1111 0011 2805 6870
          </p>
        </div>
        <FormProvider {...methods}>
          <form className="p-4 flex flex-col gap-2 md:w-full max-w-[400px]">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-primary text-lg">
                Imię i nazwisko
              </label>
              <input
                id="name"
                type="text"
                placeholder="Jan Kowalski"
                {...register("name")}
                className="border-2 border-primary px-2 py-1"
              />
              <p className="font-primary text-md text-[#ff0000]">
                {errors.name?.message}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-primary text-lg">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="twój@email.com"
                {...register("email")}
                className="border-2 border-primary px-2 py-1"
              />
              <p className="font-primary text-md text-[#ff0000]">
                {errors.email?.message}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="font-primary text-lg">
                Telefon
              </label>
              <input
                id="phone"
                type="text"
                placeholder="+48 555 333 222"
                {...register("phone")}
                className="border-2 border-primary px-2 py-1"
              />
              <p className="font-primary text-md text-[#ff0000]">
                {errors.phone?.message}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="font-primary text-lg">
                Wiadomość
              </label>
              <textarea
                rows={5}
                id="message"
                placeholder="Tutaj napisz swoją wiadomość"
                {...register("message")}
                className="border-2 border-primary px-2 py-1 min-h-[100px] max-h-[400px]"
              ></textarea>
              <p className="font-primary text-md text-[#ff0000]">
                {errors.message?.message}
              </p>
              <p className="font-primary text-sm text-secondary">
                Wysyłając formularz akceptujesz naszą
                <a href={ROUTES.policy} className="font-bold underline ml-1">
                  politykę prywatności
                </a>
              </p>
            </div>
            <button
              type="submit"
              className="bg-primary font-primary self-end px-10 py-2 text-lg border-primary border-2
              hover:bg-white hover:transition hover:duration-200 hover:ease-in-out"
              onClick={methods.handleSubmit(onSubmit)}
              disabled={isSuccess}
            >
              Wyślij
            </button>
            {isSuccess && (
              <p className="text-2xl font-primary font-bold text-button-dark text-center mt-2">
                Wiadomość została wysłana
              </p>
            )}
            {isError && (
              <p className="text-2xl font-primary font-bold text-button-dark text-center mt-2">
                Wystąpił błąd, spróbuj ponownie później
              </p>
            )}
          </form>
        </FormProvider>
      </div>
    </section>
  )
}

export default Contact
