import About from "./components/About";
import ExploredApp from "./components/ExploredApp";
import Footer from "./components/Footer";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import Header from "./components/Header";
import OurFeatures from "./components/OurFeatures";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";

function App() {
  return (
    <>
      <div className="relative h-screen w-full">
        {/*---------------Background video----------------------- */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/c4f4/4749/-c85c-4755-a1c0-4646ee276bd5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i1z3asm5klJaqOfw-UxCFvUZLAX35F11cGWF3zdtg-DSW5CX9k2CfqdMlBgIRX4nHWv94jDiZdTQw9otP5kyGdQiPolaPbctoGu~J4tB15IzrRxOhTyz5HtTjC0aXTkLojSqW-TxS0zLDdmtMQ7ie3FNXSw5DA4QttPHgFbbC5P~c7wgCRe7wrjiWob9uUHhNtpc4fqARZc2O59Y49dbvTOSbqcCsO5hO7vJ2fhlX2accEpzK8BQvgsynWZA0wKb~jeJbY3Wm61V6EmDaamWy4j8JwsGiYG1OCCuMQzHgDedk0ponjVdyiaH0F0cR~DZk3puPM3LPbUOQqDu39a4PQ__"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/*-----------------------Content over the video---------------------- */}
        <div className="relative z-10 h-full p-4">
          <Header />
          <div className="flex flex-col items-center justify-center mt-16">
            <h1 className="text-white text-4xl leading-loose lg:text-6xl font-medium lg:leading-relaxed text-center mb-3 lg:mt-0 mt-20">
              When Innovation
              <br /> Meets
              <span className="bg-customLightBlue text-black rounded-full px-2 ml-2">
                Investment
              </span>
            </h1>
            <p className="text-customLightBlue mb-5">
              Empowering Trading Through Advanced Technology
            </p>
            <button
              type="button"
              className="text-white text-sm border border-customBorderColor px-5 py-2 rounded-md shadow-inner-light-blue hover:bg-customLightBlue hover:text-black"
            >
              Open dApp
            </button>
          </div>
        </div>

        {/* Overlay (optional) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
      </div>

      <OurFeatures />

      <About />

      <Tokenomics />

      <Roadmap />

      <FrequentlyAskedQuestions />

      <ExploredApp />

      <Footer />
    </>
  );
}

export default App;
