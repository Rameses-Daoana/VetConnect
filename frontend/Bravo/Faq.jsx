import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Plus } from 'lucide-react';
import './Faq.css';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'How do I book an appointment?',
      answer: 'To book an appointment, navigate to the Booking page from the sidebar menu. Select your preferred date and time, choose a service, and confirm your booking. You will receive a confirmation notification once your appointment is scheduled.'
    },
    {
      id: 2,
      question: 'Do I need an account to book?',
      answer: 'Yes, you need to create an account to book appointments. This allows us to keep track of your booking history, send you reminders, and provide personalized service. You can sign up using your email address or social media accounts.'
    },
    {
      id: 3,
      question: 'Can I reschedule or cancel an appointment?',
      answer: 'Yes, you can reschedule or cancel your appointment by going to the Schedule page. Find your upcoming appointment and click on the reschedule or cancel button. Please note that cancellations should be made at least 24 hours in advance to avoid any fees.'
    },
    {
      id: 4,
      question: 'What services does VetConnect offer?',
      answer: 'VetConnect offers a comprehensive range of veterinary services including routine check-ups, vaccinations, dental care, surgery, emergency care, and specialized treatments. We also provide grooming services and pet wellness programs.'
    }
  ]);

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-52 bg-white shadow-md">
        <div className="p-4 border-b flex items-center gap-3">
          <div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">VC</span>
          </div>
          <span className="font-bold text-lg">VetConnect</span>
        </div>
        <nav className="p-4">
          <ul className="space-y-1">
            <li className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer">Dashboard</li>
            <li className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer">Booking</li>
            <li className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer">Schedule</li>
            <li className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer">Users</li>
            <li className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer">Settings</li>
            <li className="px-4 py-2 bg-green-800 text-white rounded cursor-pointer">FAQ</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto p-8">
          <h1 className="text-3xl font-bold mb-8">FAQ Management</h1>

          {/* Search and Add Button */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
              />
            </div>
            <button className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-900 transition flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add New FAQ
            </button>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="font-medium text-left">{faq.question}</span>
                  {expandedFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFAQ === faq.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No FAQs found matching your search.
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="border-t bg-white mt-12">
          <div className="max-w-5xl mx-auto px-8 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">VC</span>
              </div>
              <span className="font-bold">VetConnect</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-green-800">Admin Dashboard</a>
              <a href="#" className="hover:text-green-800">Privacy Policy</a>
              <a href="#" className="hover:text-green-800">Terms & Condition</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default FAQ;