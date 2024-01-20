import TranslationBox from "@/components/translation-box";

const Home = () => {

  return (
    <main className="flex flex-col items-center justify-center bg-zinc-100" style={{ "minHeight": "89vh" }}>
      <div className="container flex flex-row items-center justify-center gap-x-5 px-10 py-16 ">
        <TranslationBox />
      </div>
    </main>
  );
}

export default Home;