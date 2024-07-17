"use client";
import ReactStars from "react-rating-stars-component";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { movies } from "@/data/movies";
import { Movie } from "@/types/Movie";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RatingPage() {
  const pathname = usePathname();
  const id = pathname.replace("/", "");
  const [movie, setMovie] = useState<Movie>();
  const [score, setScore] = useState(0);
  const router = useRouter();
  function ratingChanged(score: number) {
    setScore(score);
  }
  const notify = () =>
    toast.success("Enviado com sucesso!!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  useEffect(() => {
    if (id) {
      const foundMovie = movies.find(
        (movie) => movie.id === parseInt(id as string)
      );
      setMovie(foundMovie);
    }
  }, [id]);

  if (!movie) {
    return <div>Carregando...</div>;
  }

  return (
    <main className="w-full h-screen">
      <div className="bg-brand-color w-full h-full">
        <div className="bg-dark-60 mt-6 px-8 py-14">
          <h1 className="text-dark-10 text-5xl font-roboto font-semibold">
            DSMovie
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center flex-col mt-14 gap-5">
            <img className="w-[200px] h-[300px]" src={movie.imagem} alt="" />
            <h1 className="text-2xl">{movie.filme}</h1>
          </div>
          <div className="flex flex-col items-start mt-4 gap-2 text-dark-30">
            <h1>Informe o seu e-mail:</h1>
            <div className="text-dark-10">
              <Input type="email" placeholder="E-mail" />
            </div>
            <h1>Sua avaliação:</h1>
          </div>
          <div className="mt-10">
            <ReactStars
              count={5}
              onChange={(score: number) => score && ratingChanged(score)}
              size={50}
              isHalf={true}
            />
          </div>
          <div className="flex flex-col justify-center gap-2 mt-5">
            <Button
              onClick={notify}
              className=" border-2 rounded-3xl text-dark-30 border-dark-30 py-[2px] px-7 hover:bg-dark-30 hover:text-dark-10 hover:font-semibold"
            >
              Enviar
            </Button>
            <Button
              onClick={() => router.back()}
              className=" border-2 rounded-3xl text-dark-30 border-dark-30 py-[2px] px-7 hover:bg-dark-30 hover:text-dark-10 hover:font-semibold"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}
