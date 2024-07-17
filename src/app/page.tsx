import { Card } from "@/components/Card";
import { movies } from "@/data/movies";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="bg-brand-color w-full h-full">
        <div className="bg-dark-60 mt-6 px-8 py-14">
          <h1 className="text-dark-10 text-5xl font-roboto font-semibold">
            DSMovie
          </h1>
        </div>
        <div className="grid grid-cols-5 flex-1 w-full h-full place-items-center px-16 py-12">
          {movies.map((movie) => (
            <Card key={movie.filme} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
}
