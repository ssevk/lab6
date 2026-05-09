const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-2xl relative">
        <button onClick={onClose} className="absolute top-2 right-4 text-2xl text-gray-400 hover:text-black">&times;</button>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Me</h2>
        <form action="https://formspree.io/f/mjgaevan" method="POST" className="space-y-4">
          <input name="name" type="text" placeholder="Your Name" required className="text-gray-900 w-full p-2 border rounded" />
          <input name="email" type="email" placeholder="Your Email" required className="text-gray-900 w-full p-2 border rounded" />
          <input name="phone" type="phone" placeholder="Your Phone Number" required className="text-gray-900 w-full p-2 border rounded" />
          <textarea name="message" placeholder="Message" className="text-gray-900 w-full p-2 border rounded h-24"></textarea>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">Send Message</button>
        </form>
      </div>
    </div>
  );
};
export default Modal;