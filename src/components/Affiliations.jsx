import one_company from "../assets/facebook-logo.png"
import two_company from "../assets/two_company.png"
import three_company from "../assets/three_company.png"
import four_company from "../assets/four_company.png"
import five_company from "../assets/five_company.png"
import six_company from "../assets/six_company.png"
import seven_company from "../assets/seven_company.jpg"

const logos = [
  one_company,
  two_company,
  three_company,
  four_company,
  five_company,
  six_company,
  seven_company,
  one_company,
  two_company,
  three_company,
  four_company,
  five_company,
  six_company,
  seven_company,
  one_company,
  two_company,
  three_company,
  four_company,
  five_company,
  six_company,
  seven_company,
]

function Affiliations() {
  return (
    <section className="bg-white py-10 overflow-hidden p-20 sm:p-6">
      <h3 className="text-center font-semibold text-2xl sm:text-3xl mb-8 sm:mb-10">
        Affiliations
      </h3>

      {/* MOBILE — SINGLE ROW */}
      <div className="flex overflow-hidden sm:hidden">
        <div className="flex space-x-6 animate-marquee-mobile">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              className="h-8 shrink-0"
              alt="logo"
            />
          ))}
        </div>
      </div>

      {/* DESKTOP / TABLET — DOUBLE ROW */}
      <div className="hidden sm:flex overflow-hidden space-x-12">
        <div className="flex space-x-12 lg:space-x-16 animate-marquee-desktop">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              className="h-10 md:h-12 shrink-0"
              alt="logo"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Affiliations
