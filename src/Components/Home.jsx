import Feed from "../Components/Feed/Feed";
import Head from "../Helper/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Home do site Dogs, com feed de fotos" />
      <Feed />
    </section>
  );
};

export default Home;
