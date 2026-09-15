import Link from "next/link";

export default async function CharacterDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
  );
  const character = await response.json();

  return (
    <main className="flex flex-col items-center justify-center p-8">
      <div className="p-4 rounded text-center bg-amber-700 mb-8">
        <h1 className="text-4xl font-bold">{character.name}</h1>
        <p className="mb-4">
          {character.status} - {character.species}
        </p>

        <img
          src={character.image}
          alt={character.name}
        />
      </div>

      <Link href="/" className="w-75 px-4 py-2 bg-amber-700 text-center rounded-2xl hover:bg-amber-600 hover:cursor-pointer duration-300">Voltar</Link>
    </main>
  );
}
