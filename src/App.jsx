import woman1 from '/illustration-woman-online-desktop.svg';
import woman2 from '/illustration-woman-online-mobile.svg';
import box from '/illustration-box-desktop.svg';
import shadow from '/bg-pattern-mobile.svg';
import shadow1 from '/bg-pattern-desktop.svg';
import arrow from '/icon-arrow-down.svg';
function App() {
  return (
    <main className="font-KumbhSans bg-gradient-to-b from-Softviolet to-Softblue min-h-screen flex flex-col justify-center items-center">
      {/* <img src={woman} alt="" /> */}
      {/* <img src={box} alt="" /> */}
      <article className="w-[320px] bg-white flex flex-col rounded-2xl p-8 md:p-0  md:min-w-[800px] md:flex-row md:items-center md:justify-center md:relative">
        <div className="flex flex-col items-center md:flex-1 md:overflow-hidden md:w-full">
          <img
            src={woman2}
            alt="womanImg"
            className="mt-[-140px] w-[230px] md:hidden"
          />
          <img src={shadow} alt="shadowImg" className="mt-[-80px] md:hidden" />
          <div className="md:relative md:right-10 top-10">
            <img
              src={woman1}
              alt=""
              className="hidden md:block md:absolute md:overflow-hidden"
            />
            <img
              src={shadow1}
              alt=""
              className="hidden md:block md:overflow-hidden"
            />
            <img
              src={box}
              alt=""
              className="md:absolute md:overflow-visible hidden md:block bottom-12"
            />
          </div>
        </div>
        <div className="min-h-full flex flex-col gap-5 md:flex-1 md:pr-10 md:py-10">
          <div className="flex items-center justify-center w-full md:justify-start">
            <p className="font-bold text-2xl m-3">FAQ</p>
          </div>
          <div className="flex flex-row justify-between max-h-[7px] items-center">
            <p className="text-Darkgrayishblue text-xs">
              How many team members can I invite?
            </p>
            <img src={arrow} alt="arrowImg" />
          </div>
          <hr className="border-Darkgrayishblue border-1 w-full" />
          <div className="flex flex-row justify-between max-h-[7px] items-center">
            <p className="text-xs font-bold">
              What is the maximum file upload size?
            </p>
            <img src={arrow} alt="arrowImg" className="origin-top rotate-180" />
          </div>
          <p className="text-Darkgrayishblue text-xs">
            No more than 2GB. All files in your account must fit your allotted
            storage space.
          </p>
          <hr className="border-Darkgrayishblue border-1 w-full" />
          <div className="flex flex-row justify-between max-h-[7px] items-center">
            <p className="text-Darkgrayishblue text-xs">
              How do I reset my password?
            </p>
            <img src={arrow} alt="arrowImg" />
          </div>
          <hr className="border-Darkgrayishblue border-1 w-full" />
          <div className="flex flex-row justify-between max-h-[7px] items-center">
            <p className="text-Darkgrayishblue text-xs">
              Can I cancel my subscription?
            </p>
            <img src={arrow} alt="arrowImg" />
          </div>
          <hr className="border-Darkgrayishblue border-1 w-full" />
          <div className="flex flex-row justify-between max-h-[7px] items-center">
            <p className="text-Darkgrayishblue text-xs">
              Do you provide additional support?
            </p>
            <img src={arrow} alt="arrowImg" />
          </div>
          <hr className="border-Darkgrayishblue border-1 w-full" />
        </div>
      </article>
    </main>
  );
}

export default App;
