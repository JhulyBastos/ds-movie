import { Movie } from "@/types/Movie";
import { Button } from "../Button";

interface CardProps {
  movie: Movie;
}

export function Card({ movie }: CardProps) {
  return (
    <div className=" w-full max-w-[200px] h-[336px] mb-10">
      <div className="flex justify-center  gap-14 w-full max-w-[200px] mb-1">
        <div className="flex justify-center items-center gap-[2px]">
          <img className=" w-4 h-[15px]" src="/assets/svg/star.svg" alt="" />
          <p className="text-dark-40 text-sm">{movie.nota}/5</p>
        </div>
        <p className="text-dark-40 text-sm">
          {movie.numeroAvaliacoes} Avaliações
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="w-[200] h-[220px] hover:scale-105 duration-300"
          src={movie.imagem}
          alt=""
        />
      </div>
      <div className="flex justify-center items-center mt-1">
        <p>{movie.filme}</p>
      </div>
      <div className="flex justify-center items-center mt-5">
        <Button className=" border-2 rounded-3xl text-dark-30 border-dark-30 py-[2px] px-4 hover:bg-dark-30 hover:text-dark-10 hover:font-semibold">
          Avaliar
        </Button>
      </div>
    </div>
  );
}
