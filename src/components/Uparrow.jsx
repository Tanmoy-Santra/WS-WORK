import { BiUpArrowAlt } from "react-icons/bi";

const Uparrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className="fixed bottom-60 right-8 h-20 w-20
                 bg-black/50 hover:bg-red-500
                 rounded-full z-50
                 flex items-center justify-center
                 cursor-pointer transition-colors duration-300"
    >
      <BiUpArrowAlt size={32} className="text-white" />
    </div>
  );
};

export default Uparrow;
