
export function initScript() {

const tipsData = [
  "Track every $1 - small leaks sink ships.",
  "Wait 24h before want purchases.",
  "Pay yourself first - save before spending.",
  "Use cash envelope for fun money.",
  "Review subscriptions monthly."
];

const chatbotData = {
  "what is a need": "A need is essential for living & studying - like rent, food, transport, course books.",
  "what is a want": "A want makes life nicer but you can live without it - like new video game, restaurant food.",
  "what is a budget": "A budget is a plan for your money: Income - Expenses = Savings. It helps you control spending.",
  "how much should i save": "Try 20% of income if possible. Even $10/week builds habit. 50/30/20 is a guideline.",
  "how do i avoid overspending": "Track expenses, use Pause Before Buying, set limits for wants, remove saved cards from shopping sites.",
  "what is an expense": "Expense is money you spend - fixed (rent) or variable (snacks).",
  "fallback": "I'm BudgetBee! I only know basic budgeting topics: needs, wants, budget, saving, expenses. Try asking about those."
};

const galleryData = [
  { title: "Needs vs Wants Matrix", desc: "Visual guide to separate essentials.", category: "budget", icon: "bi-balance-scale" },
  { title: "50/30/20 Split Donut", desc: "How to divide income smartly.", category: "budget", icon: "bi-pie-chart" },
  { title: "Monthly Budget Cycle", desc: "Income \u2192 Plan \u2192 Track \u2192 Review.", category: "habits", icon: "bi-arrow-repeat" },
  { title: "Saving Challenge 30 Days", desc: "Save $1, then $2 daily.", category: "saving", icon: "bi-piggy-bank" },
  { title: "Pause Before Buying", desc: "4 questions to stop impulse.", category: "habits", icon: "bi-pause-circle" },
  { title: "Student Budget Sample", desc: "Real example $800/month.", category: "budget", icon: "bi-book" }
];

const searchData = [
  { title: "Understanding Saving", topic: "saving", text: "Saving is setting money aside for future goals." },
  { title: "Needs are Essential", topic: "needs", text: "Bus fare, books, rent are needs." },
  { title: "Track Expenses Daily", topic: "expenses", text: "Small expenses add up quickly." },
  { title: "Set SMART Goals", topic: "goals", text: "Specific, Measurable, Achievable goals work." },
  { title: "Budgeting Basics", topic: "budgeting", text: "Income, fixed, variable, savings." },
  { title: "Wants Can Wait", topic: "wants", text: "Video games, new shoes can wait 24h." }
];

const scenarios = [
  { text: "Bus fare to college", amount: "$2.50 daily", icon: "bi-bus-front", type: "need", why: "Essential transport to attend classes. Without it you can't study." },
  { text: "Required course book", amount: "$45", icon: "bi-book", type: "need", why: "Needed for learning and exams. Academic essential." },
  { text: "Restaurant food delivery", amount: "$18", icon: "bi-egg-fried", type: "want", why: "You have food at home. Eating out is comfort, not survival." },
  { text: "New video game", amount: "$60", icon: "bi-controller", type: "want", why: "Entertainment - fun but optional. Can wait or find cheaper option." },
  { text: "Optional trendy shoes", amount: "$80", icon: "bi-bootstrap", type: "want", why: "You have shoes. New fashion is a want." },
  { text: "Electricity bill", amount: "$40", icon: "bi-lightbulb", type: "need", why: "Utilities keep lights on for study." }
];

const mistakesData = [
  { title: "Impulse Buying", scenario: "Seeing a sale and buying instantly.", explain: "Emotional buying bypasses budget.", fix: "Use 24-hour rule. Add to wishlist, revisit tomorrow." },
  { title: "Ignoring Small Expenses", scenario: "$3 coffee daily = $90/month unnoticed.", explain: "Small leaks sink budgets.", fix: "Track every expense for 7 days in planner." },
  { title: "Late Payments", scenario: "Paying library fine or phone bill late.", explain: "Fees waste money and cause stress.", fix: "Set phone reminders 2 days before due." },
  { title: "Unused Subscriptions", scenario: "Paying for streaming you don't watch.", explain: "$10/month forgotten = $120/year.", fix: "Audit subscriptions monthly, cancel unused." },
  { title: "Spending Without a Plan", scenario: "No budget, money disappears.", explain: "No plan = overspend.", fix: "Use 50/30/20 calculator each month start." }
];

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


const starCanvas = document.getElementById('stars');
const sctx = starCanvas ? starCanvas.getContext('2d') : null;
let starsArr = [];

function initStars() {
  if (!starCanvas || !sctx) return;
  starCanvas.width = window.innerWidth;
  starCanvas.height = window.innerHeight;
  starsArr = [];
  const n = Math.min(140, Math.floor(window.innerWidth / 10));
  for (let i = 0; i < n; i++) {
    starsArr.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.3,
      s: Math.random() * 0.3 + 0.06,
      tw: Math.random() * Math.PI * 2
    });
  }
}

