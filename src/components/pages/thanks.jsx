import MediaQuery from "react-responsive"
import Desktop from "../utils/desktop_bar"

function Thanks() {
  return (
    <main className="main">
      <section className="section">
         <MediaQuery minWidth={787}>
            <Desktop link4={true} />
         </MediaQuery>
         <div className="m-auto flex flex-col justify-center items-center gap-3 text-[rgb(2,41,90)]">
            <img src="/subscription_system/images/components/thanks/icon-thank-you.svg" width={'100px'} alt="THANKS FOR SUBSCRIBING" />
            <h3 className="mt-4 font-bold text-2xl">
               Thank you!
            </h3>
            <p className="text-[12.5px] w-[380px] text-center font-normal">
               Thanks for confirming your subscription! We hope you have fun using out platform. If you ever need support, please feel free to email us at support@loremgaming.com
            </p>
         </div>
      </section>
    </main>
  )
}

export default Thanks
