import { Clock } from "../components/Clock";
import Image from "next/image";
import Link from "next/link";
import { URL_DASHBOARD, URL_TASKS } from "../../../constants/constants";

export default function Dashboard() {

  return(
    <div className="flex flex-col gap-6 lg:w-2/3">
      {/* Left */}
      <section className="flex flex-col gap-6">
        {/* Welcome */}
        <div className="flex justify-between px-6 py-4 rounded-[20px] shadow-cardShadow">
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-3xl font-semibold">¡Buenos días, McLovin!</h1>
            <span className="font-normal text-starDust">Tené un lindo día de trabajo.</span>
            <Clock />
          </div>
          <div>
            <Image src={'/illustrations/work-illustration.png'} alt='Persona trabajando' width={144} height={176} />
          </div>
        </div>

        {/* Projects */}
        <div className="bg-iron p-4 rounded-[20px] text-center">
          <span className="text-[24px] font-medium text-white">No tenés proyectos</span>
        </div>

        {/* Tasks */}
        <div className="flex flex-col gap-14 px-6 py-8 rounded-[20px] shadow-cardShadow">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-2xl">Tu próximo trabajo</span>
            <Link href={`/${URL_DASHBOARD}/${URL_TASKS}`}>
              <span className="text-cranberry text-base">Ver todas</span>
            </Link>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <Image src={'/illustrations/happy-illustration.png'} alt="Persona feliz" width={240} height={240} />
            <span className="text-starDust">No tenés tareas</span>
          </div>
        </div>
      </section>

      {/* Right */}
      <section className="flex flex-col flex-1 gap-4 lg:w-2/3">
        <h1>oooo</h1>
      </section>
    </div>
  )
}