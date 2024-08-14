import { IBM_Plex_Sans as IbmFont } from "next/font/google";

const font = IbmFont({
  weight: "400",
  subsets: ["latin"],
});

export function Rights() {
  return (
    <div className="flex items-center justify-center py-6 text-sm text-white text-opacity-[0.44] w-full">
      <span>STARSOFT © TODOS OS DIREITOS RESERVADOS</span>
    </div>
  );
}