function drawStars() {
  if (!starCanvas || !sctx) return;
  sctx.clearRect(0, 0, starCanvas.width, starCanvas.height);
  const holo = document.body.classList.contains('holo');
  starsArr.forEach(st => {
    st.y -= st.s;
    st.tw += 0.04;
    if (st.y < -4) {
      st.y = starCanvas.height + 4;
      st.x = Math.random() * starCanvas.width;
    }
    const a = 0.35 + Math.sin(st.tw) * 0.3;
    sctx.beginPath();
    sctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
    sctx.fillStyle = holo ? `rgba(124, 58, 237, ${a * 0.5})` : `rgba(180, 200, 255, ${a})`;
    sctx.fill();
  });
  if (!reduceMotion) requestAnimationFrame(drawStars);
}

initStars();
drawStars();
window.addEventListener('resize', initStars);

const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');

if (window.matchMedia('(min-width:1025px) and (pointer:fine)').matches && dot && ring) {
  document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
  });

  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, input, select, textarea, .chip, .panel')) {
      ring.classList.add('hovering');
    } else {
      ring.classList.remove('hovering');
    }
  });
}


const modeBtn = document.getElementById('modeBtn');
let mode = localStorage.getItem('neonMode') || 'dark';

function applyMode(m) {
  document.body.classList.toggle('holo', m === 'holo');
  const brandLogo = document.getElementById('brandLogo');
  if (brandLogo) brandLogo.src = m === 'holo' ? 'logo.png' : 'logo-dark.png';
  if (modeBtn) modeBtn.innerHTML = m === 'holo' ? '<i class="bi bi-moon-stars"></i>' : '<i class="bi bi-sun"></i>';
}
applyMode(mode);

if (modeBtn) {
  modeBtn.addEventListener('click', () => {
    mode = mode === 'dark' ? 'holo' : 'dark';
    localStorage.setItem('neonMode', mode);
    applyMode(mode);
    modeBtn.classList.remove('flip');
    void modeBtn.offsetWidth;
    modeBtn.classList.add('flip');
  });
}

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const topbar = document.getElementById('topbar');
const progress = document.getElementById('progress');
const sections = document.querySelectorAll('section[id]');
const anchors = document.querySelectorAll('#menu a');
const toTop = document.getElementById('toTop');

if (burger && menu) {
  burger.addEventListener('click', () => menu.classList.toggle('open'));
  anchors.forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

function onScroll() {
  if (topbar) topbar.classList.toggle('scrolled', window.scrollY > 50);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';

  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 220) cur = s.id;
  });

  anchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
  if (toTop) toTop.classList.toggle('show', window.scrollY > 400);
}
window.addEventListener('scroll', onScroll);
onScroll();

const typePhrases = [
  "Initializing budget_engine v2.0 ...",
  "Needs[50] + wants[30] + savings[20] = 100%",
  "No bank. no risk. just skills.",
  "Welcome, future money master."
];
let tIdx = 0, cIdx = 0, deleting = false;
const typeEl = document.getElementById('typeline');

