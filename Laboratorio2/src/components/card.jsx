export const Card = ({ id, name, artist, image }) => {
  return (
    <section style={{ height: 300 }}>
      <h2>#{id} - {name}</h2>
      <h3>{artist}</h3>

      <img
        src={image}
        alt={name}
        style={{ width: 200 }}
      />
    </section>
  );
};