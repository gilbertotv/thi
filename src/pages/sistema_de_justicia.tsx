import React, { useContext, useEffect, useRef, useState } from "react"
import { Link, navigate } from "gatsby"
import { Carousel } from "react-responsive-carousel"

import { AppContext } from "../context/AppContext"
import Layout from "../components/layout/Layout"
import Section from "../components/shared/Section"
import TextHeader from "../components/shared/TextHeader"
import TextIlustration from "../components/shared/TextIlustration"
import Button from "../components/shared/Button"
import { useAnimateOnInView } from "../hooks/useAnimateOnInView"

import Ilus4 from "../images/ilus4.png"

import IlusJust1 from "../images/justicia/just1.svg"
import IlusJust2 from "../images/justicia/just2.svg"
import IlusJust3 from "../images/justicia/just3.svg"
import IlusJust4 from "../images/justicia/just4.svg"
import IlusJust5 from "../images/justicia/just5.svg"
import IlusJust6 from "../images/justicia/just6.svg"
import IlusJust7 from "../images/justicia/just7.svg"
import IlusJust8 from "../images/justicia/just8.svg"
import IlusJust9 from "../images/justicia/just9.svg"
import IlusJust10 from "../images/justicia/just10.svg"
import IlusJust11 from "../images/justicia/just11.svg"
import IlusJust12 from "../images/justicia/just12.svg"
import PregFreq from "../images/pregfreq.svg"

import useMenuColor from "../hooks/useMenuColor"

import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import TitleText from "../components/shared/TitleText"
import { visible } from "../constants/animations"
import { motion } from "framer-motion"

