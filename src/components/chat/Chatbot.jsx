import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const response = await fetch("http://localhost:5001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      const botMessage = {
        sender: "bot",
        text: data.reply || "Hello! How can I assist you today?",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        sender: "bot",
        text: "Sorry, something went wrong. Try again!",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "16px",
        right: "16px",
        zIndex: 50,
      }}
    >
      <button
        onClick={toggleChatbot}
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "16px",
          borderRadius: "50%",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
      >
        <svg
          style={{ width: "24px", height: "24px" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5v-4a2 2 0 012-2h10a2 2 0 012 2v4h-4m-2 4h.01M12 14h.01"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          style={{
            backgroundColor: "white",
            width: "320px",
            height: "384px",
            borderRadius: "8px",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            marginTop: "8px",
          }}
        >
          <div
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              padding: "16px",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ fontWeight: 600 }}>AI Assistant</h3>
            <button
              onClick={toggleChatbot}
              style={{
                color: "white",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#e5e7eb")}
              onMouseOut={(e) => (e.currentTarget.style.color = "white")}
            >
              <svg
                style={{ width: "20px", height: "20px" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            style={{
              flex: 1,
              padding: "16px",
              overflowY: "auto",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "8px",
                  textAlign: msg.sender === "user" ? "right" : "left",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px",
                    borderRadius: "8px",
                    backgroundColor:
                      msg.sender === "user" ? "#dbeafe" : "#f3f4f6",
                    color: msg.sender === "user" ? "#1e3a8a" : "#111827",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div
            style={{
              padding: "16px",
              borderTop: "1px solid #e5e7eb",
            }}
          >
            <div style={{ display: "flex" }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                style={{
                  flex: 1,
                  padding: "8px",
                  border: "1px solid #d1d5db",
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                  outline: "none",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#2563eb";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 2px rgba(37, 99, 235, 0.5)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#d1d5db";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <button
                type="submit"
                onClick={sendMessage}
                style={{
                  backgroundColor: "#2563eb",
                  color: "white",
                  padding: "8px",
                  border: "none",
                  borderTopRightRadius: "8px",
                  borderBottomRightRadius: "8px",
                  cursor: "pointer",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1d4ed8")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#2563eb")
                }
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

