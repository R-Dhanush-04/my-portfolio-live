
document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 1. Web Audio FX Engine
  // -------------------------------------------------------------
  let audioEnabled = true;
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playChime(freq = 587.33, type = 'sine', duration = 0.1) {
    if (!audioEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // AudioContext policy fallback
    }
  }

  const audioToggleBtn = document.getElementById('audioToggleBtn');
  const audioIcon = document.getElementById('audioIcon');
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      audioEnabled = !audioEnabled;
      if (audioIcon) {
        audioIcon.className = audioEnabled ? 'bi bi-volume-up-fill' : 'bi bi-volume-mute-fill';
      }
      if (audioEnabled) playChime(659.25, 'triangle', 0.15);
    });
  }

  // -------------------------------------------------------------
  // 2. Web Speech Synthesis Voice Narrator
  // -------------------------------------------------------------
  function speakText(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  }

  const heroVoiceGreetingBtn = document.getElementById('heroVoiceGreetingBtn');
  if (heroVoiceGreetingBtn) {
    heroVoiceGreetingBtn.addEventListener('click', () => {
      playChime(783.99, 'triangle', 0.2);
      speakText("Hello and welcome! I am Dhanush R, a Java Full Stack Developer specializing in Core Java 21, Spring Boot, MySQL, and React.js. Explore my portfolio and credentials!");
    });
  }

  const avatarVoiceBtn = document.getElementById('avatarVoiceBtn');
  if (avatarVoiceBtn) {
    avatarVoiceBtn.addEventListener('click', () => {
      playChime(659.25, 'sine', 0.15);
      speakText("Hi there! Welcome to Dhanush's portfolio! Feel free to explore his projects and resume!");
    });
  }

  const voiceNarratorNavBtn = document.getElementById('voiceNarratorNavBtn');
  if (voiceNarratorNavBtn) {
    voiceNarratorNavBtn.addEventListener('click', () => {
      playChime(880, 'triangle', 0.2);
      speakText("Dhanush R is a Computer Science Engineer with an 8.1 CGPA. He specializes in enterprise Java, Spring Boot microservices, and React. He is available for immediate joining.");
    });
  }

  const floatingVoiceBtn = document.getElementById('floatingVoiceBtn');
  if (floatingVoiceBtn) {
    floatingVoiceBtn.addEventListener('click', () => {
      playChime(783.99, 'sine', 0.2);
      speakText("Dhanush R is actively interviewing for Java Developer and Full Stack roles. You can download his resume or contact him directly!");
    });
  }

  // -------------------------------------------------------------
  // 3. 3D Flip Card Interactions
  // -------------------------------------------------------------
  const heroFlipCard = document.getElementById('heroFlipCard');
  const flipToBoyBtn = document.getElementById('flipToBoyBtn');
  const flipBackBtn = document.getElementById('flipBackBtn');

  if (flipToBoyBtn && heroFlipCard) {
    flipToBoyBtn.addEventListener('click', () => {
      playChime(523.25, 'triangle', 0.15);
      heroFlipCard.classList.add('is-flipped');
    });
  }

  if (flipBackBtn && heroFlipCard) {
    flipBackBtn.addEventListener('click', () => {
      playChime(440, 'triangle', 0.15);
      heroFlipCard.classList.remove('is-flipped');
    });
  }

  // -------------------------------------------------------------
  // 4. EXTERNAL RESUME DOCK: UPPER SET ABOVE AI BOT
  // -------------------------------------------------------------
  const externalResumeToggle = document.getElementById('externalResumeToggle');
  const externalResumePanel = document.getElementById('externalResumePanel');
  const closeResumePanelBtn = document.getElementById('closeResumePanelBtn');
  const externalResumeLink = document.getElementById('externalResumeLink');
  const mainResumeOpenBtn = document.getElementById('mainResumeOpenBtn');
  const copyResumeLinkBtn = document.getElementById('copyResumeLinkBtn');
  const dockCopyResumeBtn = document.getElementById('dockCopyResumeBtn');

  if (externalResumeToggle && externalResumePanel) {
    externalResumeToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      playChime(659.25, 'sine', 0.1);
      const isHidden = externalResumePanel.hasAttribute('hidden');
      if (isHidden) {
        externalResumePanel.removeAttribute('hidden');
        externalResumeToggle.setAttribute('aria-expanded', 'true');
      } else {
        externalResumePanel.setAttribute('hidden', '');
        externalResumeToggle.setAttribute('aria-expanded', 'false');
      }
    });

    if (closeResumePanelBtn) {
      closeResumePanelBtn.addEventListener('click', () => {
        externalResumePanel.setAttribute('hidden', '');
        externalResumeToggle.setAttribute('aria-expanded', 'false');
      });
    }

    // Dismiss on outside click
    document.addEventListener('click', (e) => {
      if (!externalResumePanel.contains(e.target) && !externalResumeToggle.contains(e.target)) {
        externalResumePanel.setAttribute('hidden', '');
        externalResumeToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function handleCopyResumeUrl(btnElement) {
    playChime(587.33, 'sine', 0.1);
    const resumePath = new URL('Dhanush_R_Resume 1.pdf', window.location.href).href;
    navigator.clipboard.writeText(resumePath).then(() => {
      if (btnElement) {
        const originalHtml = btnElement.innerHTML;
        btnElement.innerHTML = '<i class="bi bi-check-lg text-emerald"></i> Copied!';
        setTimeout(() => {
          btnElement.innerHTML = originalHtml;
        }, 2000);
      }
    });
  }

  if (copyResumeLinkBtn) {
    copyResumeLinkBtn.addEventListener('click', () => handleCopyResumeUrl(copyResumeLinkBtn));
  }
  if (dockCopyResumeBtn) {
    dockCopyResumeBtn.addEventListener('click', () => handleCopyResumeUrl(dockCopyResumeBtn));
  }

  // -------------------------------------------------------------
  // 5. AI Career Assistant Drawer
  // -------------------------------------------------------------
  const floatingAiBotBtn = document.getElementById('floatingAiBotBtn');
  const aiDrawer = document.getElementById('aiDrawer');
  const closeAiDrawerBtn = document.getElementById('closeAiDrawerBtn');
  const aiInput = document.getElementById('aiInput');
  const aiSendBtn = document.getElementById('aiSendBtn');
  const aiChatLog = document.getElementById('aiChatLog');

  if (floatingAiBotBtn && aiDrawer) {
    floatingAiBotBtn.addEventListener('click', () => {
      playChime(659.25, 'triangle', 0.15);
      const isHidden = aiDrawer.hasAttribute('hidden');
      if (isHidden) {
        aiDrawer.removeAttribute('hidden');
      } else {
        aiDrawer.setAttribute('hidden', '');
      }
    });

    if (closeAiDrawerBtn) {
      closeAiDrawerBtn.addEventListener('click', () => {
        aiDrawer.setAttribute('hidden', '');
      });
    }
  }

  function handleAiSend(query) {
    if (!query || !query.trim()) return;
    playChime(523.25, 'sine', 0.08);

    // Append user message
    const userDiv = document.createElement('div');
    userDiv.className = 'user-msg';
    userDiv.textContent = query;
    aiChatLog.appendChild(userDiv);
    aiInput.value = '';

    // Scroll chat
    aiChatLog.scrollTop = aiChatLog.scrollHeight;

    // Simulate response
    setTimeout(() => {
      playChime(783.99, 'sine', 0.1);
      const botDiv = document.createElement('div');
      botDiv.className = 'bot-msg';
      const q = query.toLowerCase();

      if (q.includes('skill') || q.includes('stack')) {
        botDiv.textContent = "Dhanush's core technical competencies: Core Java 21, Spring Boot, MySQL, SQLite, React.js, JavaScript, and Git.";
      } else if (q.includes('project')) {
        botDiv.textContent = "Flagship projects: Movie Ticket Booking System (Spring Boot + MySQL), RedStore E-Commerce (React), and Firewall Threat Detection (Core Java Sockets).";
      } else if (q.includes('internship') || q.includes('experience') || q.includes('prime vector') || q.includes('login360')) {
        botDiv.textContent = "Dhanush is currently doing an internship at Login360, learning and building practical skills in Java Full Stack development. He also completed a 2-month internship at Prime Vector Private Limited focused on sales and marketing.";
      } else if (q.includes('education') || q.includes('cgpa')) {
        botDiv.textContent = "Dhanush holds a B.E. in Computer Science & Engineering with an 8.1 CGPA from Asian College of Engineering & Technology, and is interning at Login360.";
      } else if (q.includes('join') || q.includes('immediate') || q.includes('hire')) {
        botDiv.textContent = "Dhanush is an Immediate Joiner (0 days notice) located in Chennai, and open to relocation or remote opportunities.";
      } else {
        botDiv.textContent = "Dhanush is an enthusiastic Java Full Stack Developer ready for software engineering opportunities. You can contact him at dhanutech04@gmail.com or +91 9361902056!";
      }

      aiChatLog.appendChild(botDiv);
      aiChatLog.scrollTop = aiChatLog.scrollHeight;
    }, 450);
  }

  if (aiSendBtn && aiInput) {
    aiSendBtn.addEventListener('click', () => handleAiSend(aiInput.value));
    aiInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleAiSend(aiInput.value);
    });
  }

  document.querySelectorAll('.quick-topic-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      handleAiSend(btn.textContent);
    });
  });

  // Recruiter nav modal
  const recruiterModalNavBtn = document.getElementById('recruiterModalNavBtn');
  if (recruiterModalNavBtn && window.bootstrap) {
    recruiterModalNavBtn.addEventListener('click', () => {
      playChime(659.25, 'sine', 0.1);
      const modalEl = document.getElementById('recruiterModal');
      if (modalEl) {
        const modal = new window.bootstrap.Modal(modalEl);
        modal.show();
      }
    });
  }

  // -------------------------------------------------------------
  // 6. Scroll Progress Bar & Real-time Alignment HUD
  // -------------------------------------------------------------
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const hudPillBtn = document.getElementById('hudPillBtn');
  const hudPanel = document.getElementById('hudPanel');
  const hudCloseBtn = document.getElementById('hudCloseBtn');
  const hudActiveSectionText = document.getElementById('hudActiveSectionText');
  const hudScrollPercentText = document.getElementById('hudScrollPercentText');
  const hudScrollPxText = document.getElementById('hudScrollPxText');
  const hudTargetStatus = document.getElementById('hudTargetStatus');
  const hudOffsetLabel = document.getElementById('hudOffsetLabel');
  const hudTargetBtns = document.querySelectorAll('.hud-target-btn');

  if (hudPillBtn && hudPanel) {
    hudPillBtn.addEventListener('click', () => {
      playChime(659.25, 'sine', 0.08);
      hudPanel.classList.toggle('hud-open');
    });
  }

  if (hudCloseBtn && hudPanel) {
    hudCloseBtn.addEventListener('click', () => {
      hudPanel.classList.remove('hud-open');
    });
  }

  // Handle smooth alignment jumping
  hudTargetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        playChime(783.99, 'triangle', 0.15);
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const sectionIds = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];

  function updateScrollAlignmentTelemetry() {
    const scrollY = window.scrollY;
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percent = totalScroll > 0 ? Math.round((scrollY / totalScroll) * 100) : 0;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${percent}%`;
    }

    if (hudScrollPercentText) {
      hudScrollPercentText.textContent = `${percent}%`;
    }

    if (hudScrollPxText) {
      hudScrollPxText.textContent = `${Math.round(scrollY)}px (${percent}%)`;
    }

    // Determine currently aligned section
    let currentSection = 'home';
    let minDistance = Infinity;

    for (const sid of sectionIds) {
      const el = document.getElementById(sid);
      if (el) {
        const top = el.offsetTop - 90; // account for sticky navbar
        const dist = Math.abs(scrollY - top);
        if (scrollY >= top - 80) {
          currentSection = sid;
        }
        if (dist < minDistance) {
          minDistance = dist;
        }
      }
    }

    if (hudActiveSectionText) {
      hudActiveSectionText.textContent = `#${currentSection}`;
    }

    if (hudTargetStatus) {
      hudTargetStatus.textContent = `#${currentSection}`;
    }

    if (hudOffsetLabel) {
      if (minDistance <= 35) {
        hudOffsetLabel.textContent = 'Snapped (0px offset) 🎯';
        hudOffsetLabel.className = 'text-emerald fw-bold';
      } else {
        hudOffsetLabel.textContent = `Offset Δ${Math.round(minDistance)}px (In-Transit)`;
        hudOffsetLabel.className = 'text-purple-300';
      }
    }

    // Highlight target button
    hudTargetBtns.forEach(btn => {
      if (btn.getAttribute('data-target') === currentSection) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateScrollAlignmentTelemetry, { passive: true });
  updateScrollAlignmentTelemetry();

  // -------------------------------------------------------------
  // 6a. Dynamic On-Scroll Section Reveal Observer
  // -------------------------------------------------------------
  const allSections = document.querySelectorAll('section');
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-reveal-visible');
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.08
  });

  allSections.forEach(sec => {
    sec.classList.add('scroll-reveal-init');
    // Reveal immediately if at the top or already visible
    if (sec.id === 'home' || sec.getBoundingClientRect().top < window.innerHeight) {
      sec.classList.add('scroll-reveal-visible');
    }
    scrollObserver.observe(sec);
  });

  // -------------------------------------------------------------
  // 6b. Interactive AI Doll Entrance Gateway
  // -------------------------------------------------------------
  const entranceGateway = document.getElementById('entranceGateway');
  const enterPortfolioBtn = document.getElementById('enterPortfolioBtn');
  const sayHiVoiceBtn = document.getElementById('sayHiVoiceBtn');
  const sayHiVoiceText = document.getElementById('sayHiVoiceText');
  const skipIntroLink = document.getElementById('skipIntroLink');
  const reopenEntranceBtn = document.getElementById('reopenEntranceBtn');
  const entranceTimerText = document.getElementById('entranceTimerText');

  let entranceRemainingSec = 12;
  let entranceTimer = null;

  function dismissEntranceGateway() {
    if (entranceTimer) clearInterval(entranceTimer);
    playChime(880, 'triangle', 0.25);
    if (entranceGateway) {
      entranceGateway.classList.add('gateway-hidden');
      setTimeout(() => {
        entranceGateway.style.display = 'none';
      }, 600);
    }
  }

  function openEntranceGateway() {
    if (entranceGateway) {
      entranceGateway.style.display = 'flex';
      setTimeout(() => {
        entranceGateway.classList.remove('gateway-hidden');
      }, 10);
      playChime(587.33, 'sine', 0.15);
    }
  }

  if (entranceGateway && entranceTimerText) {
    entranceTimer = setInterval(() => {
      entranceRemainingSec--;
      if (entranceRemainingSec <= 0) {
        dismissEntranceGateway();
      } else {
        entranceTimerText.textContent = `Auto-enter in ${entranceRemainingSec}s`;
      }
    }, 1000);
  }

  if (enterPortfolioBtn) {
    enterPortfolioBtn.addEventListener('click', dismissEntranceGateway);
  }

  if (skipIntroLink) {
    skipIntroLink.addEventListener('click', (e) => {
      e.preventDefault();
      dismissEntranceGateway();
    });
  }

  if (reopenEntranceBtn) {
    reopenEntranceBtn.addEventListener('click', () => {
      openEntranceGateway();
    });
  }

  if (sayHiVoiceBtn) {
    sayHiVoiceBtn.addEventListener('click', () => {
      playChime(659.25, 'sine', 0.15);
      if (sayHiVoiceText) sayHiVoiceText.textContent = 'Speaking...';
      speakText("Hi there! Welcome! I am the AI companion for Dhanush R, Java Full Stack Developer. Welcome to Dhanush's portfolio! Feel free to explore his projects and resume.");
      setTimeout(() => {
        if (sayHiVoiceText) sayHiVoiceText.textContent = 'Say Hi (Voice Greeting)';
      }, 4000);
    });
  }

  // -------------------------------------------------------------
  // 7. Constellation Particle Canvas
  // -------------------------------------------------------------
  const canvas = document.getElementById('particleCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = Math.min(60, Math.floor((width * height) / 18000));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.3
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(168, 85, 247, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.2 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }
    animate();
  }
});