function typeLoop() {
  if (!typeEl) return;
  const p = typePhrases[tIdx];
  if (!deleting) {
    cIdx++;
    if (cIdx === p.length) {
      deleting = true;
      setTimeout(typeLoop, 1600);
      typeEl.textContent = p;
      return;
    }
  } else {
    cIdx--;
    if (cIdx === 0) {
      deleting = false;
      tIdx = (tIdx + 1) % typePhrases.length;
    }
  }
  typeEl.textContent = p.slice(0, cIdx);
  setTimeout(typeLoop, deleting ? 26 : 52);
}

if (reduceMotion && typeEl) {
  typeEl.textContent = typePhrases[0];
} else {
  typeLoop();
}

let visits = parseInt(localStorage.getItem('visitCount') || '1', 10);
const visitCountEl = document.getElementById('visitCount');
if (visitCountEl) visitCountEl.textContent = visits;

let streak = parseInt(localStorage.getItem('streak') || '0', 10);
streak++;
localStorage.setItem('streak', streak);
const streakEl = document.getElementById('streak');
if (streakEl) streakEl.textContent = streak;

function animateCount(el, target) {
  if (!el) return;
  let cur = 0;
  const step = Math.max(1, Math.ceil(target / 40));
  const iv = setInterval(() => {
    cur += step;
    if (cur >= target) {
      cur = target;
      clearInterval(iv);
    }
    el.textContent = cur;
  }, 30);
}
animateCount(document.getElementById('tipCount'), tipsData.length);

function updateTime() {
  const s = new Date().toLocaleString();
  const liveTime = document.getElementById('liveTime');
  const footerTime = document.getElementById('footerTime');
  if (liveTime) liveTime.textContent = s;
  if (footerTime) footerTime.textContent = s;
}
setInterval(updateTime, 1000);
updateTime();


const tickerTrack = document.getElementById('tickerTrack');
if (tickerTrack) {
  const items = tipsData.map(t => `<span><i class="bi bi-lightning-charge"></i> <b>TIP</b> ${t}</span>`).join('') +
    `<span><i class="bi bi-hexagon-fill"></i> <b>RULE</b> Needs 50% \u2022 Wants 30% \u2022 Savings 20%</span><span><i class="bi bi-satellite"></i> <b>MODE</b> 100% browser \u2014 no data saved</span>`;
  tickerTrack.innerHTML = items + items;
}

const rvObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      rvObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.rv').forEach(el => rvObs.observe(el));

let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = '\u00BB ' + msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

document.querySelectorAll('.quizBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    const fb = document.getElementById('quizFeedback');
    if (!fb) return;
    if (btn.dataset.answer === 'rent') {
      fb.innerHTML = '<i class="bi bi-check-circle"></i> CORRECT  rent is fixed each month.';
      fb.style.color = 'var(--neon4)';
    } else {
      fb.innerHTML = '<i class="bi bi-x-circle"></i> Snacks vary daily \u2192 variable. Try again.';
      fb.style.color = '#FB7185';
    }
  });
});

let currentScenario = 0;
const sT = document.getElementById('scenarioText');
const sA = document.getElementById('scenarioAmount');
const sI = document.getElementById('scenarioIcon');
const sF = document.getElementById('scenarioFeedback');
const nextBtn = document.getElementById('nextScenario');

function showScenario() {
  const s = scenarios[currentScenario];
  if (sT) sT.textContent = s.text;
  if (sA) sA.textContent = s.amount;
  if (sI) sI.innerHTML = `<i class="bi ${s.icon}" aria-hidden="true"></i>`;
  if (sF) sF.style.display = 'none';
  if (nextBtn) nextBtn.style.display = 'none';
}

function checkAnswer(userChoice) {
  const s = scenarios[currentScenario];
  const ok = userChoice === s.type;
  if (sF) {
    sF.style.display = 'block';
    sF.style.border = ok ? '1px solid var(--neon4)' : '1px solid #FB7185';
    sF.style.background = ok ? 'rgba(163, 230, 53, 0.08)' : 'rgba(251, 113, 133, 0.08)';
    sF.style.color = ok ? 'var(--neon4)' : '#FB7185';
    sF.innerHTML = (ok ? '<i class="bi bi-check-circle"></i> CORRECT! ' : '<i class="bi bi-x-circle"></i> NOT QUITE. ') + s.why;
  }
  if (nextBtn) nextBtn.style.display = 'inline-block';
}

