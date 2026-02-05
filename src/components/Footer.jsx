import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-5"
        >
          {/* ABOUT */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>Principal's Desk</li>
              <li>Prefects and Captains</li>
              <li>Synopsis on DC</li>
              <li>Alumni / ODA</li>
              <li>Campus</li>
              <li>Facilities</li>
              <li>Location</li>
            </ul>
          </div>

          {/* HISTORY */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">History</h4>
            <ul className="space-y-2 text-sm">
              <li>Evolution</li>
              <li>Founder of DC</li>
              <li>Presidents of the Board</li>
              <li>Original Donors</li>
              <li>Patrons of the College</li>
              <li>Principals at DC</li>
              <li>First Batch</li>
              <li>The College Coat of Arms</li>
              <li>Visits of Dignitaries</li>
            </ul>
          </div>

          {/* ADMISSION */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Admission</h4>
            <ul className="space-y-2 text-sm">
              <li>Admission Procedure</li>
              <li>E-Brochure</li>
              <li>Fee Structure</li>
              <li>Registration</li>
            </ul>
          </div>

          {/* ACADEMICS */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Academics</h4>
            <ul className="space-y-2 text-sm">
              <li>Committee</li>
              <li>Mandatory Disclosure</li>
              <li>Transfer Certificate</li>
            </ul>
          </div>

          {/* CAREER */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Career & College Guidance
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Career Guidance Activities</li>
              <li>ICS Career Login</li>
              <li>Placement Records</li>
              <li>Career Guidance Calendar</li>
            </ul>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700"></div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-gray-400 text-center md:text-left">
          © 2025 Daly College Indore | Privacy Policy | Terms of Use | Sitemap
        </p>

        <div className="flex gap-5 text-white text-lg">
          <FaFacebookF className="cursor-pointer hover:text-gray-400" />
          <FaXTwitter className="cursor-pointer hover:text-gray-400" />
          <FaInstagram className="cursor-pointer hover:text-gray-400" />
          <FaYoutube className="cursor-pointer hover:text-gray-400" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
