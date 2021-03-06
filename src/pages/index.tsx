import React, { useState, useEffect, useContext, useRef } from "react"
import { navigate } from "gatsby"
import { scroller } from "react-scroll"
import { motion } from "framer-motion"

import { AppContext } from "../context/AppContext"
import Layout from "../components/layout/Layout"
import Button from "../components/shared/Button"
import Close from "../components/shared/Close"
import Section from "../components/shared/Section"
import TextIlustration from "../components/shared/TextIlustration"
import useMenuColor from "../hooks/useMenuColor"
import { useAnimateOnInView } from "../hooks/useAnimateOnInView"

import { fromBottom, opacity } from "../constants/animations"
import Ilus1 from "../images/ilus1.png"

const InfoDetail = ({ title, children, closeAction }) => (
  <div className="md:w-2/3 relative pb-12">
    <Close
      action={() => closeAction()}
      color="beige1"
      className="absolute right-0 md:-right-16 top-0"
    />
    <p className="text-2xl md:text-4xl font-medium text-beige1 pr-12 mb-8">
      {title}
    </p>
    {children}
  </div>
)

const NeedOption = ({ title, resume, action }) => (
  <div className="lg:w-72 text-white mb-8 sm:mb-0">
    <Button
      className="!w-auto"
      text={title}
      variant="option-white"
      action={action}
    />
    <div className="mt-4 sm:mt-8">
      <p>{resume}</p>
    </div>
  </div>
)

