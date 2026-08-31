import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSent(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}

      <section className="bg-gray-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-green-500">
            Get In Touch
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Contact Us</h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400">
            Have a question, suggestion, or need help with your order? Our team
            is here to help.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          {/* CONTACT INFORMATION */}

          <div className="space-y-5">
            <div>
              <h2 className="text-2xl font-black text-gray-900">Let's Talk</h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                We're always happy to hear from you. Reach out using any of the
                options below.
              </p>
            </div>

            {/* EMAIL */}

            <div className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50">
                <Mail size={19} className="text-green-600" />
              </div>

              <div>
                <p className="text-xs font-bold text-gray-900">Email</p>

                <p className="mt-1 text-xs text-gray-500">support@shopco.com</p>
              </div>
            </div>

            {/* PHONE */}

            <div className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50">
                <Phone size={19} className="text-green-600" />
              </div>

              <div>
                <p className="text-xs font-bold text-gray-900">Phone</p>

                <p className="mt-1 text-xs text-gray-500">+1 234 567 890</p>
              </div>
            </div>

            {/* LOCATION */}

            <div className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50">
                <MapPin size={19} className="text-green-600" />
              </div>

              <div>
                <p className="text-xs font-bold text-gray-900">Location</p>

                <p className="mt-1 text-xs text-gray-500">Nairobi, Kenya</p>
              </div>
            </div>

            {/* HOURS */}

            <div className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50">
                <Clock size={19} className="text-green-600" />
              </div>

              <div>
                <p className="text-xs font-bold text-gray-900">
                  Business Hours
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Monday - Friday, 8AM - 6PM
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}

          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-xl font-black text-gray-900">
                Send Us a Message
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Fill in the form and we'll get back to you as soon as possible.
              </p>
            </div>

            {/* SUCCESS MESSAGE */}

            {sent && (
              <div className="mb-6 rounded-lg bg-green-50 px-4 py-3 text-xs font-semibold text-green-700">
                Your message has been sent successfully! We'll get back to you
                soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* NAME + EMAIL */}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  />
                </div>
              </div>

              {/* SUBJECT */}

              <div>
                <label className="mb-2 block text-xs font-bold text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              {/* MESSAGE */}

              <div>
                <label className="mb-2 block text-xs font-bold text-gray-700">
                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  rows="6"
                  className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              {/* SEND BUTTON */}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3.5 text-xs font-bold text-white transition hover:bg-green-700 sm:w-auto"
              >
                <Send size={15} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ / HELP */}

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl bg-green-600 px-6 py-10 text-center text-white">
          <h2 className="text-2xl font-black">Need Help With Your Order?</h2>

          <p className="mx-auto mt-2 max-w-lg text-xs leading-6 text-green-50">
            Our customer support team is ready to help with orders, products,
            returns, and any other questions you may have.
          </p>

          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:support@shopco.com"
              className="rounded-lg bg-white px-6 py-3 text-xs font-bold text-green-700 transition hover:bg-gray-100"
            >
              Email Support
            </a>

            <a
              href="tel:+1234567890"
              className="rounded-lg border border-white px-6 py-3 text-xs font-bold text-white transition hover:bg-white hover:text-green-700"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