const needBtn = document.getElementById('needBtn');
const wantBtn = document.getElementById('wantBtn');
if (needBtn) needBtn.addEventListener('click', () => checkAnswer('need'));
if (wantBtn) wantBtn.addEventListener('click', () => checkAnswer('want'));
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    currentScenario = (currentScenario + 1) % scenarios.length;
    showScenario();
  });
}
showScenario();

const calcBtn = document.getElementById('calcBtn');

function calculateBudget() {
  const inp = document.getElementById('incomeInput');
  const err = document.getElementById('incomeError');
  const income = parseFloat(inp.value);
  if (err) err.textContent = '';

  if (isNaN(income) || inp.value === '') {
    if (err) err.textContent = 'Please enter income.';
    return;
  }
  if (income < 200) {
    if (err) err.textContent = 'Minimum monthly income is $200.';
    return;
  }

  const n = income * 0.5;
  const w = income * 0.3;
  const s = income * 0.2;

  document.getElementById('needsAmount').textContent = '$' + n.toFixed(2);
  document.getElementById('wantsAmount').textContent = '$' + w.toFixed(2);
  document.getElementById('savingsAmount').textContent = '$' + s.toFixed(2);
  document.getElementById('needsBar').style.width = '50%';
  document.getElementById('wantsBar').style.width = '30%';
  document.getElementById('savingsBar').style.width = '20%';

  const calcExplain = document.getElementById('calcExplain');
  if (calcExplain) {
    calcExplain.textContent = `// with $${income}: needs=$${n.toFixed(0)} wants=$${w.toFixed(0)} savings=$${s.toFixed(0)}`;
  }

  drawChart(n, w, s);
  showToast('BUDGET CALCULATED');

  const healthBar = document.getElementById('healthBar');
  const healthText = document.getElementById('healthText');
  if (healthBar) healthBar.style.width = '85%';
  if (healthText) healthText.textContent = 'GREAT';
}