const ProgressBar = ({ index }) => (
  <div className="relative mt-32">
    <div className="w-full h-1 opacity-25 bg-white"></div>
    <div
      className={`absolute top-0 left-0 h-1 bg-white z-10`}
      style={{ width: `${((index + 1) * 100) / 12}%` }}
    ></div>
    <p className="mt-4 text-white font-semibold text-xl text-center">
      {(index + 1).toString()}/12
    </p>
  </div>
)
const SistemaJusticia = () => {
  const { setMenuColor } = useContext(AppContext)
  const tips: { text: string; img }[] = [
    {
      text: "1. Denunciar es un tr??mite gratuito.",
      img: IlusJust1,
    },
    {
      text: "2.  El proceso para denunciar en la Fiscal??a o Ministerio P??blico (???MP???) puede durar hasta 8 horas o m??s.",
      img: IlusJust2,
    },
    {
      text: "3.  Lleva el cargador de tu celular y algo que puedas comer y beber f??cilmente mientras est??s esperando.",
      img: IlusJust3,
    },
    {
      text: "4.  Procura llevar alg??n tipo de identificaci??n oficial (INE, pasaporte, licencia de conducir, c??dula profesional).",
      img: IlusJust4,
    },
    {
      text: "5. De ser posible ve acompa??ada a la Fiscal??a o ???MP??? de una persona de tu confianza.",
      img: IlusJust5,
    },
    {
      text: "6. Intenta avisar a personas de tu confianza d??nde estar??s.",
      img: IlusJust6,
    },
    {
      text: "7. Si no cuentas con un abogado o abogada, solicita que te asignen un asesor o asesora jur??dica victimal.",
      img: IlusJust7,
    },
    {
      text: "8. Puedes grabar en audio tu declaraci??n.",
      img: IlusJust8,
    },
    {
      text: "9. Si tienes alguna prueba que pueda respaldar tu historia entr??gala al fiscal o agente del Ministerio P??blico (mensajes, fotos, objetos que se usaron para agredirte, ropa sobre la que cay?? sangre, sudor, saliva o semen, etc.",
      img: IlusJust9,
    },
    {
      text: "10. Si te sientes en peligro dilo al fiscal o agente del Ministerio P??blico para que tome medidas para tu protecci??n.",
      img: IlusJust10,
    },
    {
      text: "11. Si eres una persona extranjera tienes derecho a la asistencia consular, es decir, puedes exigir a las autoridades de la Fiscal??a o ???MP??? que se comuniquen con el Consulado de tu pa??s.",
      img: IlusJust11,
    },
    {
      text: "12. En caso de que denuncies recuerda pedir una copia de la denuncia (debe ser gratuita), preguntar el nombre completo del agente del MP responsable de tu caso y preguntar por el n??mero de carpeta de investigaci??n.",
      img: IlusJust12,
    },
  ]

  const [carIndex, setcarIndex] = useState(0)
  const refSection1 = useRef(null)
  const refSection2 = useRef(null)

  const menuColor = useMenuColor([refSection1, refSection2])

  useEffect(() => {
    setMenuColor(menuColor)
  }, [menuColor])

  const carouselChange = e => {
    setcarIndex(e)
  }

  return (
    <Layout title="Sistema de Justicia">
      <Section>
        <TextIlustration ilus={Ilus4}>
          <p className="text-xl sm:text-4xl text-beige1 font-medium mb-8">
            Sistema de Justicia
          </p>
          <p className="text-lg sm:text-4xl text-gray1 font-light">
            Aqu?? puedes encontrar informaci??n para resolver tus dudas sobre el
            proceso de denuncia y c??mo acercarte a las autoridades, en caso de
            que lo est??s considerando como una opci??n. Recuerda, no es
            obligatorio denunciar, es una decisi??n que te corresponde ??nicamente
            a ti.
          </p>
        </TextIlustration>
      </Section>
      <section ref={refSection1}>
        <div className="bg-beige1 text-white pt-24 pb-24 sm:pb-48 sm:py-12 sm:min-h-screen flex">
          <div className="container">
            <TextHeader className="mb-12 !text-4xl">
              Tips para tomar en cuenta si decides denunciar:
            </TextHeader>
            <div className="hidden sm:grid w-full grid-cols-3 sm:gap-12 md:gap-x-20 lg:gap-x-24">
              {tips.map((tip, i) => (
                <div key={`tipDesk${i}`} className="">
                  <div className="bg-white flex justify-center items-center rounded-full w-32 m-auto mb-4">
                    <img src={tip.img} alt="Tip" className="" />
                  </div>

                  <p className="text-white font-medium">{tip.text}</p>
                </div>
              ))}
            </div>
            <div className="sm:hidden mt-12 flex flex-col">
              <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                onChange={carouselChange}
              >
                {tips.map((tip, i) => (
                  <div className={`px-12`} key={`tipMob${i}`}>
                    <div className="bg-white flex justify-center items-center rounded-full w-40 m-auto">
                      <img src={tip.img} alt="Tip" className="" />
                    </div>
                  </div>
                ))}
              </Carousel>
              <p className="text-white text-base pt-8 grow">
                {tips[carIndex].text}
              </p>
              <ProgressBar index={carIndex} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="min-h-screen bg-white text-gray1 font-light text-base py-12">
          <div className="container">
            <div className="sm:w-3/4 relative">
              <TextHeader className="text-beige1 mb-8">
                Derechos de las v??ctimas
              </TextHeader>

              <TitleText className="text-marron mb-4">
                Como v??ctima de violencia sexual tienes derechos, si bien estos
                no siempre son respetados por las autoridades, consideramos
                importante que los conozcas:
              </TitleText>
              <ul className="list-disc pl-6">
                <li className="mb-4 font-semibold">
                  Una investigaci??n que te sirva.
                </li>
                <li className="mb-4">
                  <span className="font-semibold">
                    Ser tratada con respeto y sin discriminaci??n
                  </span>{" "}
                  por las autoridades, los servidores p??blicos y cualquier
                  profesional que intervenga en tu atenci??n (m??dico, psic??logo,
                  trabajador social, abogado, etc.).
                </li>
                <li className="mb-4">
                  <span className="font-semibold">
                    Recibir informaci??n clara y precisa para que puedas tomar
                    decisiones
                  </span>{" "}
                  sobre la atenci??n m??dica, psicol??gica, jur??dica o cualquier
                  otra que necesites.
                </li>
                <li className="mb-4">
                  <span className="font-semibold">
                    Expresar libremente tus opiniones y preocupaciones a las
                    autoridades
                  </span>{" "}
                  para que las consideren antes de que tomen una decisi??n o
                  lleven a cabo una acci??n que pueda afectarte de cualquier
                  forma.
                </li>
                <li className="mb-4">
                  <span className="font-semibold">
                    Mantenerte separada o alejada de la persona agresora;
                  </span>{" "}
                  de hecho, est?? prohibido que t?? y la persona agresora sean
                  atendidos por la misma persona y en el mismo lugar.
                </li>
                <li className="mb-4">
                  <span className="font-semibold">
                    Ser canalizada a un refugio
                  </span>{" "}
                  (junto con tus hijas e hijos) si la persona agresora puede
                  tomar represalias y poner tu vida o bienestar en peligro.
                </li>
                <li className="mb-4">
                  <span className="font-semibold">
                    Recibir el apoyo de un int??rprete o traductor
                  </span>{" "}
                  de forma gratuita si no hablas espa??ol o tienes una
                  discapacidad auditiva, verbal o visual.
                </li>
                <li className="mb-4">
                  <span className="font-semibold">
                    Ninguna autoridad debe obligarte o presionarte para que
                    perdones
                  </span>{" "}
                  o te reconcilies con la persona agresora.
                </li>
                <li className="mb-4">
                  <span className="font-semibold">
                    Nadie tiene permitido difundir tus datos personales
                  </span>{" "}
                  (nombre, direcci??n, tel??fono, etc.) y lo que te pas??.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section ref={refSection2}>
        <div className="bg-beige1 py-8 sm:py-12">
          <div className="container text-white">
            <div className="flex flex-col sm:flex-row items-center sm:gap-4">
              <img src={PregFreq} className="sm:order-2" />
              <p className="text-3xl sm:text-6xl sm:order-1">
                Preguntas frecuentes
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="min-h-screen bg-white text-gray1 font-light text-base pt-6 pb-12">
          <div className="sm:container">
            <div className="sm:w-3/4 relative">
              <div className="accordion" id="accordionJusticia">
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading1">
                    <button
                      className="accordion-button relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      <span className="pr-4">
                        1. ??C??mo puedo saber si soy v??ctima de un delito sexual?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="heading1"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        El nombre de los delitos sexuales puede variar
                        dependiendo de los C??digos Penales de cada Estado de la
                        Rep??blica; sin embargo, es frecuente que estas leyes los
                        llamen y describan de la siguiente manera:
                      </p>
                      <TitleText className="mb-4">Acoso sexual</TitleText>
                      <p>Ocurre cuando alguien: </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Nos pide realizar actos sexuales para ??l o para otra
                          persona que van en contra de nuestra voluntad,
                          dignidad y bienestar emocional;
                        </li>
                        <li>
                          Realiza una conducta sexual hacia nosotras que no
                          queremos; o
                        </li>
                        <li>
                          Usa el tel??fono, correo electr??nico, redes sociales o
                          cualquier otro medio para enviarnos im??genes, audios o
                          videos realizando actividades sexuales o para pedirnos
                          que tengamos relaciones sexuales con ??l.
                        </li>
                      </ul>
                      <p>Ejemplos: </p>

                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Una mujer que camina por la calle recibe comentarios
                          sexuales indeseados por parte de un grupo de
                          desconocidos.
                        </li>
                        <li>
                          Un hombre saca su pene enfrente de una joven que est??
                          haciendo ejercicio en el parque.
                        </li>
                        <li>
                          A trav??s de Facebook y Twitter, un desconocido env??a
                          su ???pack??? y pide ???nudes??? a una joven.
                        </li>
                      </ul>
                      <TitleText className="mb-4">
                        Hostigamiento sexual
                      </TitleText>
                      <p>Ocurre cuando alguien: </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Nos obliga a realizar actos sexuales o nos molesta con
                          insinuaciones, comentarios y comportamientos sexuales
                          aprovech??ndose de la relaci??n de jerarqu??a laboral,
                          escolar, familiar o cualquier otra que mantiene con
                          nosotras (por ejemplo, es servidor p??blico o nuestro
                          patr??n, padre, profesor, etc.).
                        </li>
                      </ul>
                      <p>Ejemplos:</p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Un profesor contacta a una de sus alumnas a trav??s de
                          Instagram y le env??a mensajes privados cont??ndole sus
                          fantas??as sexuales, ella lo bloquea y ??l contin??a
                          mand??ndole mensajes e im??genes sexuales por otras
                          redes sociales.
                        </li>
                        <li>
                          En una empresa, el jefe amenaza a su empleada con
                          despedirla si no tiene relaciones sexuales con ??l.
                        </li>
                      </ul>
                      <TitleText className="mb-4">Abuso sexual </TitleText>
                      <p>Ocurre cuando alguien: </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Nos obliga a participar en un acto sexual (sin
                          introducir el pene en la vagina, el ano o la boca), ya
                          sea que tenga contacto con nuestro cuerpo o haga que
                          observemos o realicemos este tipo de acciones.
                        </li>
                      </ul>
                      <p>Ejemplos: </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Un hombre obliga a una mujer a que se desnude y le
                          toque el pene.{" "}
                        </li>
                        <li>
                          Un hombre toca los senos y las nalgas de su sobrina
                          cuando sus padres la dejan bajo su cuidado.{" "}
                        </li>
                        <li>
                          Un hombre invita a una vecina a su casa, la encierra y
                          la obliga a ver pornograf??a con ??l.{" "}
                        </li>
                      </ul>
                      <TitleText className="mb-4">Violaci??n</TitleText>
                      <p>Ocurre cuando alguien: </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Introduce el pene, cualquier otra parte de su cuerpo
                          (dedos, manos, lengua, etc.) o un objeto en nuestra
                          vagina, ano o boca en contra de nuestra voluntad.
                        </li>
                      </ul>
                      <p>Ejemplos:</p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Un hombre discute con su esposa, la empuja contra la
                          pared y, una vez que la inmoviliza, la obliga a
                          practicarle sexo oral.
                        </li>
                        <li>
                          Un hombre penetra a una joven que se qued?? dormida
                          tras ingerir alcohol.
                        </li>
                        <li>
                          Un hombre introduce sus dedos en la vagina de una ni??a
                          de 10 a??os.
                        </li>
                      </ul>
                      <TitleText className="mb-4">Estupro</TitleText>
                      <p>
                        Ocurre cuando tenemos entre 13 y 17 a??os de edad y
                        alguien:{" "}
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Tiene relaciones sexuales con nosotras utilizando
                          enga??os de cualquier tipo para que aceptemos esto.{" "}
                        </li>
                      </ul>
                      <p>Ejemplos:</p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Una adolescente de 13 a??os sostiene relaciones
                          sexuales con su ???novio??? de 36 a??os.{" "}
                        </li>
                        <li>
                          Una joven de 16 a??os tiene relaciones sexuales con un
                          hombre de 48 porque le prometi?? ser su representante y
                          ayudarla a ser una gran modelo e ???influencer???.
                        </li>
                      </ul>
                      <TitleText className="mb-4">
                        Contra la intimidad sexual (???Ley Olimpia???)
                      </TitleText>
                      <p>Ocurre cuando alguien: </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Fotograf??a, graba o elabora im??genes, audios o videos
                          con contenido sexual ??ntimo (real o simulado) de
                          nosotras sin que estemos de acuerdo con esto o
                          acept??ndolo mediante enga??os;
                        </li>
                        <li>
                          Muestra, comparte, difunde, reproduce, comercializa,
                          ofrece o intercambia im??genes, audios o videos con
                          contenido sexual ??ntimo de nosotras sin nuestro
                          consentimiento (ya sea por tel??fono, correo
                          electr??nico, redes sociales o cualquier otro medio).
                        </li>
                      </ul>
                      <p>Ejemplos:</p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Una joven permite que su pareja la grabe mientras
                          tienen relaciones sexuales y, cuando termina su
                          noviazgo, ??l publica ese video en internet.
                        </li>
                        <li>
                          Un estudiante toma fotograf??as de los senos y nalgas
                          de sus compa??eras y las comparte con sus amigos a
                          trav??s de WhatsApp.
                        </li>
                      </ul>
                      <TitleText className="mb-4">Violencia familiar</TitleText>
                      <p>Es un delito sexual cuando: </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Recibimos violencia sexual o contra nuestros derechos
                          reproductivos por parte de un integrante de nuestra
                          familia consangu??nea o adoptiva o por alguien con
                          quien tenemos o tuvimos una relaci??n de pareja.
                        </li>
                      </ul>
                      <p>Ejemplos:</p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Un hombre proh??be a su pareja que utilice m??todos
                          anticonceptivos.
                        </li>
                        <li>
                          Un hombre amenaza a su exesposa con quitarle a sus
                          hijos si tiene un beb?? con su nueva pareja.
                        </li>
                      </ul>
                      <TitleText className="mb-4">Tortura sexual</TitleText>

                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Ocurre cuando un servidor p??blico (polic??a, militar,
                          agente del ministerio p??blico, etc.) o cualquier otra
                          persona CON o SIN el permiso, ayuda o autorizaci??n de
                          un servidor p??blico:
                        </li>
                        <li>
                          Lleva a cabo conductas sexuales que nos causan dolor o
                          sufrimiento o disminuyen nuestra capacidad f??sica o
                          psicol??gica con la intenci??n de intimidarnos,
                          castigarnos u obligarnos a decir o hacer algo en
                          contra de nuestra voluntad.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading2">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="true"
                      aria-controls="collapse2"
                    >
                      <span className="pr-4">
                        2. ??Por qu?? es importante que un abogado o abogada me
                        asesore y represente si fui v??ctima de un delito sexual?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading2"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">Puede brindarte:</p>

                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          <span className="font-semibold">
                            Asesor??a jur??dica:
                          </span>{" "}
                          te orientar?? sobre las acciones legales que puedes
                          llevar a cabo para que la persona agresora sea
                          sancionada y t?? cuentes con la protecci??n de las
                          autoridades; con la informaci??n especializada que te
                          proporcione podr??s resolver tus dudas, tomar
                          decisiones y estar preparada para enfrentar distintas
                          situaciones en las instituciones de justicia.
                        </li>
                        <li>
                          <span className="font-semibold">
                            Representaci??n legal:
                          </span>{" "}
                          si t?? lo autorizas, podr?? realizar tr??mites y acciones
                          legales a tu favor, de tal manera que se cumplan y
                          respeten tus derechos y tu caso sea atendido
                          adecuadamente por las autoridades.
                        </li>
                      </ul>
                      <p className="mb-4">
                        Si cuentas con recursos econ??micos, lo m??s sencillo es
                        contratar a un abogado recomendado por alguien de tu
                        confianza (el precio de sus servicios puede variar
                        porque cada abogado tiene la libertad de cobrar lo que
                        quiera por su trabajo).
                      </p>

                      <p className="mb-4">
                        Tambi??n, puedes solicitar que un ???asesor jur??dico
                        victimal??? te asesore y represente de forma gratuita (sin
                        costo) en las siguientes instituciones:
                      </p>

                      <ul className="list-disc pl-6 mb-4 font-semibold">
                        <li>Comisiones Ejecutivas de Atenci??n a V??ctimas</li>
                        <li>Centros de Justicia para las Mujeres</li>
                        <li>Institutos de las Mujeres </li>
                      </ul>

                      <p className="mb-4">
                        Para conocer los tel??fonos, direcciones y horarios de
                        atenci??n que actualmente tienen estas instituciones
                        llama a Locatel o busca estos datos en internet. Adem??s,
                        hay organizaciones de la sociedad civil con abogados y
                        abogadas que asesoran, acompa??an y representan de forma
                        gratuita o por un precio bajo (para conocerlas haz{" "}
                        <Link
                          to="/directorio"
                          className="font-semibold text-marron underline"
                        >
                          click aqu??
                        </Link>
                        ).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading3">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="true"
                      aria-controls="collapse3"
                    >
                      <span className="pr-4">
                        3. ??Qu?? puedo hacer si fui v??ctima de un delito sexual y
                        la persona agresora sigue siendo un peligro para m???
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading3"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Si la persona agresora te conoce (porque es tu familiar,
                        pareja, jefe, vecino, compa??ero de trabajo o escuela,
                        etc.) y podr??a ser violenta contigo otra vez puedes
                        solicitar ?????rdenes de protecci??n??? en la Fiscal??a o
                        Ministerio P??blico o en los juzgados. Las autoridades de
                        estas instituciones pueden ordenar acciones para evitar
                        que vivas situaciones de violencia f??sica, emocional o
                        sexual, algunas de estas acciones son:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Proporcionar{" "}
                          <span className="font-semibold">
                            auxilio polic??aco
                          </span>{" "}
                          de manera inmediata ingresando al domicilio donde te
                          encuentres.
                        </li>
                        <li>
                          Sacar a la persona{" "}
                          <span className="font-semibold">agresora</span> de tu
                          domicilio inmediatamente (sin importar qui??n es el
                          due??o de la casa).
                        </li>
                        <li>
                          Prohibir a la persona agresora que se acerque a tu{" "}
                          <span className="font-semibold">
                            casa, trabajo, escuela o cualquier otro lugar
                          </span>{" "}
                          que frecuentes.
                        </li>
                        <li>
                          Recuperar tus{" "}
                          <span className="font-semibold">
                            documentos y objetos personales
                          </span>{" "}
                          (y los de tus hijos e hijas) si est??n en manos de la
                          persona agresora.
                        </li>
                      </ul>
                      <p className="mb-4">
                        <span className="font-semibold">IMPORTANTE:</span> NO es
                        necesario que presentes una denuncia para que haya una
                        orden de protecci??n, s??lo debes explicar a las
                        autoridades, de manera oral o por escrito, qu?? te ha
                        pasado y qu?? te preocupa o causa temor. Las autoridades
                        tienen{" "}
                        <span className="font-semibold">
                          m??ximo 8 horas para otorgar estas ??rdenes de
                          protecci??n
                        </span>{" "}
                        y aunque no siempre es as??, ese es el plazo que tienen
                        las autoridades para actuar.
                      </p>
                      <p className="mb-4">
                        Tambi??n puedes ser canalizada a un refugio, los cuales
                        son espacios seguros que aplican distintas medidas para
                        evitar que la persona agresora pueda localizarte.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading4">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="true"
                      aria-controls="collapse4"
                    >
                      <span className="pr-4">4. ??Qu?? es denunciar?</span>
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading4"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="">
                        Denunciar es comunicarle a las autoridades un suceso que
                        afecta nuestros derechos o bienestar y que probablemente
                        sea un delito. Espec??ficamente, un ???fiscal??? o ???agente
                        del Ministerio P??blico??? es la autoridad que recibe la
                        denuncia, se encarga de averiguar qu?? ocurri?? y presenta
                        los resultados de su investigaci??n a un juez o jueza que
                        va a determinar si la persona acusada de agredirte
                        sexualmente es o no responsable de cometer un delito, la
                        sanci??n que recibir?? si es ???culpable??? y las medidas para
                        reparar los da??os que te caus?? la agresi??n.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading5">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse5"
                      aria-expanded="true"
                      aria-controls="collapse5"
                    >
                      <span className="pr-4">5. ??Qui??n puede denunciar?</span>
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading5"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Hay delitos sexuales que{" "}
                        <span className="font-semibold">cualquier persona</span>{" "}
                        puede denunciar, por ejemplo, cualquiera puede pedirle a
                        un agente del Ministerio P??blico que investigue un caso
                        de
                        <span className="font-semibold">
                          violaci??n o tortura sexual
                        </span>
                        , ya sea porque es la v??ctima o porque se enter?? o
                        estuvo presente cuando alguien fue agredido de esta
                        manera. Estos delitos deben investigarse ???de oficio???, es
                        decir, las autoridades tienen la obligaci??n de
                        investigarlos en cuanto se enteran de que alguien pudo
                        haberlos cometido. Lamentablemente, aunque las leyes
                        mexicanas establecen esta obligaci??n, las autoridades no
                        siempre la cumplen.
                      </p>
                      <p className="mb-4">
                        Otros delitos ??nicamente pueden ser investigados cuando
                        la <span className="font-semibold">v??ctima</span> lo
                        solicita directamente presentando una queja (conocida
                        formalmente como{" "}
                        <span className="font-semibold">"querella"</span>) ante
                        un agente del ministerio p??blico. ??ste es el caso de los
                        delitos de{" "}
                        <span className="font-semibold">
                          acoso sexual, hostigamiento sexual, contra la
                          intimidad sexual, estupro o violaci??n entre personas
                          que viven en matrimonio o uni??n libre.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading6">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse6"
                      aria-expanded="true"
                      aria-controls="collapse6"
                    >
                      <span className="pr-4">
                        6. ??Cu??nto tiempo tengo para denunciar?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse6"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading6"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Puedes denunciar un delito sexual en cuanto tengas la
                        fuerza f??sica y emocional para hacerlo.{" "}
                        <span className="font-semibold">
                          Denunciar es tu derecho y tu decisi??n
                        </span>
                        , nadie te puede obligar a que lo hagas.
                      </p>
                      <p className="mb-4">
                        Denunciar de inmediato o lo m??s pronto posible puede ser
                        muy favorable para la investigaci??n del delito, sobre
                        todo cuando temes olvidar detalles de la agresi??n o de
                        la persona agresora, o si consideras que en tu cuerpo o
                        en el lugar donde ocurri?? el delito pueden encontrarse
                        pruebas que tal vez se pierdan con el paso del tiempo.
                      </p>
                      <p className="mb-4">
                        Tambi??n, es posible presentar una denuncia{" "}
                        <span className="font-semibold">
                          varios a??os despu??s
                        </span>{" "}
                        de que ocurri?? la agresi??n, sin embargo, los delitos
                        sexuales pueden prescribir o ???caducar??? despu??s de
                        ciertos a??os, es decir, la Ley establece un periodo de
                        tiempo para que estos delitos sean investigados, si no
                        denuncias en ese lapso, las autoridades no tendr??n la
                        obligaci??n de investigar y enjuiciar al agresor despu??s.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading7">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse7"
                      aria-expanded="true"
                      aria-controls="collapse7"
                    >
                      <span className="pr-4">7. ??D??nde puedo denunciar?</span>
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading7"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Para denunciar un delito sexual acude a la{" "}
                        <span className="font-semibold">
                          fiscal??a o agencia del Ministerio P??blico (???MP???)
                        </span>
                        , de preferencia a la que est?? m??s cerca del lugar donde
                        ocurri?? la agresi??n.{" "}
                        <a
                          href="https://denuncia.org/localizador-de-ministerios-publicos/"
                          className="font-semibold text-marron underline"
                          target="_blank"
                        >
                          Aqu??
                        </a>{" "}
                        puedes localizar a cu??l puedes acudir.
                      </p>
                      <p className="mb-4">
                        Es recomendable denunciar en las instituciones dedicadas
                        a la atenci??n de estos delitos como son las{" "}
                        <span className="font-semibold">
                          Fiscal??as Especializadas en Delitos Sexuales, los
                          Centros de Justicia para las Mujeres o las Fiscal??as
                          Especializadas para la Atenci??n de Delitos de
                          Violencia de G??nero.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading8">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse8"
                      aria-expanded="true"
                      aria-controls="collapse8"
                    >
                      <span className="pr-4">
                        8. ??Debo seguir un procedimiento especial para denunciar
                        un delito sexual?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse8"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading8"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        No, pero es importante que tengas en cuenta que seg??n
                        los testimonios de muchas mujeres v??ctimas de delitos
                        sexuales las autoridades del ministerio p??blico suelen
                        comportarse de forma poco ??tica y profesional al culpar
                        a las mujeres de lo ocurrido, no brindar informaci??n
                        clara, negarse a recibir la denuncia o tratar de
                        convencer a las v??ctimas para que no denuncien. Si esto
                        sucede, es recomendable que te acerques a alguna{" "}
                        <Link
                          to="/directorio"
                          className="font-semibold text-marron underline"
                        >
                          organizaci??n de la sociedad civil
                        </Link>{" "}
                        que pueda brindarte acompa??amiento y asesor??a.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading9">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse9"
                      aria-expanded="true"
                      aria-controls="collapse9"
                    >
                      <span className="pr-4">
                        9. ??Qu?? debo decir al momento de denunciar?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse9"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading9"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Cuando el agente del Ministerio P??blico te pida explicar
                        lo que sucedi?? para redactar tu denuncia, trata de
                        contarle{" "}
                        <span className="font-semibold">
                          todo lo que pas?? antes, durante y despu??s de la
                          agresi??n sexual
                        </span>
                        , esto puede resultar muy duro y dif??cil para ti, pero
                        decir{" "}
                        <span className="font-semibold">
                          cada detalle que recuerdes
                        </span>{" "}
                        (a??n si se trata de algo que no parece importante) es
                        muy ??til para que las autoridades obtengan de tu
                        denuncia la mayor cantidad de{" "}
                        <span className="font-semibold">pistas o datos</span>{" "}
                        para comenzar a investigar el delito que se cometi?? en
                        tu contra.
                      </p>{" "}
                      <p className="mb-4">
                        Las siguientes preguntas pueden orientarte sobre lo que
                        es importante decir al momento denunciar:
                      </p>
                      <ul className="list-disc pl-6 font-semibold mb-4">
                        <li>??C??mo te agredieron?</li>
                        <li> ??Cu??ndo te agredieron?</li>
                        <li> ??D??nde te agredieron?</li>
                        <li> ??Qui??n te agredi???</li>
                        <li>
                          ??Tienes algo que pueda servir para comprobar la
                          agresi??n?
                        </li>
                      </ul>
                      <p className="mb-4">
                        Esto{" "}
                        <span className="font-semibold">
                          NO es indispensable
                        </span>{" "}
                        para poder denunciar, pues las autoridades tienen la
                        obligaci??n de obtener pruebas o evidencias mediante
                        distintos procedimientos, pero puede ser muy ??til que le
                        digas al agente del Ministerio P??blico si has
                        identificado algo que puede demostrar la agresi??n (por
                        ejemplo, si hab??a c??maras de seguridad o testigos que
                        directa o indirectamente pudieron darse cuenta de lo que
                        pas??).
                      </p>{" "}
                      <p className="mb-4">
                        Recuerda: El agente del Ministerio P??blico podr??a
                        hacerte algunas{" "}
                        <span className="font-semibold">preguntas</span> para
                        entender lo que ocurri??, por ejemplo, si denuncias una
                        violaci??n podr??an preguntarte ??la penetraci??n fue
                        vaginal, anal u oral?, ??el agresor eyacul??? Estas
                        preguntas no son para incomodarte o poner en duda la
                        verdad de lo que dices, sirven para que haya claridad y
                        precisi??n en tu denuncia.
                      </p>
                      <p className="mb-4">
                        Cuando las autoridades terminen de redactar tu{" "}
                        <span className="font-semibold">denuncia</span>, p??deles
                        que te dejen{" "}
                        <span className="font-semibold">leerla</span> y diles si
                        malinterpretaron o escribieron mal algo (tienen la
                        obligaci??n de hacer las correcciones que sean necesarias
                        para que est??s
                        <span className="font-semibold">
                          totalmente de acuerdo
                        </span>{" "}
                        con lo que hayan escrito).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading10">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse10"
                      aria-expanded="true"
                      aria-controls="collapse10"
                    >
                      <span className="pr-4">
                        10. ??Cu??les son mis derechos al denunciar?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse10"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading10"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4 font-semibold">
                        Al momento de denunciar un delito sexual, tienes derecho
                        a:
                      </p>
                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          Comunicarte con una persona de confianza (amiga,
                          familiar, abogada, etc.) para informarle d??nde est??s,
                          lo qu?? har??s, si necesitas algo, pedirle que te
                          acompa??e o pase por ti, etc.;
                        </li>
                        <li className="mb-4">
                          Ser tratada con respeto y sin discriminaci??n por las
                          autoridades, los servidores p??blicos y los
                          profesionales que te atiendan (m??dicos, abogados,
                          trabajadores sociales, etc.);
                        </li>
                        <li className="mb-4">
                          Contar con el apoyo de un abogado o asesor jur??dico;
                        </li>
                        <li className="mb-4">
                          Ser atendida de forma gratuita (sin que te cobren),
                          neutral (sin que se pongan del lado de la persona
                          agresora) y lo m??s r??pido posible;
                        </li>
                        <li className="mb-4">
                          Negarte a participar en actividades de investigaci??n
                          (???diligencias???), las autoridades no pueden obligarte
                          ni exigirte que las aceptes como condici??n para
                          recibir tu denuncia;
                        </li>
                        <li className="mb-4">
                          No ser ???revictimizada???, es decir, las autoridades, las
                          y los servidores p??blicos y los profesionales que te
                          atiendan deben evitar en todo momento que sus palabras
                          o acciones te hagan sentir culpable de la agresi??n y
                          revivir experiencias traum??ticas, tampoco deben
                          justificar o minimizar la violencia que viviste;
                        </li>
                        <li className="mb-4">
                          Apoyarte de un int??rprete o traductor si no hablas
                          espa??ol o tienes una discapacidad auditiva, verbal o
                          visual.
                        </li>
                      </ul>
                      <p className="mb-4 font-semibold">
                        Adem??s, si eres un ni??o, ni??a o adolescente (menor de 18
                        a??os):
                      </p>

                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          Nadie puede difundir la imagen de tu cara ni tus datos
                          personales (nombre, direcci??n, tel??fono, redes
                          sociales, etc.);
                        </li>
                        <li className="mb-4">
                          Una persona adulta de tu confianza (mam??, pap??, t??a,
                          abuela, etc.) puede acompa??arte en todo momento;
                        </li>
                        <li className="mb-4">
                          Las autoridades tienen la obligaci??n de recibir tu
                          denuncia (incluso, si tu mam??, pap?? o la persona que
                          se encarga de cuidarte no est?? contigo en ese
                          momento);
                        </li>
                        <li className="mb-4">
                          Una psic??loga o psic??logo puede estar a tu lado cuando
                          denuncies o participes en actividades de
                          investigaci??n;
                        </li>
                        <li className="mb-4">
                          Personal de la Procuradur??a de Protecci??n de Ni??as,
                          Ni??os y Adolescentes puede brindarte distintos
                          servicios para que se cumplan todos tus derechos;
                        </li>
                        <li className="mb-4">
                          Ninguna autoridad puede obligarte a que enfrentes de
                          alguna manera a la persona que te agredi?? (no pueden
                          hacer que hables con ??l o est??s cerca suyo).
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading11">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse11"
                      aria-expanded="true"
                      aria-controls="collapse11"
                    >
                      <span className="pr-4">
                        11. ??Qu?? pasa si no estoy segura de denunciar?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse11"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading11"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Es normal si tienes dudas o miedo. Recuerda que tu
                        bienestar siempre ser?? lo m??s importante. Si necesitas
                        atenci??n m??dica o psicol??gica de urgencia ??sta debe ser
                        una prioridad y, en tal caso, puedes indicar a los
                        m??dicos o al personal de la cl??nica u hospital que
                        fuiste agredida sexualmente y que deseas que registren y
                        conserven la informaci??n que obtengan al atenderte para
                        entregarla despu??s al Ministerio P??blico.
                      </p>
                      <p className="mb-4">
                        Si temes olvidar detalles de la agresi??n (o por simple
                        precauci??n) toma notas de lo que vas recordando, esto
                        puede ser muy ??til si decides denunciar despu??s y
                        tambi??n para tu proceso de sanaci??n.
                      </p>
                      <p className="mb-8">
                        Adem??s de presentar una denuncia penal contra la persona
                        agresora considera que hay otras alternativas que
                        podr??as tomar como son:
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Procesos laborales:
                        </span>{" "}
                        Si trabajas en una empresa y has sido v??ctima de
                        hostigamiento o acoso sexual, puedes exigir a los
                        patrones que cumplan con su obligaci??n de aplicar
                        protocolos para atender este tipo de casos tal como lo
                        establece la Ley Federal del Trabajo.
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Procedimientos civiles:
                        </span>{" "}
                        Puedes presentar una ???demanda civil??? contra el la
                        persona agresora para que repare los da??os que te
                        ocasion??, si eliges esto, t?? tendr??s que cubrir el costo
                        de un abogado y de los procedimientos que se necesiten
                        para obtener pruebas que sirvan para ganar la demanda.
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Procedimientos de queja ante las Universidades:
                        </span>{" "}
                        Esta es una opci??n si has vivido una situaci??n de
                        hostigamiento o acoso sexual en una universidad p??blica
                        (UNAM, UAM, UACM, etc.) o privada (Ibero, Tec, Claustro
                        de Sor Juana, etc.) que cuenta con un protocolo o
                        procedimiento para atender estos casos.
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Procedimientos de queja ante las Comisiones de
                          Derechos Humanos:
                        </span>{" "}
                        Si un{" "}
                        <span className="font-semibold">servidor p??blico</span>{" "}
                        te agredi?? sexualmente, no atendi?? tu caso de violencia
                        sexual, lo hizo mal o no cumpli?? las obligaciones que
                        hubieran evitado que esto te pasar??, puedes presentar
                        una queja en su contra en la Comisi??n de Derechos
                        Humanos.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading12">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse12"
                      aria-expanded="true"
                      aria-controls="collapse12"
                    >
                      <span className="pr-4">
                        12. Ya denunci??, ??ahora qu?? sigue?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse12"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading12"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Denunciar es el primer paso para que las autoridades
                        comiencen a investigar el delito que viviste.
                        Espec??ficamente, el{" "}
                        <span className="font-semibold">
                          fiscal o agente del Ministerio P??blico
                        </span>{" "}
                        es responsable de realizar (con el apoyo de la polic??a)
                        las{" "}
                        <span className="font-semibold">
                          actividades de investigaci??n
                        </span>{" "}
                        (???diligencias???) que se necesiten para obtener
                        informaciones, pruebas o evidencias que sirvan para
                        demostrar el delito e identificar al agresor.
                      </p>
                      <p className="mb-4">
                        En esta etapa, las autoridades podr??an comunicarse
                        contigo -por tel??fono, correo electr??nico o con un aviso
                        por escrito (???citatorio???) que llegue a tu casa o a la
                        oficina de tu abogado- y pedirte que acudas a una cita
                        para que:
                      </p>

                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          "Ampl??es tu declaraci??n", es decir, des m??s
                          informaci??n sobre algo que dijiste al denunciar, de
                          esta manera las autoridades podr??n aclarar sus dudas y
                          saber detalladamente todo lo que pas??;
                        </li>
                        <li className="mb-4">
                          Des tu permiso y participes en una actividad de
                          investigaci??n o ???diligencia??? (recuerda que puedes
                          negarte a participar, las autoridades no podr??n
                          obligarte ni poner esto como excusa para dejar de
                          investigar);
                        </li>
                        <li className="mb-4">
                          Te informen c??mo han avanzado con la investigaci??n y
                          qu?? actividades llevar??n a cabo.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading13">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse13"
                      aria-expanded="true"
                      aria-controls="collapse13"
                    >
                      <span className="pr-4">
                        13. ??C??mo seguir de cerca la investigaci??n de tu caso?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse13"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading13"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Para que las autoridades sigan investigando el delito y
                        lo hagan correctamente, es muy importante que lleves a
                        cabo las siguientes acciones{" "}
                        <span className="font-semibold">
                          con el apoyo de tu abogado o asesor jur??dico victimal:
                        </span>
                      </p>
                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          Si tienes alguna prueba o evidencia de la agresi??n
                          sexual entr??gala al agente del Ministerio P??blico.
                        </li>
                        <li className="mb-4">
                          Si tienes informaci??n sobre la agresi??n sexual que no
                          mencionaste al momento de denunciar (porque es algo
                          que reci??n recordaste, descubriste o te enteraste) ve
                          a la Fiscal??a o ???MP??? para ???ampliar tu declaraci??n???.
                        </li>
                        <li className="mb-4">
                          Si encontraste a alguien que fue testigo de lo que
                          pas?? antes, durante o despu??s de la agresi??n, puedes
                          pedirle al fiscal o agente del Ministerio P??blico que
                          cite a esa persona para que diga lo que sabe.
                        </li>
                        <li className="mb-4">
                          Solicita el ???plan de investigaci??n??? dise??ado por el
                          fiscal o agente del Ministerio P??blico (es su
                          obligaci??n incluir en este documento: los objetivos de
                          la investigaci??n, las estrategias que seguir?? y las
                          actividades o ???diligencias??? que realizar?? para
                          demostrar el delito e identificar a la persona
                          agresora, aclarando qu?? tareas llevar?? a cabo ??l y
                          cu??les la polic??a).
                        </li>
                        <li className="mb-4">
                          Re??nete con el fiscal o agente del Ministerio P??blico
                          para que te informe los avances de la investigaci??n,
                          es decir, para que te explique qu?? acciones ha
                          realizado, cu??les le faltan, qu?? ha comprobado y qu??
                          tiene pendiente demostrar.
                        </li>
                        <li className="mb-4">
                          Pide una copia de la ???carpeta de investigaci??n???. En
                          ??sta encontrar??s un registro de las actividades m??s
                          importantes que ha realizado el fiscal o agente del
                          Ministerio P??blico para investigar tu caso (el tama??o
                          de la carpeta no refleja la calidad de su trabajo,
                          ??ste es deficiente si no sigue un ???plan de
                          investigaci??n??? o se enfoca en actividades in??tiles o
                          sin sentido). Haz esta petici??n por escrito se??alando
                          claramente que quieres una copia gratuita de todo lo
                          que aparece en esta carpeta.
                        </li>
                        <li className="mb-4">
                          Si no te dan una copia de la carpeta de investigaci??n
                          o cualquier informaci??n que necesites, solicita (con
                          ayuda de tu abogado o asesor jur??dico victimal) una
                          ???audiencia de impugnaci??n??? a un ???juez de control???,
                          esta autoridad puede ordenarles que te entreguen la
                          copia o la informaci??n que te han negado.
                        </li>
                        <li className="mb-4">
                          Si presentaste una denuncia hace tiempo y, por
                          cualquier raz??n, no le diste seguimiento, lo mejor es
                          que vayas a la Fiscal??a o ???MP??? donde denunciaste ???de
                          ser posible, con tu abogado o asesor jur??dico victimal
                          y el n??mero de ???carpeta de investigaci??n??? o
                          ???averiguaci??n previa?????? para:
                        </li>
                        <li className="font-semibold">
                          preguntar el nombre completo y el tel??fono del fiscal
                          o agente del Ministerio P??blico encargado de tu caso;
                        </li>
                        <li className="font-semibold">
                          pedir que actualicen el estado de la investigaci??n; y
                        </li>
                        <li className="font-semibold">
                          ???ampliar tu declaraci??n??? si recordaste o conseguiste
                          m??s informaci??n sobre el delito que se cometi?? contra
                          ti.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading14">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse14"
                      aria-expanded="true"
                      aria-controls="collapse14"
                    >
                      <span className="pr-4">
                        14. ??C??mo solicitar "diligencias" y "peritajes" para
                        demostrar la agresi??n?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse14"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading14"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Las ???diligencias??? son las acciones que realiza el fiscal
                        o agente del Ministerio P??blico ???solo o con la ayuda de
                        polic??as o especialistas (???peritos???)??? para obtener
                        pruebas o evidencias del delito.
                      </p>
                      <p className="mb-4">
                        Las siguientes diligencias pueden ser muy ??tiles en la
                        investigaci??n de delitos sexuales:
                      </p>
                      <ul className="list-disc pl-6 font-semibold">
                        <li className="mb-4">Inspecci??n ocular</li>
                        <li className="mb-4">Reconstrucci??n de hechos</li>
                        <li className="mb-4">
                          Desahogo de testimoniales (entrevistas)
                        </li>
                        <li className="mb-4">
                          Solicitud de v??deos de vigilancia
                        </li>
                        <li className="mb-4">Cateo</li>
                      </ul>

                      <p className="mb-4">
                        Adem??s de estas diligencias, puedes pedir al fiscal o
                        agente del Ministerio P??blico que se lleven a cabo
                        ???peritajes???, es decir, que una persona especialista o
                        experta (???perito???) realice acciones y an??lisis
                        cient??ficos para obtener informaci??n o pruebas del
                        delito. Esto es muy recomendable si consideras que no se
                        ha investigado tu caso adecuadamente o crees que un
                        peritaje puede complementar el trabajo hecho por las
                        autoridades.
                      </p>

                      <p className="mb-4">
                        Algunos peritajes que puedes solicitar para comprobar
                        delitos sexuales son:
                      </p>

                      <ul className="list-disc pl-6 font-semibold">
                        <li className="mb-4">Peritaje en medicina forense</li>
                        <li className="mb-4">Peritaje en criminolog??a</li>
                        <li className="mb-4">
                          Peritaje en biolog??a o qu??mica forense
                        </li>
                        <li className="mb-4">Peritaje en psicolog??a forense</li>
                        <li className="mb-4">Peritaje en criminal??stica</li>
                        <li className="mb-4">
                          Peritaje en pr??ctica de Protocolo de Estambul
                        </li>
                        <li className="mb-4">
                          Peritajes sociales con perspectiva de g??nero
                        </li>
                        <li className="mb-4">Peritaje inform??tico</li>
                      </ul>
                      <p className="mb-4">
                        <span className="font-semibold"> Recuerda:</span> Tienes
                        derecho a saber qu?? diligencias se realizan y qu??
                        resultados arrojan, el fiscal o agente del Ministerio
                        P??blico tiene la obligaci??n de mantenerte informada
                        sobre esto). Con la ayuda de tu abogado o abogada puedes
                        solicitar que se lleven a cabo otras diligencias (si la
                        autoridad ignora o rechaza tu petici??n, puedes presentar
                        una queja en la Comisi??n de Derechos Humanos o en el
                        ?????rgano interno de control??? de la Fiscal??a).
                      </p>

                      <p className="mb-4 font-semibold">
                        Si deseas conocer con mayor detalle a qu?? se refieren
                        las diligencias y peritajes aqu?? mencionados{" "}
                        <a
                          href="https://docs.google.com/document/d/1TTTLNSx7FkVpj_81xRlozfYr31b80vSdMOe04Ym1wtI/"
                          target="_blank"
                          className="text-marron font-semibold underline"
                        >
                          revisa este documento.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading15">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse15"
                      aria-expanded="true"
                      aria-controls="collapse15"
                    >
                      <span className="pr-4">
                        15. ??Qu?? puedo hacer si ya no quiero que se investigue
                        el delito?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse15"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading15"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Si fuiste v??ctima de un delito que se investiga por
                        querella (estupro, hostigamiento sexual, acoso sexual,
                        abuso sexual, contra la intimidad sexual o violencia
                        familiar), puedes pedir que ya no contin??e la
                        investigaci??n ni el juicio mediante las siguientes
                        acciones:
                      </p>
                      <p className="mb-4 text-2xl">Perd??n de la v??ctima</p>
                      <ul className="list-disc font-semibold pl-6">
                        <li>??Qu?? es?</li>
                      </ul>
                      <p className="mb-4">
                        Es ???perdonar legalmente??? a la persona agresora para que
                        ya no sea investigado ni juzgado.
                      </p>
                      <ul className="list-disc font-semibold pl-6">
                        <li>??Cu??ndo se puede?</li>
                      </ul>
                      <p className="">
                        En cualquier momento (puedes otorgar el perd??n acudiendo
                        con el fiscal o agente del Ministerio P??blico durante la
                        investigaci??n y con el juez desde que inicia el proceso
                        para que la persona agresora sea juzgado hasta poco
                        antes de que termine de cumplir su sentencia).
                      </p>
                      <p className="mb-4">
                        ??nicamente aplica en delitos que se investigan por
                        ???querella??? (acoso sexual, hostigamiento sexual, contra
                        la intimidad sexual, estupro, violaci??n entre personas
                        que viven en matrimonio o uni??n libre, etc.).
                      </p>
                      <ul className="list-disc font-semibold pl-6">
                        <li>??Qu?? implica?</li>
                      </ul>
                      <p className="">
                        Una vez que otorgues el perd??n, no podr??s pedir que el
                        delito se investigue de nuevo ni que la persona agresora
                        sea llevada a juicio por lo que te hizo.
                      </p>
                      <p className="mb-4">
                        Dif??cilmente se tomar??n medidas para reparar los da??os
                        f??sicos, emocionales, morales, econ??micos, educativos,
                        laborales, etc. que te caus?? la agresi??n.
                      </p>
                      <p className="mb-4 text-2xl">Acuerdos reparatorios</p>
                      <ul className="list-disc font-semibold pl-6">
                        <li>??Qu?? es?</li>
                      </ul>
                      <p className="mb-4">
                        Son medidas que puedes acordar con la persona agresora
                        para que repare los da??os f??sicos, emocionales, morales,
                        econ??micos, educativos, laborales, etc. que te caus?? el
                        delito y ya no se le investigue y sancione.
                      </p>
                      <ul className="list-disc font-semibold pl-6">
                        <li>??Cu??ndo se puede?</li>
                      </ul>
                      <p className="mb-4">
                        Desde que inicia la investigaci??n y antes de que haya
                        una resoluci??n judicial que confirme que se realizar?? el
                        juicio oral.
                      </p>
                      <p className="mb-4">
                        ??nicamente aplica en delitos que se investigan por
                        ???querella??? (acoso sexual, hostigamiento sexual, contra
                        la intimidad sexual, estupro, violaci??n entre personas
                        que viven en matrimonio o uni??n libre, etc.).
                      </p>
                      <ul className="list-disc font-semibold pl-6">
                        <li>??Qu?? implica?</li>
                      </ul>
                      <p className="mb-8">
                        La persona agresora tiene que reparar los da??os que te
                        caus??, si no cumple con lo acordado, seguir?? siendo
                        investigado o juzgado.
                      </p>
                      <p className="mb-4">
                        En los casos de{" "}
                        <span className="font-semibold">
                          violaci??n o tortura sexual
                        </span>
                        , las autoridades tienen la obligaci??n de seguir
                        investigando, aunque t?? no quieras. Si deseas abandonar
                        este proceso, aqu?? te decimos qu?? puedes hacer y qu??
                        podr??a pasar:
                      </p>
                      <p className="mb-4 text-2xl">
                        Ya no le prestes atenci??n a la investigaci??n
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Si te decides por esto, es probable que las
                          autoridades no investiguen m??s, porque es dif??cil
                          llegar a juicio si la v??ctima no participa ni sigue de
                          cerca la investigaci??n, a??n as?? podr??an citarte:
                        </li>
                      </ul>
                      <p className="mb-4">
                        Si es un fiscal o agente del Ministerio P??blico y tu
                        citatorio no dice que te pondr??n una multa o sanci??n si
                        faltas: no tienes que ir;
                      </p>
                      <p className="mb-4">
                        Si es un juez: tienes la obligaci??n de presentarte, pero
                        no te pueden exigir que digas algo m??s sobre el delito.
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Es muy posible que las autoridades archiven tu caso o
                          lo cierren diciendo que no se cometi?? un delito.
                        </li>
                      </ul>
                      <p className="mb-4 font-semibold">
                        Acude con las autoridades y proponles la ???suspensi??n
                        condicional del proceso???
                      </p>
                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          Si eliges esta opci??n, el proceso jur??dico contra la
                          persona agresora se pondr?? en pausa (m??nimo 6 meses y
                          m??ximo 3 a??os) y ??l estar?? en libertad con la
                          condici??n de que use ese tiempo para reparar los da??os
                          que te caus?? y obedecer otras exigencias que le haga
                          el juez.
                        </li>
                        <li className="mb-4">
                          Cuando la persona agresora repare los da??os y cumpla
                          las dem??s ??rdenes del juez, se terminar?? este asunto;
                          si desobedece, el proceso en su contra se retomar??
                          desde donde se dej??.
                        </li>
                        <li className="mb-4">
                          Aunque solicitar la ???suspensi??n condicional del
                          proceso??? es un derecho de la a persona agresora y no
                          de la v??ctima, t?? puedes decirle al fiscal o agente
                          del Ministerio P??blico que esto te interesa, de tal
                          forma que dicha autoridad sugiera esta alternativa al
                          abogado de la persona agresora.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading16">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse16"
                      aria-expanded="true"
                      aria-controls="collapse16"
                    >
                      <span className="pr-4">
                        16. ??Qu?? pasar?? despu??s de que se investigue el delito?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse16"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading16"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4 text-marron">
                        Es importante que sepas que en M??xico menos del 10% de
                        los delitos denunciados llegan a un juicio.
                      </p>
                      <p className="mb-4">
                        Es imposible saber cu??nto tiempo durar?? la investigaci??n
                        del delito, podr??a terminar despu??s de meses o a??os, su
                        duraci??n depende del trabajo que se necesita para
                        conseguir las pruebas que demuestren c??mo fuiste
                        agredida y qui??n lo hizo. Por esta raz??n, nunca se
                        justifica que una investigaci??n tarde mucho tiempo
                        simplemente porque las autoridades han dejado de
                        trabajar en la misma.
                      </p>
                      <p className="mb-4">
                        El fiscal o agente del Ministerio P??blico debe avisarte
                        que termin?? de investigar, para lo cual hablar?? por
                        tel??fono contigo o con tu abogado o asesor jur??dico
                        victimal y despu??s enviar?? un escrito al domicilio que
                        hayas dado.
                      </p>
                      <p className="mb-4">
                        Despu??s de investigar el delito, el fiscal o agente del
                        Ministerio P??blico puede tomar las siguientes
                        decisiones:
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Presentar una acusaci??n contra la persona agresora
                          (???formular la imputaci??n???):
                        </span>{" "}
                        El fiscal o agente del Ministerio P??blico le pedir?? a un
                        juez que la persona agresora sea llevado a juicio y le
                        presentar?? una acusaci??n (???imputaci??n???) donde explique
                        los detalles del delito que investig?? y la manera en que
                        comprob?? la agresi??n. A partir de este momento, el
                        fiscal o agente del Ministerio P??blico tendr?? m??ximo 6
                        meses para obtener las pruebas que hagan falta.
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Descartar el delito y no seguir el proceso contra la
                          persona agresora (???no ejercer la acci??n penal???):
                        </span>{" "}
                        Cuando el fiscal o agente del Ministerio P??blico
                        concluye que no se cometi?? un delito, ya no presenta al
                        juez una acusaci??n contra la persona agresora y el caso
                        se cierra.
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Archivar la investigaci??n:
                        </span>{" "}
                        La investigaci??n se suspende o ???archiva??? temporalmente
                        si el fiscal o agente del Ministerio P??blico considera
                        que ya investig?? todo lo posible, no encuentra m??s
                        pruebas y las que tiene no alcanzan para demostrar el
                        delito. La investigaci??n se retomar?? cuando aparezcan o
                        puedan obtenerse nuevas pruebas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading17">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse17"
                      aria-expanded="true"
                      aria-controls="collapse17"
                    >
                      <span className="pr-4">
                        17. ??Qu?? pasar?? con la persona agresora?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapse17"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading17"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        Cuando el fiscal o agente del Ministerio P??blico haya
                        obtenido suficientes pruebas para demostrar que el la
                        persona agresora cometi?? un delito contra ti, podr??
                        solicitar una reuni??n (???audiencia inicial???) con un ???juez
                        de control??? y la persona agresora ser?? citado o, si no
                        fue detenido al momento de cometer el delito, se
                        ordenar?? que sea presentado o arrestado para que conozca
                        la investigaci??n en su contra. Una vez que el la persona
                        agresora se presente voluntariamente o sea capturado, se
                        realizar?? la audiencia inicial, en la cual:
                      </p>
                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          El juez de control revisar?? que el arresto se haya
                          realizado siguiendo las reglas que establece la Ley;
                        </li>
                        <li className="mb-4">
                          La persona agresora ser?? informado sobre la
                          investigaci??n que hay en su contra;
                        </li>
                        <li className="mb-4">
                          El fiscal o agente del Ministerio P??blico pedir?? que
                          la persona agresora sea llevada a juicio;
                        </li>
                        <li className="mb-4">
                          El juez de control evaluar?? si hay pruebas suficientes
                          para que la persona agresora sea llevada a juicio:
                        </li>
                      </ul>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Si considera que las pruebas son insuficientes:
                        </span>{" "}
                        le pedir?? al fiscal o agente del Ministerio P??blico que
                        siga investigando.
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Si confirma que hay pruebas suficientes:
                        </span>{" "}
                        el fiscal o agente del Ministerio P??blico tendr?? m??ximo
                        6 meses para perfeccionar su investigaci??n y cuando est??
                        lista podr?? presentarla a otro juez en el juicio contra
                        la persona agresora.
                      </p>
                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          El juez de control ordenar?? ???medidas cautelares???, es
                          decir, acciones para evitar que la persona agresora
                          escape, te cause m??s da??os o destruya evidencias, por
                          ejemplo, puede prohibirle que se vaya de la ciudad,
                          hacer que use un brazalete electr??nico para que las
                          autoridades sepan d??nde est?? en todo momento o
                          mandarlo a la c??rcel hasta que sea sentenciado
                          (???prisi??n preventiva???).
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header mb-0" id="heading18">
                    <button
                      className="accordion-button collapsed relative flex items-center w-full py-6 sm:py-4 pl-16 sm:pl-8 pr-16 sm:pr-16 !rounded-none text-lg !text-gray1 font-medium text-left bg-white border-b-2 border-beige1 transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse18"
                      aria-expanded="true"
                      aria-controls="collapse18"
                    >
                      <span className="pr-4">18. ??C??mo terminar?? mi caso?</span>
                    </button>
                  </h2>
                  <div
                    id="collapse18"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading18"
                  >
                    <div className="accordion-body bg-beige1 text-lg text-white pt-6 sm:pt-12 pb-8 sm:pb-16 sm:px-20 px-16">
                      <p className="mb-4">
                        El proceso jur??dico contra la persona agresora que
                        comienza cuando le denuncias (???proceso penal???) puede
                        acabar en:
                      </p>
                      <p className="mb-4 text-marron font-semibold">
                        Acuerdos reparatorios
                      </p>

                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          Como v??ctima puedes ponerte de acuerdo con la persona
                          agresora para que repare los da??os f??sicos,
                          emocionales, morales, econ??micos, educativos,
                          laborales, etc. que te caus?? el delito a cambio de que
                          ya no se le investigue ni sancione. Es muy importante
                          que t?? est??s satisfecha con la propuesta de reparaci??n
                          que haga la persona agresora (puedes rechazarla si no
                          cumple con lo que quieres y necesitas).
                        </li>
                        <li className="mb-4">
                          Estos acuerdos tienen que ser aprobados por el ???juez
                          de control??? o por el fiscal o agente del Ministerio
                          P??blico.
                        </li>
                        <li className="mb-4">
                          La persona agresora tiene que reparar los da??os que te
                          caus??, si no cumple con lo acordado, seguir?? siendo
                          investigada o juzgada.
                        </li>
                        <li className="mb-4">
                          Puedes tomar esta alternativa desde que inicia la
                          investigaci??n y antes de que haya una resoluci??n
                          judicial que confirme que se realizar?? el juicio oral.
                        </li>
                        <li className="mb-4">
                          S??lo aplica en los delitos que se investigan por
                          ???querella??? y permiten el perd??n de la v??ctima (los
                          casos de violencia familiar no pueden resolverse de
                          esta manera).
                        </li>
                      </ul>
                      <p className="mb-4 text-marron font-semibold">
                        Suspensi??n condicional del proceso
                      </p>

                      <p className="mb-4 font-semibold">??Qu?? implica?</p>

                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          El proceso jur??dico contra la persona agresora se
                          pondr?? en pausa (m??nimo 6 meses y m??ximo 3 a??os) antes
                          de que llegue el juicio y ??l estar?? en libertad con la
                          condici??n de que use ese tiempo para reparar los da??os
                          f??sicos, emocionales, morales, econ??micos, educativos,
                          laborales, etc. que te caus?? y obedecer otras
                          exigencias que le haga el juez como no tener armas,
                          estar vigilado, tomar terapia psicol??gica, aprender un
                          oficio, trabajar sin paga a favor de la comunidad,
                          etc.
                        </li>
                        <li className="mb-4">
                          Cuando la persona agresora repare los da??os y cumpla
                          las dem??s ??rdenes del juez, se terminar?? este asunto;
                          si desobedece, el proceso en su contra se retomar??
                          desde donde se dej??.
                        </li>
                        <li className="mb-4">
                          No aplica en todos los casos (para saber si tu caso
                          puede resolverse de esta manera consulta a tu abogado
                          o asesor jur??dico victimal o al fiscal o agente del
                          Ministerio P??blico).
                        </li>
                      </ul>
                      <p className="mb-4 text-marron font-semibold">
                        Procedimiento abreviado
                      </p>

                      <p className="mb-4 font-semibold">??Qu?? implica?</p>

                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          La persona agresora renuncia a su derecho a un juicio
                          a cambio de una sanci??n menor.
                        </li>
                        <li className="mb-4">
                          La persona agresora acepta que cometi?? el delito y es
                          sentenciado con las pruebas que se hayan obtenido
                          hasta ese momento.
                        </li>
                        <li className="mb-4">
                          Puede aplicarse a cualquier delito.
                        </li>
                        <li className="mb-4">
                          Como v??ctima s??lo puedes oponerte a este procedimiento
                          si no te aseguran medidas adecuadas para reparar los
                          da??os f??sicos, emocionales, morales, econ??micos,
                          educativos, laborales, etc. que te caus?? el delito o
                          no se ha cumplido tu ???derecho a la verdad??? (es decir,
                          que las autoridades reconozcan todo lo que te hizo la
                          persona agresora).
                        </li>
                      </ul>
                      <p className="mb-4 text-marron font-semibold">Juicio</p>

                      <p className="mb-4 font-semibold">??Qu?? implica?</p>

                      <ul className="list-disc pl-6">
                        <li className="mb-4">
                          Para que haya un juicio es necesario que antes un
                          ???juez de control??? apruebe la investigaci??n del delito
                          que realiz?? el fiscal o agente del Ministerio P??blico
                          y confirme que hay pruebas suficientes para que la
                          persona agresora sea llevado a juicio.
                        </li>
                        <li className="mb-4">
                          Durante el juicio, un juez diferente valorar?? lo que
                          han dicho los testigos, lo que encontraron los
                          especialistas (???peritos???) y las dem??s pruebas o
                          evidencias que presente tu abogado o asesor jur??dico
                          victimal, el fiscal o agente del Ministerio P??blico y
                          el abogado que defiende a la persona agresora.
                        </li>
                        <li className="mb-4">
                          Como v??ctima tienes derecho a estar presente en todo
                          el juicio y es probable que en alg??n momento te pidan
                          que respondas las preguntas de tu abogado o asesor
                          jur??dico victimal, del fiscal o agente del Ministerio
                          P??blico y del abogado que defiende a la persona
                          agresora.
                        </li>
                        <li className="mb-4">
                          Si la persona agresora te hace sentir inc??moda,
                          amenazada o con miedo, puedes estar en otra sala y
                          contar con una videoconferencia para observar y
                          participar en el juicio.
                        </li>
                        <li className="mb-4">
                          Al final del juicio, el juez decidir?? si la persona
                          agresora es responsable del delito y en otro momento
                          fijar?? su sanci??n.
                        </li>
                        <li className="mb-4">
                          Todas las decisiones que tome el juez respecto a tu
                          caso aparecer??n en un documento llamado ???sentencia???.
                        </li>
                        <li className="mb-4">
                          Si la sentencia dice que la persona agresora es
                          ???inocente???, el fiscal o agente del Ministerio P??blico
                          y tu abogado o asesor jur??dico victimal pueden
                          oponerse a la decisi??n del juez presentando un
                          ???recurso de apelaci??n??? o, m??s adelante, un ???juicio de
                          amparo???, los cuales ser??n revisados por otras
                          autoridades (mientras tanto la persona agresora podr??
                          estar en libertad).
                        </li>
                        <li className="mb-4">
                          Si la persona agresora es encontrada ???culpable??? podr??a
                          ir a la c??rcel, pero es probable que trate de evitar
                          esto tramitando una ???apelaci??n??? o un ???amparo directo???
                          (??l seguir?? en la c??rcel mientras las autoridades
                          revisan estos recursos y deciden si cambian o no la
                          sentencia). Como v??ctima tienes derecho a que las
                          autoridades te informen si la persona agresora
                          presenta estos recursos y con la ayuda de tu abogado o
                          asesor jur??dico victimal puedes presentar argumentos
                          jur??dicos para que la sentencia no sea modificada.
                        </li>
                        <li className="mb-4">
                          La sentencia se??alar?? las medidas para reparar los
                          da??os que te caus?? el delito y las autoridades que se
                          har??n cargo de supervisar que esas medidas se lleven a
                          cabo.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <p className="text-xl mt-16">
                Si deseas descargar las preguntas y respuestas que se presentan
                en esta p??gina, hazlo{" "}
                <a
                  href="https://drive.google.com/file/d/1Jh7Sbn5jsleAxVjnCV-OuWLPYzoY7eVW/view?usp=sharing"
                  className="font-semibold text-marron"
                  target="_blank"
                >
                  aqu??
                </a>
                .
              </p>
              <p className="text-xl sm:text-3xl py-8">
                Si requieres acompa??amiento legal conoce las organizaciones que
                pueden apoyarte.
              </p>
              <Button
                text={"Directorio"}
                variant={"beige"}
                action={() => navigate("/directorio")}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SistemaJusticia
