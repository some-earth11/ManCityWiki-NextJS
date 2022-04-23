export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(player => {
      return {
        params: { id: player.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { player: data }
  }
}

const Details = ({ player }) => {
  return (
    <div>
      <h1>{ player.name }</h1>
      <p>{ player.email }</p>
      <p>{ player.website }</p>
      <p>{ player.address.city }</p>
    </div>
  );
}
  
export default Details;