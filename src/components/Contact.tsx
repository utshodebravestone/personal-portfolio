import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="bg-neutral-900 w-full py-5 px-2.5 md:px-10 flex flex-col gap-2.5 md:gap-5 rounded-xl border border-neutral-700">
      <h1 className="font-bold text-2xl md:text-4xl">Contact</h1>

      <div className="h-1 md:h-1.5 w-8 md:w-10 bg-yellow-400 rounded-xl" />

      <p className="font-extralight text-xs md:text-base">Get in touch.</p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459755.8402334259!2d89.33904070615144!3d25.80876958544507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2c8648556f8cb%3A0xfaa7d471019abb1f!2sKurigram%20District!5e0!3m2!1sen!2sbd!4v1700969307794!5m2!1sen!2sbd"
        loading="lazy"
        className="w-full h-80 md:h-96 grayscale-100 invert rounded"
      ></iframe>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-4 flex flex-col items-center justify-center gap-5"
      >
        <h1 className="w-full text-left text-xl md:text-[1.75rem] font-semibold">
          Contact Form
        </h1>
        <div className="w-full flex flex-col md:flex-row justify-center gap-5">
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 w-full md:w-1/2 h-12 font-normal bg-transparent border border-neutral-500 rounded-md text-gray-100"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-2 w-full md:w-1/2 h-12 font-normal bg-transparent border border-neutral-500 rounded-md text-gray-100"
          />
        </div>
        <textarea
          rows={3}
          placeholder="Message"
          className="w-full p-2 font-normal bg-transparent border border-neutral-500 rounded-md text-gray-100"
        ></textarea>
        <div className="w-full flex justify-end">
          <button className="w-full md:w-fit flex justify-center items-center gap-2 px-4 py-2 border border-neutral-800 shadow-md shadow-neutral-800 rounded-lg text-yellow-400 font-bold hover:translate-y-0.5 hover:contrast-150 transition-all duration-300">
            <BsFillSendFill /> Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