function drawChart(n, w, s) {
  const c = document.getElementById('budgetChart');
  if (!c) return;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, c.width, c.height);

  const total = n + w + s;
  let start = -Math.PI / 2;

  [
    { v: n, col: '#22D3EE' },
    { v: w, col: '#A855F7' },
    { v: s, col: '#F472B6' }
  ].forEach(d => {
    const ang = (d.v / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(160, 95);
    ctx.arc(160, 95, 80, start, start + ang);
    ctx.closePath();
    ctx.fillStyle = d.col;
    ctx.shadowColor = d.col;
    ctx.shadowBlur = 16;
    ctx.fill();
    ctx.shadowBlur = 0;
    start += ang;
  });

  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
  ctx.arc(160, 95, 46, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = 'source-over';
}

if (calcBtn) calcBtn.addEventListener('click', calculateBudget);

const planGoalBtn = document.getElementById('planGoalBtn');

if (planGoalBtn) {
  planGoalBtn.addEventListener('click', () => {
    const name = document.getElementById('goalName').value.trim() || 'Your Goal';
    const target = parseFloat(document.getElementById('targetAmount').value);
    const current = parseFloat(document.getElementById('currentSavings').value);
    const savingsIncome = parseFloat(document.getElementById('savingsMonthlyIncome').value);
    const monthly = parseFloat(document.getElementById('monthlyContribution').value);
    const err = document.getElementById('goalError');
    if (err) err.textContent = '';

    if (isNaN(target) || isNaN(current) || isNaN(savingsIncome) || isNaN(monthly)) {
      if (err) err.textContent = 'Fill all numbers.';
      return;
    }
    if (target <= 0 || savingsIncome <= 0 || monthly <= 0 || current < 0) {
      if (err) err.textContent = 'Values must be positive. Monthly income and contribution must be greater than 0.';
      return;
    }
    if (monthly > savingsIncome) {
      if (err) err.textContent = 'Monthly contribution cannot be greater than your monthly income.';
      return;
    }
    if (current > target) {
      if (err) err.textContent = 'Current savings greater than target!';
      return;
    }

    const remaining = target - current;
    const months = Math.ceil(remaining / monthly);
    const percent = Math.min(100, (current / target) * 100);

    document.getElementById('displayGoalName').textContent = name;
    document.getElementById('remainingAmount').textContent = '$' + remaining.toFixed(2);
    document.getElementById('estimatedMonths').textContent = months;
    document.getElementById('goalPercent').textContent = percent.toFixed(0) + '%';
    document.getElementById('goalProgressBar').style.width = percent + '%';

    const C = 502.65;
    const circle = document.getElementById('progressCircle');
    if (circle) circle.style.strokeDashoffset = C - (C * percent) / 100;

    const tip = document.getElementById('savingTip');
    if (tip) {
      tip.innerHTML = percent > 75
        ? '<i class="bi bi-stars"></i> Almost there! Keep buzzing!'
        : percent > 40
        ? '<i class="bi bi-lightning-charge"></i> Good progress! Consistency wins.'
        : '<i class="bi bi-hexagon-fill"></i> Start small, stay steady \u2014 you got this!';
    }
    showToast('GOAL PLANNED');
  });
}


let expenses = [];
let editIndex = -1;
const tbody = document.querySelector('#expenseTable tbody');
const addExpenseBtn = document.getElementById('addExpenseBtn');

function renderExpenses() {
  if (!tbody) return;
  tbody.innerHTML = '';
  let total = 0;

  expenses.forEach((x, i) => {
    total += x.amount;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="mono small" style="white-space:nowrap">${x.date}</td>
      <td>${x.category}</td>
      <td>${x.description}</td>
      <td class="mono" style="white-space:nowrap">$${x.amount.toFixed(2)}</td>
      <td style="white-space:nowrap">
        <button type="button" class="chip" style="padding:4px 10px; font-size:.7rem" onclick="editExpense(${i})">EDIT</button>
        <button type="button" class="chip" style="padding:4px 10px; font-size:.7rem; border-color:#FB7185; color:#FB7185" onclick="deleteExpense(${i})">DEL</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  const totalEl = document.getElementById('totalExpenses');
  const remEl = document.getElementById('remainingBalance');
  if (totalEl) totalEl.textContent = total.toFixed(2);
  if (remEl) remEl.textContent = (1000 - total).toFixed(2);
}

function addExpense() {
  const date = document.getElementById('expenseDate').value;
  const cat = document.getElementById('expenseCategory').value;
  const desc = document.getElementById('expenseDescription').value.trim();
  const amount = parseFloat(document.getElementById('expenseAmount').value);
  const err = document.getElementById('expenseError');
  if (err) err.textContent = '';

  if (!date || !cat || !desc || isNaN(amount)) {
    if (err) err.textContent = 'Fill all fields.';
    return;
  }
  if (amount <= 0) {
    if (err) err.textContent = 'Amount must be positive.';
    return;
  }

  const item = { date, category: cat, description: desc, amount };
  if (editIndex >= 0) {
    expenses[editIndex] = item;
    editIndex = -1;
    if (addExpenseBtn) addExpenseBtn.textContent = '+ Add';
  } else {
    expenses.push(item);
  }

  renderExpenses();
  showToast('EXPENSE_SAVED (temporary)');
  document.getElementById('expenseDescription').value = '';
  document.getElementById('expenseAmount').value = '';
}

window.editExpense = function(i) {
  const e = expenses[i];
  document.getElementById('expenseDate').value = e.date;
  document.getElementById('expenseCategory').value = e.category;
  document.getElementById('expenseDescription').value = e.description;
  document.getElementById('expenseAmount').value = e.amount;
  editIndex = i;
  if (addExpenseBtn) addExpenseBtn.textContent = '\u21BB Update';
};

window.deleteExpense = function(i) {
  expenses.splice(i, 1);
  renderExpenses();
  showToast('DELETED');
};

if (addExpenseBtn) addExpenseBtn.addEventListener('click', addExpense);


const acc = document.getElementById('mistakesAccordion');
if (acc) {
  mistakesData.forEach((m, i) => {
    const item = document.createElement('div');
    item.className = 'acc-item';
    item.innerHTML = `
      <button type="button" class="acc-head">
        <span><span class="idx">0${i + 1}</span>${m.title}</span>
        <span class="arrow">\uFF0B</span>
      </button>
      <div class="acc-body">
        <div class="acc-body-in">
          <p style="margin-bottom:8px"><b>SCENARIO:</b> ${m.scenario}</p>
          <p style="margin-bottom:8px"><b>WHY IT HURTS:</b> ${m.explain}</p>
          <p><b>FIX:</b> ${m.fix}</p>
        </div>
      </div>
    `;
    acc.appendChild(item);
  });

  acc.addEventListener('click', e => {
    const head = e.target.closest('.acc-head');
    if (!head) return;
    const item = head.parentElement;
    const body = item.querySelector('.acc-body');
    const wasOpen = item.classList.contains('open');

    acc.querySelectorAll('.acc-item').forEach(it => {
      it.classList.remove('open');
      it.querySelector('.acc-body').style.maxHeight = '0';
    });

    if (!wasOpen) {
      item.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
}


const gGrid = document.getElementById('galleryGrid');

function renderGallery(f = 'all') {
  if (!gGrid) return;
  gGrid.innerHTML = '';
  galleryData
    .filter(g => f === 'all' || g.category === f)
    .forEach((g, i) => {
      const d = document.createElement('div');
      d.className = 'panel corner';
      d.style.animation = `bubbleIn .5s ${i * 0.06}s cubic-bezier(.22,1,.36,1) both`;
      d.innerHTML = `
        <div class="data-icon" style="font-size:2.2rem"><i class="bi ${g.icon}" aria-hidden="true"></i></div>
        <h5 style="margin-top:10px">${g.title}</h5>
        <p class="small muted" style="margin:6px 0 10px">${g.desc}</p>
        <span class="tag">${g.category}</span>
      `;
      gGrid.appendChild(d);
    });
}
renderGallery();

document.querySelectorAll('.filterBtn').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.filterBtn').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    renderGallery(b.dataset.filter);
  });
});


const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const sp = document.getElementById('suggestedPrompts');
const prompts = [
  "What is a need?",
  "How much should I save?",
  "How do I avoid overspending?",
  "What is a budget?",
  "What is a want?",
  "What is an expense?"
];

if (sp) {
  prompts.forEach(p => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip';
    b.textContent = p;
    b.addEventListener('click', () => {
      if (chatInput) chatInput.value = p;
      sendChat();
    });
    sp.appendChild(b);
  });
}

function addBubble(text, who) {
  if (!chatMessages) return null;
  const d = document.createElement('div');
  d.className = 'bubble ' + (who === 'user' ? 'usr' : 'bot');
  d.textContent = text;
  chatMessages.appendChild(d);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return d;
}

function getBotAnswer(msg) {
  const lower = msg.toLowerCase();
  for (const k in chatbotData) {
    if (k !== 'fallback' && lower.includes(k)) return chatbotData[k];
  }
  if (lower.includes('need')) return chatbotData["what is a need"];
  if (lower.includes('want')) return chatbotData["what is a want"];
  if (lower.includes('budget')) return chatbotData["what is a budget"];
  if (lower.includes('save')) return chatbotData["how much should i save"];
  if (lower.includes('overspend')) return chatbotData["how do i avoid overspending"];
  if (lower.includes('expense')) return chatbotData["what is an expense"];
  return chatbotData.fallback;
}

function sendChat() {
  if (!chatInput) return;
  const msg = chatInput.value.trim();
  if (!msg) return;
  addBubble(msg, 'user');
  chatInput.value = '';

  const typing = document.createElement('div');
  typing.className = 'bubble bot typing-dots';
  typing.innerHTML = '<span></span><span></span><span></span>';
  chatMessages.appendChild(typing);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  setTimeout(() => {
    typing.remove();
    addBubble(getBotAnswer(msg), 'bot');
  }, 700);
}

if (chatSend) chatSend.addEventListener('click', sendChat);
if (chatInput) {
  chatInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendChat();
  });
}
addBubble('Hi! I am BudgetBee. Ask me about budgeting basics!', 'bot');


