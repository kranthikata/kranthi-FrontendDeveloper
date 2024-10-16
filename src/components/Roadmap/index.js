import React from "react";
import tickLogo from "../../assets/Image.svg";

const Roadmap = () => {
  return (
    <div className="bg-backgroundBlack py-12">
      <h1 className="text-center text-white text-4xl md:mb-8 mb-16">Roadmap</h1>
      {/* -----Phase 1---------- */}
      <div className="md:w-[85vw] ml-auto w-[90vw] mb-10">
        <div className="md:flex items-center justify-end">
          {/* -----------Left Container-------------- */}
          <div className="md:w-1/2">
            <span className="bg-white text-black px-4 text-sm py-2 rounded-lg">
              PHASE 1
            </span>
            <h1 className="text-white text-3xl mt-6 mb-8 font-thin">
              Kicking Off
            </h1>
            <ul className="text-white font-thin text-md space-y-4">
              <li className="flex items-center">
                <img src={tickLogo} alt="tick mark" />
                <p className="ml-3">Launch of EthAi: Officially</p>
              </li>
              <li className="flex items-center">
                <img src={tickLogo} alt="tick mark" />
                <p className="ml-3">Development of Core AI Agents</p>
              </li>
              <li className="flex items-center">
                <img src={tickLogo} alt="tick mark" />
                <p className="ml-3">User Onboarding Campaign</p>
              </li>
              <li className="flex items-center">
                <img src={tickLogo} alt="tick mark" />
                <p className="ml-3">Community Engagement Initiatives</p>
              </li>
            </ul>
          </div>

          {/* -----------Right Container------------- */}
          <div className="md:w-1/2 relative">
            {/* .-------------Video Container----------- */}
            <div className="relative w-full h-[550px] overflow-hidden">
              <video
                className="absolute top-0 left-0 w-[200%] h-[100%]"
                src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/037f/7f94/-dbe5-4e84-a0d0-34a0193e07d6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k2eVQlf66fcfeu5aqk3pSXxFxARn31u2PoC4aQMKXyDeC3N1vDJzJYPcNFS49mpz78bk6kHNuAWVKLuv-zxdbq9vYGtm7ads4yJNFtvqKYLBwQUQO7c3vUnKbZFeGpZ-rkJx56p3bIEMx~0yREMmXVj1c9OnSeHpxa7tfQfbiHKNAHe5UYyi2lXdQ1LvtmrztHR7TEGQfaDnJOAA-KvNCDX-JelTc-GPb6ZmKtutplhI0nMS9RcfLHJvDS-GwueDeMEhS~vfTnnnuCQNEW8EafGFiB-gN9-Vh6XUUQvXnVRfzJtxY0ABjGKSOODRyzgUTA7ObXOidFjsJh0-cLSbKg__"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  transform: "scale(2)",
                  transformOrigin: "center center",
                }}
              ></video>
            </div>
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background: `
                  radial-gradient(ellipse at center, rgba(0, 22, 29, 0) 60%, rgba(0, 22, 29, 1) 100%),
                  linear-gradient(90deg, rgba(0, 22, 29, 1) 0%, rgba(0, 22, 29, 0) 30%)
                `,
                opacity: 1,
                zIndex: 1,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* -----Phase 2---------- */}
      <div className="md:w-[85vw] mr-auto w-[90vw] mb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* -----------Left Container------------- */}
          <div className="md:w-1/2 w-full relative order-1 md:order-0">
            {/* .-------------Video Container----------- */}
            <div className="relative w-full h-[550px] overflow-hidden">
              <video
                className="absolute top-0 left-0 w-[200%] h-[100%]"
                src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/cb86/a228/-0cff-4aa8-9d9a-c49552d1766c?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KTNvAIBzPrPjNmpZXye0ckBOYZnlZ11FzblBWls1xX6FpKLNUTC22YA7nIVDmEZLvgFD7iFevF6mt~ajj12GEDAQkS0yF8JTj9SYctj49p-IOV8ApKCiW0JVJVYbApwJhV1Rh-asA7Bpm2csJkmD~CERIKEZf5YwhR2jrLmPJo7Tn6mMlCCwv6vCHD5r--1sPJsg3CPD-gOVQjIgcHJIpKQqHzm9N-6BtlKY61zc1EWilZ5Z6x8XM0GjXW6PIFpcrmqtPBSoXHeq-BnSW5lzBQJ~BTrQOMkppo5GSGNh54In-LOhKscQQYrRDs0wYLhKoYsAhpo13jO-8yhfjIT92A__"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  transform: "scale(2)",
                  transformOrigin: "center center",
                }}
              ></video>
            </div>
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background: `
                  radial-gradient(ellipse at center, rgba(0, 22, 29, 0) 60%, rgba(0, 22, 29, 1) 100%),
                  linear-gradient(270deg, rgba(0, 22, 29, 1) 0%, rgba(0, 22, 29, 0) 30%)
                `,
                opacity: 1,
                zIndex: 1,
              }}
            ></div>
          </div>
          {/* -----------Right Container-------------- */}
          <div className="order-0 md:order-1 ml-10 md:ml-0">
            <span className="bg-white text-black px-4 text-sm py-2 rounded-lg">
              PHASE 2
            </span>
            <h1 className="text-white text-3xl mt-6 mb-8">Bigger Insights</h1>
            <ul className="text-white text-sm space-y-4">
              <li className="flex items-center">
                <img src={tickLogo} alt="tick mark" />
                <p className="ml-3">Introduction of Advanced AI Agents</p>
              </li>
              <li className="flex items-center">
                <img src={tickLogo} alt="tick mark" />
                <p className="ml-3">Strategic Partnerships</p>
              </li>
              <li className="flex items-center">
                <img src={tickLogo} alt="tick mark" />
                <p className="ml-3">User Interface Optimization</p>
              </li>
              <li className="flex items-center">
                <img src={tickLogo} alt="tick mark" />
                <p className="ml-3">Comprehensive Marketing Campaign</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* -----Phase 3---------- */}
      <div className="md:w-[85vw] ml-auto w-[90vw] mb-10">
        <div className="md:flex items-center justify-end">
          {/* -----------Left Container-------------- */}
          <div className="md:w-1/2">
            <span className="bg-white text-black px-4 text-sm py-2 rounded-lg">
              PHASE 3
            </span>
            <h1 className="text-white text-3xl mt-6 mb-8">Full Power</h1>
            <ul className="text-white text-sm space-y-4">
              <li className="flex items-center">
                <img src={tickLogo} alt="tick mark" />
                <p className="ml-3">Introduction of Enhanced Features</p>
              </li>
              <li className="flex items-center">
                <img src={tickLogo} alt="tick mark" />
                <p className="ml-3">API Integration for Data Access</p>
              </li>
              <li className="flex items-center">
                <img src={tickLogo} alt="tick mark" />
                <p className="ml-3">Launch of Community-Driven Initiatives</p>
              </li>
              <li className="flex items-center">
                <img src={tickLogo} alt="tick mark" />
                <p className="ml-3">Continuous Imporvement and Updates</p>
              </li>
            </ul>
          </div>
          {/* -----------Right Container------------- */}
          <div className="md:w-1/2 relative">
            {/* .-------------Video Container----------- */}
            <div className="relative w-full h-[550px] overflow-hidden">
              <video
                className="absolute top-0 left-0 w-[200%] h-[100%]"
                src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/86e0/aff1/-c5e4-4b3f-b0ee-214e16d683f4?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VIvgvLO64Rv6IWUacSFhIyxGDdrR6J4K7f3mjTT82w2kn99znhte4WUDRgqJNR7x6X9OQ1GahqOzuGxUgxzlKht~nuuF1j-lTFBlYdMGMgL0dqa11rCr-O0U6yonoqLqGxBz7VeaFfRMYwbeo1VMO5xr~r7TkMVNo2084lOnu-Unn9OFqdfP0A~KUfL7jgoVmPGUTN4VoiarZQEQhIqlUUXl2lKH5T8UK9GmpQDpOQHjM6sdSCbm2uXq9V5E0koiN73C3TF9yVZRuGOn1wkg6El2VpeKjoQQKzrrSlaErGKLCueghNT5WzLegJ61EydZ4mZbyyXj64FMXTtIgV7B6A__"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  transform: "scale(2)",
                  transformOrigin: "center center",
                }}
              ></video>
            </div>
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background: `
                  radial-gradient(ellipse at center, rgba(0, 22, 29, 0) 60%, rgba(0, 22, 29, 1) 100%),
                  linear-gradient(90deg, rgba(0, 22, 29, 1) 0%, rgba(0, 22, 29, 0) 30%)
                `,
                opacity: 1,
                zIndex: 1,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
