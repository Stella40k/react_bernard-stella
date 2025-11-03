export const CharacterInfo = ({ data }) => {
  if (!data) return null;
  const imageCharacter = `https://cdn.thesimpsonsapi.com/200/character/${data.id}.webp`;
  return (
    <div>
      <h6>Id: {data?.id}</h6>
      <img src={imageCharacter} alt={data.name} />
      <h1>{data?.name}</h1>
      <h2>Edad: {data?.age}</h2>
      <h6>{data?.description}</h6>
    </div>
  );
};
