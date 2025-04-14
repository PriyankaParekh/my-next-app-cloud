"use client";
const OurProcess = () => (
  <div className="w-full">
    <section className="py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center animate-fade-in-down hover:scale-105 transition-all duration-500 bg-gradient-to-r from-white via-neutral-200 to-white bg-clip-text text-transparent gradient-text">
          Our Process
        </h2>
        <div className=" mt-4 w-24 h-1 bg-white/20 mx-auto mb-20" />

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          <div className="flex justify-between relative">
            {[
              {
                title: "Consultation",
                description:
                  "We start by understanding your needs and goals through a detailed consultation session.",
                icon: (
                  <span className="material-symbols-outlined text-6xl mb-6 animate-bounce-slow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M20 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2zM4 4v13.17L5.17 16H20V4zm2 3h12v2H6zm0 4h9v2H6z"
                      />
                    </svg>
                  </span>
                ),
              },
              {
                title: "Planning",
                description:
                  "We create a detailed project plan and timeline to ensure a smooth execution.",
                icon: (
                  <span className="material-symbols-outlined text-6xl mb-6 animate-float">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6zm3 6q-.425 0-.712-.288T7 13t.288-.712T8 12h8q.425 0 .713.288T17 13t-.288.713T16 14zm0 4q-.425 0-.712-.288T7 17t.288-.712T8 16h5q.425 0 .713.288T14 17t-.288.713T13 18z"
                      />
                    </svg>{" "}
                  </span>
                ),
              },
              {
                title: "Execution",
                description:
                  "Our team gets to work, keeping you updated with regular progress reports.",
                icon: (
                  <span className="material-symbols-outlined text-6xl mb-6 animate-spin-slow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M7.1 11.35q.35-.7.725-1.35t.825-1.3l-1.4-.275l-2.1 2.1zm12.05-6.875q-1.75.05-3.737 1.025T11.8 8.1q-1.05 1.05-1.875 2.25T8.7 12.6l2.85 2.825q1.05-.4 2.25-1.225t2.25-1.875q1.625-1.625 2.6-3.6T19.675 5q0-.1-.038-.2t-.112-.175t-.175-.112t-.2-.038m-5.5 6q-.575-.575-.575-1.412t.575-1.413t1.425-.575t1.425.575t.575 1.413t-.575 1.412t-1.425.575t-1.425-.575m-.85 6.55L13.625 19l2.1-2.1l-.275-1.4q-.65.45-1.3.813t-1.35.712m8.775-13.35q.2 2.75-.9 5.363T17.2 14.025l.5 2.475q.1.5-.05.975t-.5.825L14 21.45q-.375.375-.9.288t-.725-.588l-1.525-3.575L6.575 13.3L3 11.775q-.5-.2-.6-.725t.275-.9L5.825 7q.35-.35.837-.5t.988-.05l2.475.5q2.375-2.375 4.988-3.475t5.362-.9q.2.025.4.113t.35.237t.238.35t.112.4m-17.65 12.3q.875-.875 2.138-.887t2.137.862t.863 2.138t-.888 2.137q-1.2 1.2-2.838 1.425t-3.287.45l.45-3.287q.225-1.637 1.425-2.838m1.425 1.4q-.425.425-.587 1.025T4.5 19.625q.625-.1 1.225-.25T6.75 18.8q.3-.3.325-.725T6.8 17.35t-.725-.288t-.725.313"
                      />
                    </svg>
                  </span>
                ),
              },
              {
                title: "Delivery",
                description:
                  "We deliver the final product, ensuring it meets all your expectations and requirements.",
                icon: (
                  <span className="material-symbols-outlined text-6xl mb-6 animate-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M10.95 12.7L9.5 11.275Q9.225 11 8.813 11t-.713.3q-.275.275-.275.7t.275.7l2.15 2.15q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.287-.7t-.287-.7q-.3-.3-.712-.312t-.713.287zm-2.8 9.05L6.7 19.3l-2.75-.6q-.375-.075-.6-.387t-.175-.688L3.45 14.8l-1.875-2.15q-.25-.275-.25-.65t.25-.65L3.45 9.2l-.275-2.825q-.05-.375.175-.688t.6-.387l2.75-.6l1.45-2.45q.2-.325.55-.438t.7.038l2.6 1.1l2.6-1.1q.35-.15.7-.038t.55.438L17.3 4.7l2.75.6q.375.075.6.388t.175.687L20.55 9.2l1.875 2.15q.25.275.25.65t-.25.65L20.55 14.8l.275 2.825q.05.375-.175.688t-.6.387l-2.75.6l-1.45 2.45q-.2.325-.55.438t-.7-.038l-2.6-1.1l-2.6 1.1q-.35.15-.7.038t-.55-.438m1.3-1.8l2.55-1.1l2.6 1.1l1.4-2.4l2.75-.65l-.25-2.8l1.85-2.1l-1.85-2.15l.25-2.8l-2.75-.6l-1.45-2.4L12 5.15l-2.6-1.1L8 6.45l-2.75.6l.25 2.8L3.65 12l1.85 2.1l-.25 2.85l2.75.6zM12 12"
                      />
                    </svg>{" "}
                  </span>
                ),
              },
            ].map((step, index) => (
              <div key={index} className="group relative w-64 perspective-1000">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-full border-4 border-neutral-800 group-hover:border-white/40 group-hover:scale-110 transform transition-all duration-500 flex items-center justify-center z-10 shadow-lg shadow-neutral-900/50 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-4xl group-hover:rotate-[360deg] transition-all duration-700 bg-gradient-to-r from-white to-neutral-200 bg-clip-text text-transparent">
                    {step.icon.props.children}
                  </span>
                </div>
                <div className="pt-28 text-center transform group-hover:-translate-y-2 transition-all duration-500 bg-gradient-to-b from-transparent to-neutral-900/30 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-neutral-200 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-500">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 group-hover:text-neutral-200 transition-colors duration-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default OurProcess;