const IndexPage = () => {
  const { setMenuColor } = useContext(AppContext)
  const [option, setOption] = useState<number | null>(null)
  const refSection = useRef(null)
  const menuColor = useMenuColor([refSection])

  const { ref, controls: control } = useAnimateOnInView()
  const { ref: refInfo, controls: controlInfo } = useAnimateOnInView()

  useEffect(() => {
    setMenuColor(menuColor)
  }, [menuColor])

  const selectInfo = opt => {
    setOption(opt)
    scroller.scrollTo("ref-info", {
      duration: 800,
      delay: 100,
      smooth: "easeInOutQuart",
    })
  }

  return (
    <Layout title="Tu historia importa">
      <Section>
        <TextIlustration ilus={Ilus1}>
          <p className="text-2xl md:text-4xl font-extralight">
            <span className="font-medium text-beige1">
              Brindamos informaci??n u??til y pertinente
            </span>{" "}
            para todas aquellas personas que han vivido violencia sexual,
            tomando en cuenta su proceso de sanaci??n y recuperaci??n.
          </p>
        </TextIlustration>
        <div
          ref={ref}
          className="flex flex-col sm:flex-row w-full justify-between pt-4"
        >
          <motion.div
            variants={fromBottom}
            initial="hidden"
            animate={control}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button
              variant="option"
              text="??La agresi??n sexual acaba de ocurrir?"
              action={() => selectInfo(0)}
              active={option === 0}
              className="mb-4 sm:mb-0"
            />
          </motion.div>
          <motion.div
            variants={fromBottom}
            initial="hidden"
            animate={control}
            className="box"
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Button
              variant="option"
              text="??La agresi??n sexual ocurri?? recientemente?"
              action={() => selectInfo(1)}
              active={option === 1}
              className="mb-4 sm:mb-0 mx-0 sm:mx-4"
            />
          </motion.div>
          <motion.div
            variants={fromBottom}
            initial="hidden"
            animate={control}
            className="box"
            transition={{ duration: 1, delay: 2 }}
          >
            <Button
              variant="option"
              text="??La agresi??n sexual ocurri?? hace tiempo?"
              action={() => selectInfo(2)}
              active={option === 2}
              className="mb-4 sm:mb-0"
            />
          </motion.div>
        </div>
        <div className="ref-info pt-12">
          {option === 0 && (
            <InfoDetail
              title="Si la agresi??n sexual acaba de ocurrir:"
              closeAction={() => setOption(null)}
            >
              <ul className="mt-4 list-disc text-base pl-4">
                <li className="mb-4">Puedes pedir auxilio al 911</li>
                <li className="mb-4">
                  De ser posible procura no ba??arte o limpiarte, ya que todo
                  sirve como evidencia para la denuncia.
                </li>
                <li className="mb-4">
                  Cuando llegue la polic??a, pide que te lleven a una instituci??n
                  en caso de estar lastimada o estar en crisis psicol??gica.
                </li>
                <li className="mb-4">
                  Como v??ctima, no tienes la obligaci??n de dar detalles de la
                  agresi??n a los polic??as, sobre todo si no te sientes c??moda.
                  Basta con una explicaci??n general.
                </li>
                <li className="mb-4">
                  Hay m??s probabilidad de recuperar evidencia gen??tica si
                  denuncias al Ministerio P??blico antes de las primeras 72 horas
                  de pasada la agresi??n.
                </li>
                <li className="mb-4 font-semibold">
                  Recuerda que siempre puedes decidir no denunciar o hacerlo en
                  otro momento.
                </li>
              </ul>
            </InfoDetail>
          )}
          {option === 1 && (
            <InfoDetail
              title="Si la agresi??n sexual ocurri?? recientemente:"
              closeAction={() => setOption(null)}
            >
              <ul className="mt-4 list-disc text-base pl-4">
                <li className="mb-4">
                  Trata de ponerte a salvo y recibir atenci??n m??dica (en caso de
                  ser necesario) antes de tomar acciones legales contra la
                  persona agresora.
                </li>
                <li className="mb-4">
                  Es normal si sientes{" "}
                  <span className="font-semibold">
                    enojo, impotencia, miedo o angustia.
                  </span>
                </li>
                <li className="mb-4">
                  Aunque no est??s segura de denunciar, conserva todas las{" "}
                  <span className="font-semibold">pruebas o evidencias</span>{" "}
                  relacionadas con la agresi??n (no borres mensajes, fotos o
                  videos ni te deshagas de objetos con los que te agredieron o
                  de la ropa que qued?? maltratada o sucia por la agresi??n, sobre
                  todo si en ??sta pudo caer saliva, sudor, sangre o semen de la
                  persona agresora; guarda las cosas en una{" "}
                  <span className="font-semibold">
                    caja de cart??n o en bolsas de papel
                  </span>{" "}
                  -las evidencias gen??ticas podr??an perderse si usas bolsas de
                  pl??stico-).
                </li>
                <li className="mb-4">
                  S??lo{" "}
                  <span className="font-semibold">
                    T?? decides si denuncias o no
                  </span>{" "}
                  (y se vale que cambies de opini??n en cualquier momento).
                </li>
                <li className="mb-4">
                  Si quieres <span className="font-semibold">denunciar</span> a
                  la persona agresora ac??rcate a la Procuradur??a de Protecci??n
                  de Ni??os, Ni??as y Adolescentes (si eres menor de edad), el
                  Instituto de la Mujer, el Centro de Justicia para las Mujeres
                  o la Comisi??n Ejecutiva de Atenci??n a V??ctimas de tu Estado
                  para recibir{" "}
                  <span className="font-semibold">
                    asesor??a jur??dica y apoyo psicol??gico.
                  </span>
                </li>
                <li className="mb-4">
                  Te recomendamos revisar el apartado de{" "}
                  <span className="font-semibold">autocuidado</span> en caso de
                  que desees{" "}
                  <span className="font-semibold">
                    herramientas de sanaci??n.
                  </span>
                </li>
              </ul>
            </InfoDetail>
          )}
          {option === 2 && (
            <InfoDetail
              title="Si la agresi??n sexual ocurri?? hace tiempo:"
              closeAction={() => setOption(null)}
            >
              <ul className="mt-4 list-disc text-base pl-4">
                <li className="mb-4">
                  Si tienes inter??s de denunciar verifica si en tu estado
                  todav??a es posible hacerlo por el tiempo que ha pasado, ya que
                  los delitos sexuales pueden prescribir o caducar despu??s de
                  ciertos a??os, es decir, la ley establece un periodo de tiempo
                  para que estos delitos sean investigados.{" "}
                  <span className="font-semibold">
                    Si no denuncias en ese lapso,
                  </span>{" "}
                  las autoridades no tendr??n la obligaci??n de investigar y
                  enjuiciar a la persona agresora.
                </li>
                <li className="mb-4 font-semibold">
                  Nunca es tarde para comenzar un proceso de sanaci??n y aliviar
                  el malestar emocional que te ha provocado la agresi??n.
                </li>
              </ul>
            </InfoDetail>
          )}
        </div>
      </Section>
      <section ref={refSection}>
        <div className="min-h-screen w-screen flex flex-col">
          <div className="bg-beige1 text-white flex grow">
            <div className="container">
              <p className="text-2xl sm:text-4xl mt-16 sm:mb-24 md:mb-32">
                ??Qu?? informaci??n necesitas?
              </p>
              <div
                ref={refInfo}
                className="flex flex-col sm:flex-row w-full justify-between gap-4 my-8"
              >
                <motion.div
                  variants={opacity}
                  initial="hidden"
                  animate={controlInfo}
                  transition={{ duration: 1 }}
                >
                  <NeedOption
                    title="Sistema de Salud"
                    resume="Aqu?? puedes encontrar informaci??n ??til sobre los servicios que puede brindarte el sistema de salud en caso de haber vivido una situaci??n de abuso sexual o violaci??n."
                    action={() => navigate("/sistema_de_salud")}
                  />
                </motion.div>

                <motion.div
                  variants={opacity}
                  initial="hidden"
                  animate={controlInfo}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <NeedOption
                    title="Sistema de Justicia"
                    resume="Aqu?? puedes encontrar informaci??n ??til sobre qu?? es una denuncia, c??mo hacer una denuncia y qu?? pasa despu??s de hacer una denuncia."
                    action={() => navigate("/sistema_de_justicia")}
                  />
                </motion.div>
                <motion.div
                  variants={opacity}
                  initial="hidden"
                  animate={controlInfo}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <NeedOption
                    title="Autocuidado"
                    resume="Aqu?? puedes encontrar informaci??n ??til sobre c??mo cuidar tu cuerpo y c??mo cuidarte emocionalmente despu??s de una situaci??n de violencia sexual."
                    action={() => navigate("/autocuidado")}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
