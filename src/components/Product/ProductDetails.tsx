import { useState } from 'react';
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import {ROUTES} from '../../helpers/ROUTES';
import axios from 'axios';
import * as yup from 'yup';

const defaultValues = {
  variant: "",
  duration: 0,
  slug: "",
  acceptTerms: false,
  productName: ""
}

type defaultFormValuesTypes = {
  variant: string;
  duration: number;
  slug: string;
  acceptTerms: boolean | undefined;
  productName: string;
}

const voucherValidation = yup.object({
  variant: yup.string().required("Wybierz wariant"),
  acceptTerms: yup
    .boolean()
    .oneOf([true], "Musisz zaakceptować regulamin sklepu")
})

export const ProductDetails = (props) => {
  const { product } = props;
  const [selectedVariant, setSelectedVariant] = useState(defaultValues.variant)
  const form = useForm({
    defaultValues,
    resolver: yupResolver(voucherValidation)
  })

  const {
    formState: { errors },
    register,
    setValue
  } = form;

  const onVariantClick = (price: string, duration: number, slug: string, productName) => {
    setValue("variant", price, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })
    setValue("duration", duration, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })
    setValue("slug", slug, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })
    setValue("productName", productName, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })
    setSelectedVariant(price)
  }

  const onSubmit: SubmitHandler<defaultFormValuesTypes> = async (data) => {
    try {
      const response = await axios.post(
        "https://beauty-essence-backend-dev.vearcel.app/api/generate-payment",
        {
          slug: data.slug,     // product identifier, e.g. "thai-massage"
          duration: data.duration,
          productName: data.productName,
        }
      )
      if (response.status === 200) {
        window.location.href = response.data.url
        return response.data
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="w-full py-32 pt-36 lg:pb-16 lg:pt-48">
      <h1 className="text-7xl font-primary font-bold text-button-dark mb-10 text-center">{product.title}</h1>
      <div className="w-full flex justify-center">
        <div className="md:flex items-start gap-16 max-w-4xl p-10">
          <div className="md:max-w-[658px] md:max-h-[495px] overflow-hidden flex justify-center mb-2">
            <img className="w-full h-full object-cover" src={product.image.src} alt={product.title}/>
          </div>
          <div>
            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {product.description && <p className="font-primary text-md text-secondary mb-2">{product.description}</p>}
                {product.descriptionList && <ul className="font-primary text-md text-secondary mb-2">
                  {product.descriptionList.map((item, index) => (
                    <li key={index} className="list-disc list-inside">{item}</li>
                  ))}
                </ul>}
                <p className="font-primary text-2xl text-secondary font-bold mb-2">Cena:</p>
                <div className="flex flex-wrap gap-2 mb-1">
                  {product.detailsPrice.map((detailsPrice, index) => (
                    <div key={index}>
                      <div className={`border-2 border-primary py-2 px-4 cursor-pointer ${selectedVariant === detailsPrice.price ? "bg-primary" : ""}`}>
                        <p
                          className="font-primary text-xl text-button-dark font-medium text-center"
                          onClick={() => onVariantClick(detailsPrice.price, detailsPrice.time, detailsPrice.slug, product.title)}
                        >
                          {detailsPrice.price} zł
                        </p>
                      </div>
                      <div>
                        {selectedVariant === detailsPrice.price && <p className="font-primary text-center text-button-dark mt-2">{detailsPrice.time} minut</p>}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="font-primary text-md text-[#ff0000]">
                  {errors.variant?.message}
                </p>
                <div className="flex gap-2 items-baseline mt-4">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    {...register("acceptTerms")}
                  />
                  <label htmlFor="acceptTerms" className="font-primary text-md text-secondary">
                    Akceptuję
                    <a
                      href={ROUTES.regulations}
                      className="font-bold underline ml-1"
                    >
                      regulamin sklepu
                    </a>
                  </label>
                </div>
                <p className="font-primary text-md text-[#ff0000]">
                  {errors.acceptTerms?.message}
                </p>
                <button
                  type="submit"
                  className="bg-primary font-primary self-end px-10 py-2 text-lg mt-8 border-primary border-2
                  hover:bg-white hover:transition hover:duration-200 hover:ease-in-out"
                >
                  Przejdź do płatności
                </button>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </section>
  )
}
