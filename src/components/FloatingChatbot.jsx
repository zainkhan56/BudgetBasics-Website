import React, { useState, useRef, useEffect } from 'react';
import Icon from './Icon.jsx';

const KNOWLEDGE_BASE = [
  {
    keys: ['need', 'needs', 'essential'],
    answer: 'A need is essential for living & studying - like rent, nutritious groceries, transport to class, and required textbooks. Without them, your daily life is disrupted!'
  },
  {
    keys: ['want', 'wants', 'desire', 'luxury'],
    answer: 'A want makes life nicer but is optional - like restaurant delivery, brand new shoes, gaming skins, and extra streaming subscriptions. You can live happily without them!'
  },
  {
    keys: ['budget', 'budgeting', 'plan', 'rule'],
    answer: 'A budget is your financial freedom roadmap: Income - Expenses = Savings. It ensures you never run out of cash before the month ends!'
  },
  {
    keys: ['save', 'saving', 'savings', 'how much'],
    answer: 'Aim to save 20% of your income if possible! Even saving $5 or $10 a week builds the automatic habit of paying yourself first.'
  },
  {
    keys: ['overspend', 'impulse', 'stop spending', 'control'],
    answer: 'To stop overspending: 1) Wait 24 hours before buying wants. 2) Remove saved cards from shopping apps. 3) Track daily expenses. 4) Use cash envelopes for fun money!'
  },
  {
    keys: ['expense', 'expenses', 'fixed', 'variable'],
    answer: 'Expenses are money going out. Fixed expenses (rent, phone bill) are predictable, while variable expenses (snacks, entertainment) fluctuate and can be cut down easily.'
  },
  {
    keys: ['50/30/20', 'fifty thirty twenty', '50 30 20'],
    answer: 'The 50/30/20 Rule: 50% for Needs (survival), 30% for Wants (lifestyle), and 20% for Savings/Debt (future security).'
  },
  {
    keys: ['emergency', 'fund', 'safety net'],
    answer: 'An Emergency Fund is cash set aside (ideally 3 to 6 months of expenses) for unexpected emergencies like medical bills or repairs.'
  }
];

const SUGGESTED_PROMPTS = [
  'What is a need vs want?',
  'Explain 50/30/20 rule',
  'How do I stop overspending?',
  'How much should I save?',
  'What is an expense?'
];

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hello! I am BudgetBee. Ask me anything about budgeting, savings, or spending rules!',
      time: 'Just now'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [isOpen, messages, isTyping]);

  const playChime = (type = 'receive') => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      const now = ctx.currentTime;
      if (type === 'send') {
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(660, now + 0.08);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      } else {
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(780, now + 0.1);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.14);
        osc.start(now);
        osc.stop(now + 0.14);
      }
    } catch (e) {
    }
  };

  const getAnswer = (query) => {
    const q = query.toLowerCase();
    for (const item of KNOWLEDGE_BASE) {
      if (item.keys.some(k => q.includes(k))) {
        return item.answer;
      }
    }
    return "I'm BudgetBee! I specialize in core student budgeting: needs vs wants, 50/30/20 rule, smart savings, and tracking expenses. Pick a suggestion above or ask about those topics!";
  };

  const handleSend = (textToSend) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    playChime('send');
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const replyText = getAnswer(text);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setIsTyping(false);
      setMessages(prev => [...prev, botMsg]);
      playChime('receive');
      if (!isOpen) {
        setHasUnread(true);
      }
    }, 550);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClear = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: 'Chat conversation reset. Ask BudgetBee anything!',
        time: 'Just now'
      }
    ]);
  };

  return (
    <div className="float-chat-wrap">
      <button
        type="button"
        className={`float-chat-trigger ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle BudgetBee Chatbot"
        title="BudgetBee Assistant"
      >
        <div className="float-trigger-content">
          {isOpen ? (
            <i className="bi bi-x-lg float-close-icon"></i>
          ) : (
            <>
              <i className="bi bi-chat-dots-fill float-bot-icon"></i>
              <span className="float-online-dot"></span>
              {hasUnread && <span className="float-unread-badge"></span>}
            </>
          )}
        </div>
      </button>

      {isOpen && (
        <div className="float-chat-panel animate-chat-pop" role="dialog" aria-label="BudgetBee Chat">
          <div className="float-panel-header">
            <div className="float-header-profile">
              <div className="float-header-avatar">
                <i className="bi bi-robot"></i>
                <span className="float-avatar-dot"></span>
              </div>
              <div className="float-header-text">
                <div className="float-name-row">
                  <span className="float-brand-name">BudgetBee</span>
                  <span className="float-role-tag">Assistant</span>
                </div>
                <span className="float-status-text">Educational AI • Online</span>
              </div>
            </div>

            <div className="float-header-btns">
              <button
                type="button"
                className="float-btn-icon"
                onClick={handleClear}
                title="Clear conversation"
              >
                <i className="bi bi-trash3"></i>
              </button>
              <button
                type="button"
                className="float-btn-icon"
                onClick={() => setIsOpen(false)}
                title="Minimize chat"
              >
                <i className="bi bi-dash-lg"></i>
              </button>
            </div>
          </div>

          <div className="float-suggestions-tray">
            {SUGGESTED_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                className="float-chip-btn"
                onClick={() => handleSend(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>

          <div className="float-messages-scroll">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`float-message-row ${m.sender === 'user' ? 'from-user' : 'from-bot'}`}
              >
                {m.sender === 'bot' && (
                  <div className="float-bot-avatar-mini">
                    <i className="bi bi-robot"></i>
                  </div>
                )}
                <div className={`float-chat-bubble ${m.sender === 'user' ? 'user-style' : 'bot-style'}`}>
                  <p className="float-bubble-msg">{m.text}</p>
                  <span className="float-bubble-stamp">{m.time}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="float-message-row from-bot">
                <div className="float-bot-avatar-mini">
                  <i className="bi bi-robot"></i>
                </div>
                <div className="float-chat-bubble bot-style float-typing-bubble">
                  <span className="float-dot"></span>
                  <span className="float-dot"></span>
                  <span className="float-dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="float-panel-footer">
            <div className="float-input-container">
              <input
                type="text"
                className="float-chat-input"
                placeholder="> ask: what is a need?"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
              />
              <button
                type="button"
                className="float-send-action"
                onClick={() => handleSend()}
                disabled={!inputVal.trim()}
                title="Send"
              >
                <i className="bi bi-send-fill"></i>
              </button>
            </div>
            <div className="float-footer-badge">
              <span>BudgetBasics AI • Educational Guide</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
