import { useState } from "react";

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const getReply = (msg: string) => {
    const text = msg.toLowerCase();

    if (text.includes("service"))
      return "We provide Web Development, Mobile App Development, AI Solutions, Cloud Services, and Custom Software Development.";

    if (text.includes("contact"))
      return "Contact us at +91 9022539573 or email us for project discussions.";

    if (text.includes("career"))
      return "Visit our Careers page to explore internship and job opportunities.";

    if (text.includes("portfolio"))
      return "Check our Portfolio section to see recent projects and case studies.";

    return "Hello! Welcome to NextGen Technologies. Ask about services, careers, contact, or portfolio.";
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg z-50"
      >
        💬
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border z-50">
          <div className="bg-blue-600 text-white p-3 rounded-t-xl">
            NextGen AI Assistant
          </div>

          <div className="p-4 h-64 overflow-auto">
            <p className="text-sm">{getReply(message)}</p>
          </div>

          <div className="p-3 border-t">
            <input
              type="text"
              placeholder="Ask something..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
        </div>
      )}
    </>
  );
}