const sRes = document.getElementById('searchResults');
const sInp = document.getElementById('searchInput');
const sSort = document.getElementById('sortSelect');
const noRes = document.getElementById('noResults');

function activeTopic() {
  const el = document.querySelector('.topicFilter.on');
  return el ? el.dataset.topic : 'all';
}

function renderSearch() {
  if (!sRes || !sInp) return;
  const text = sInp.value.toLowerCase();
  const topic = activeTopic();
  const sort = sSort ? sSort.value : 'newest';

  const f = searchData.filter(d =>
    (d.title + d.text).toLowerCase().includes(text) && (topic === 'all' || d.topic === topic)
  );

  if (sort === 'az') f.sort((a, b) => a.title.localeCompare(b.title));

  sRes.innerHTML = '';
  if (!f.length) {
    if (noRes) noRes.style.display = 'block';
    return;
  }
  if (noRes) noRes.style.display = 'none';

  f.forEach((d, i) => {
    const c = document.createElement('div');
    c.className = 'panel';
    c.style.animation = `bubbleIn .4s ${i * 0.05}s cubic-bezier(.22,1,.36,1) both`;
    c.innerHTML = `
      <h5>${d.title}</h5>
      <p class="small muted" style="margin:6px 0 10px">${d.text}</p>
      <span class="tag">${d.topic}</span>
    `;
    sRes.appendChild(c);
  });
}
renderSearch();

