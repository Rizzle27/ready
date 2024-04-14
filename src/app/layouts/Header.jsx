import Image from "next/image"

export default function Header() {
  return(
    <header className="flex justify-between items-center">
      {/* Add project */}
      <div>
        <button className="bg-cranberry rounded-full py-2 px-4 font-semibold text-sm text-white">+ Proyecto</button>
      </div>

      {/* Profile and options */}
      <div className="flex gap-4 p-2">
        <div className="w-10 h-10 bg-cranberry rounded-full"></div>
        <button>
          <Image src={'/icons/chevron-icon.svg'} alt="Opciones" width={13} height={7} />
        </button>
      </div>
    </header>
  )
}