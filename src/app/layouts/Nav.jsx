import Link from "next/link"
import Image from "next/image"
import { URL_DASHBOARD, URL_NOTIFICATIONS, URL_TASKS } from "../../../constants/constants"

export default function Nav() {
  return(
    <nav className="flex flex-col gap-4 ps-8 py-8 w-[20%] bg-white">
      <Link className="mb-4" href={`/${URL_DASHBOARD}`}>
        <Image src={'/icons/ready-logo-2.svg'} alt="Logo de ready." width={148} height={44} priority={true} />
      </Link>
      <div className="flex flex-col gap-4 text-lg">
        <Link className="flex gap-4 p-2" href={`/${URL_DASHBOARD}`}>
          <Image className="w-auto h-auto" src={'/icons/dashboard-icon.svg'} alt="Panel" width={20} height={20} priority={true} />
          <span>Panel</span>
        </Link>
        <Link className="flex gap-4 p-2" href={`/${URL_DASHBOARD}/${URL_NOTIFICATIONS}`}>
          <Image className="w-auto h-auto" src={'/icons/notification-icon.svg'} alt="Notificaciones" width={20} height={20} priority={true} />
          <span>Notificaciones</span>
        </Link>
        <Link className="flex gap-4 p-2" href={`/${URL_DASHBOARD}/${URL_TASKS}`}>
          <Image className="w-auto h-auto" src={'/icons/tasks-list-icon.svg'} alt="Tus tareas" width={20} height={20} priority={true} />
          <span>Tus tareas</span>
        </Link>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <span>Tus proyectos</span>
        <div className="flex flex-col gap-2 text-lg">
          <Link className="p-2" href={'/'}>
            <span>Proyecto 1</span>
          </Link>
          <Link className="p-2" href={'/'}>
            <span>Proyecto 2</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}