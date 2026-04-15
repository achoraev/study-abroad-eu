"use client"

export default function ContactForm() {
  return (
    <form className="space-y-4 text-slate-900" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input type="text" className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email Address</label>
        <input type="email" className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@example.com" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Desired Program</label>
        <select className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none bg-white">
          <option>Medicine / Dentistry</option>
          <option>Engineering / IT</option>
          <option>Business / Economics</option>
        </select>
      </div>
      <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors mt-4">
        Get Free Consultation
      </button>
    </form>
  );
}