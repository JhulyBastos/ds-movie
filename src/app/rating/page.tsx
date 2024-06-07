import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export default function RatingPage() {
  return (
    <main className="w-full h-screen">
      <div className="bg-brand-color w-full h-full">
        <div className="bg-dark-60 mt-6 px-8 py-14">
          <h1 className="text-dark-10 text-5xl font-roboto font-semibold">
            DSMovie
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center flex-col mt-32 gap-14">
            <h1 className="text-5xl">IMAGEM DO FILME</h1>
            <h1>NOME DO FILME</h1>
          </div>
          <div className="flex flex-col items-start mt-4 gap-2 text-dark-30">
            <h1>Informe o seu e-mail:</h1>
            <div className="text-dark-10">
              <Input type="email" placeholder="E-mail" />
            </div>
            <h1>Sua avaliação:</h1>
          </div>
          <div className="mt-10">
            <h1>ESTRELINHAS</h1>
          </div>
          <div className="flex flex-col justify-center gap-2 mt-5">
            <Button className=" border-2 rounded-3xl text-dark-30 border-dark-30 py-[2px] px-7 hover:bg-dark-30 hover:text-dark-10 hover:font-semibold">
              Enviar
            </Button>
            <Button className=" border-2 rounded-3xl text-dark-30 border-dark-30 py-[2px] px-7 hover:bg-dark-30 hover:text-dark-10 hover:font-semibold">
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
