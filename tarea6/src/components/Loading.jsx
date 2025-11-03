export const Loading = ({ loading }) => {
  if (!loading) return null;
  return (
    <div className="loading">
      {" "}
      //clases ara probar despues bts y css
      <h1>Cargando...</h1>
    </div>
  );
};
