import Link from "next/link";

export default async function Home() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Explorador de personagens</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {data.results.map((character: any) => (
          <div key={character.id} className="w-75 border p-4 rounded dark:hover:bg-white dark:hover:text-black hover:rounded-sm duration-300">
            <h2>{character.name}</h2>

            <Link
              href={`/character/${character.id}`}
              className="text-blue-500 hover:underline"
            >
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
