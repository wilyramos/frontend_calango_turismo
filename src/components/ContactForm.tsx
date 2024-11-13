import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold">Contacto</h2>
        <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg border border-gray-300 mb-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg border border-gray-300 mb-4"
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-lg border border-gray-300 mb-4"
          />
          <button type="submit" className="w-full p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}