if (sInp) sInp.addEventListener('input', renderSearch);
if (sSort) sSort.addEventListener('change', renderSearch);
document.querySelectorAll('.topicFilter').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.topicFilter').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    renderSearch();
  });
});


const fbSubmit = document.getElementById('fbSubmit');
if (fbSubmit) {
  fbSubmit.addEventListener('click', () => {
    const name = document.getElementById('fbName').value.trim();
    const email = document.getElementById('fbEmail').value.trim();
    const rating = document.getElementById('fbRating').value;
    const comments = document.getElementById('fbComments').value.trim();
    const err = document.getElementById('fbError');
    const ok = document.getElementById('fbOk');
    if (err) err.textContent = '';
    if (ok) ok.style.display = 'none';

    if (!name) {
      if (err) err.textContent = 'Name required.';
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (err) err.textContent = 'Valid email required.';
      return;
    }
    if (!rating) {
      if (err) err.textContent = 'Select rating.';
      return;
    }
    if (!comments) {
      if (err) err.textContent = 'Comments required.';
      return;
    }

    if (ok) ok.style.display = 'block';
    showToast('FEEDBACK_VALIDATED');
    document.getElementById('fbName').value = '';
    document.getElementById('fbEmail').value = '';
    document.getElementById('fbRating').value = '';
    document.getElementById('fbComments').value = '';
  });
}



const contactSubmit = document.getElementById('contactSubmit');
if (contactSubmit) {
  contactSubmit.addEventListener('click', () => {
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    const err = document.getElementById('contactError');
    const ok = document.getElementById('contactOk');
    if (err) err.textContent = '';
    if (ok) ok.style.display = 'none';

    if (!name) {
      if (err) err.textContent = 'Name required.';
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (err) err.textContent = 'Valid email required.';
      return;
    }
    if (!subject) {
      if (err) err.textContent = 'Subject required.';
      return;
    }
    if (!message) {
      if (err) err.textContent = 'Message required.';
      return;
    }

    if (ok) ok.style.display = 'block';
    showToast('MESSAGE_VALIDATED');
    document.getElementById('contactName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactSubject').value = '';
    document.getElementById('contactMessage').value = '';
  });
}

if (toTop) {
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

if (window.matchMedia('(min-width:1025px) and (pointer:fine)').matches && !reduceMotion) {
  document.querySelectorAll('.panel').forEach(p => {
    if (p.closest('#planner')) return;
    p.addEventListener('mousemove', e => {
      const r = p.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      p.style.transform = `perspective(900px) rotateY(${x / 40}deg) rotateX(${-y / 40}deg) translateY(-4px)`;
    });
    p.addEventListener('mouseleave', () => {
      p.style.transform = '';
    });
  });

  const core = document.getElementById('core');
  if (core) {
    document.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 24;
      core.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
}

} // end initScript
