import { Member } from './models/Member.js';
import { Project } from './models/Project.js';
import { PortfolioManager } from './managers/PortfolioManagers.js';


function createAvatarSvg(bgHex, hairStyle, glasses = false) {
  const renderHair = () => {
    if (hairStyle === 'spiky') {
      return `<path d="M34 48 L40 24 L52 34 L60 20 L68 34 L80 24 L86 48 C76 38, 44 38, 34 48 Z" fill="#1A1A1A"/>`;
    }
    if (hairStyle === 'long') {
      return `
        <path d="M30 48 C30 18, 90 18, 90 48 L95 96 L78 96 L76 58 L44 58 L42 96 L25 96 Z" fill="#1A1A1A" stroke="#1A1A1A" stroke-width="3" stroke-linejoin="round"/>
        <path d="M34 46 C34 24, 86 24, 86 46 C76 36, 44 36, 34 46 Z" fill="#1A1A1A"/>
      `;
    }
    return `<path d="M34 48 C34 22, 86 22, 86 48 C78 36, 42 36, 34 48 Z" fill="#1A1A1A"/>`;
  };

  return `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Member Avatar">
      <rect width="120" height="120" fill="${bgHex}" />
      <!-- Back Hair (for long style) -->
      ${hairStyle === 'long' ? renderHair() : ''}
      <!-- Shoulders -->
      <path d="M22 120 C22 92, 98 92, 98 120 Z" fill="#FDF8EE" stroke="#1A1A1A" stroke-width="4"/>
      <!-- Neck -->
      <rect x="50" y="74" width="20" height="18" fill="#F7C9A9" stroke="#1A1A1A" stroke-width="3.5"/>
      <!-- Head -->
      <circle cx="60" cy="54" r="26" fill="#F7C9A9" stroke="#1A1A1A" stroke-width="4"/>
      <!-- Front/Short Hair -->
      ${hairStyle !== 'long' ? renderHair() : `<path d="M34 46 C34 24, 86 24, 86 46 C76 37, 44 37, 34 46 Z" fill="#1A1A1A"/>`}
      <!-- Eyes -->
      <circle cx="51" cy="54" r="3" fill="#1A1A1A"/>
      <circle cx="69" cy="54" r="3" fill="#1A1A1A"/>
      ${
        glasses
          ? `<rect x="42" y="47" width="16" height="13" rx="3" fill="rgba(253, 248, 238, 0.35)" stroke="#1A1A1A" stroke-width="3"/>
             <rect x="62" y="47" width="16" height="13" rx="3" fill="rgba(253, 248, 238, 0.35)" stroke="#1A1A1A" stroke-width="3"/>
             <line x1="58" y1="53" x2="62" y2="53" stroke="#1A1A1A" stroke-width="3"/>`
          : ''
      }
      <!-- Smile -->
      <path d="M52 65 Q60 72 68 65" fill="none" stroke="#1A1A1A" stroke-width="3.5" stroke-linecap="round"/>
    </svg>
  `;
}


const membersData = [
  new Member({
    id: 'member-1',
    fullName: 'Christopher Madamba',
    nickname: 'Tope',
    age: 22,
    birthday: 'November 8, 2004',
    intro: `Hello! I'm a passionate and curious individual who finds satisfaction in building and breaking things down to their core. I started my journey in technology in programming and web development, and my desire for learning continues to expand as I venture into the world of cybersecurity where I wish to land a career someday.`,
    accentColor: 'bg-coral',
    avatarSvg: createAvatarSvg('#FF6B6B', 'spiky', false),
    academics: {
      favoriteSubject: ['Human-Computer Interaction', 'Computer Programming', 'Object-Oriented Programming'],
      favoriteLanguage: 'JavaScript',
      languagesKnown: ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'C++'],
      preferredSpecialization: 'Full-Stack & Cybersecurity',
      favoriteSoftware: 'Linux Terminal & Aircrack-ng',
      skillToLearn: 'MERN Stack & Ethical Hacking'
    },
    interests: {
      hobbies: ['Penetration Testing', 'Indie Gaming', 'Poem Writing'],
      favoriteMusicGenre: 'Metalcore & Pop Punk',
      favoriteMovieOrSeries: ['The Amazing Spider-Man','Blue Lock','Haikyuu!!','Before Trilogy'],
      favoriteFood: 'Sinigang na Baboy',
      favoriteColor: 'Navy Blue'
    },
    personality: {
      threeWords: ['Observant', 'Analytical', 'Minimalist'],
      biggestPetPeeve: 'Misaligned 1px borders and unclosed HTML tags',
      personalMotto: 'The quieter you become, the more you are able to hear.',
      randomFact: 'I can drink a lot of coffee at night and still fall asleep, I just choose not to.'
    },
    goals: {
      dreamCountry: 'Japan',
      biggestCareerGoal: 'To be a cybersecurity expert and a full-stack developer who can create secure and efficient web applications.'
    }
  }),
  new Member({
    id: 'member-2',
    fullName: 'Angel Rolleda',
    nickname: 'Gel',
    age: 21,
    birthday: 'July 5, 2005',
    intro: `Hi! I'm someone who enjoys learning new things, exploring ideas, and finding meaning in the little things. I'm a curious person who likes to understand how things work, especially in technology. I'm still figuring things out, but I always try to learn, grow, and become better at what I do.`,
    accentColor: 'bg-teal',
    avatarSvg: createAvatarSvg('#4ECDC4', 'long', true),
    academics: {
      favoriteSubject: 'Computer Programming',
      favoriteLanguage: 'Java',
      languagesKnown: ['Java', 'JavaScript', 'Python', 'C++','HTML', 'CSS'],
      preferredSpecialization: 'Software Development',
      favoriteSoftware: 'VS Code',
      skillToLearn: 'Full-Stack Development & Cybersecurity'
    },
    interests: {
      hobbies: ['Sleeping', 'Gaming', 'Reading'],
      favoriteMusicGenre: 'R&B',
      favoriteMovieOrSeries: 'Little Women (2019)',
      favoriteFood: 'Adobo',
      favoriteColor: 'Red'
    },
    personality: {
      threeWords: ['Observant', 'Emotional', 'Independent'],
      biggestPetPeeve: `People who don't communicate properly, make assumptions, and don't consider how their actions affect others.`,
      personalMotto: `What you don't change, you choose.`,
      randomFact: 'I hate avocados.'
    },
    goals: {
      dreamCountry: 'Taiwan or somewhere in UK',
      biggestCareerGoal: `To become successful in the tech industry, continuously improve my skills, and build something meaningful that can make people's lives easier.`,
    }
  }),
  new Member({
    id: 'member-3',
    fullName: 'Kim Cyron Camero',
    nickname: 'Cy/Kim',
    age: 19,
    birthday: 'February 17, 2007',
    intro: `Hi, I’m Kim Cyron Camero you can call me Kim or Cy. I’m 19, and I’m working toward my goals one step at a time. As they say, “Life’s too short to be serious all the time unless there’s a deadline.`,
    accentColor: 'bg-lavender',
    avatarSvg: createAvatarSvg('#A78BFA', 'spiky', false),
    academics: {
      favoriteSubject: 'Computer Programming',
      favoriteLanguage: 'C++',
      languagesKnown: ['C++', 'JavaScript', 'Python',],
      preferredSpecialization: 'Networking & Security',
      favoriteSoftware: 'VS Code',
      skillToLearn: 'Web Development'
    },
    interests: {
      hobbies: ['Reading', 'Eating', 'Listening to music'],
      favoriteMusicGenre: ['Pop', 'Hip-hop/Rap', 'R&B/Soul'],
      favoriteMovieOrSeries: 'Harry Potter Series',
      favoriteFood: ['Sinigang', 'Pakbet'],
      favoriteColor: ['Blue', 'Light Purple']
    },
    personality: {
      threeWords: ['Curious', 'Determined', 'Easy-going'],
      biggestPetPeeve: `A person who doesn't use their brain.`,
      personalMotto: 'Still growing, still glowing, still figuring it out.',
      randomFact: `I’m a crammer I work best when the deadline gets close.`
    },
    goals: {
      dreamCountry: 'Japan and France',
      biggestCareerGoal: `My biggest career goal is to become a licensed Engineer.`
    }
  })
];

const projectsData = [
  new Project({
    title: 'QR You, Diva?',
    category: 'Web App',
    stack: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Vercel'],
    description: 'QR code based time in and out monitoring system for boarders and landlords.',
    accentColor: 'bg-coral'
  }),
  new Project({
    title: 'SCORE',
    category: 'Student Management System',
    stack: ['Java', 'HTML', 'CSS', 'GitHub', 'Vercel'],
    description: 'Straightforward and efficient student management system for school administrators and teachers to manage student records.',
    accentColor: 'bg-teal'
  })
];


const triviaData = [
  {
    id: 'q1',
    question: "Who's more likely to pursue cybersecurity?",
    memberId: 'member-1',
    votes: { 'member-1': 3, 'member-2': 0, 'member-3': 0 }
  },
  {
    id: 'q2',
    question: "Who's more likely to finish an assignment minutes before the deadline?",
    memberId: 'member-3',
    votes: { 'member-1': 0, 'member-2': 1, 'member-3': 2 }
  },
  {
    id: 'q3',
    question: "Who's more likely to debug code at 3 AM?",
    memberId: 'member-1',
    votes: { 'member-1': 2, 'member-2': 1, 'member-3': 0 }
  },
  {
    id: 'q4',
    question: "Who's more likely to get lost even with Google Maps?",
    memberId: 'member-2',
    votes: { 'member-1': 0, 'member-2': 3, 'member-3': 0 }
  },
  {
    id: 'q5',
    question: "Who's more likely to become a CEO?",
    memberId: 'member-3',
    votes: { 'member-1': 0, 'member-2': 0, 'member-3': 3 }
  },
  {
    id: 'q6',
    question: "Who's more likely to work abroad?",
    memberId: 'member-2',
    votes: { 'member-1': 0, 'member-2': 3, 'member-3': 0 }
  },
  {
    id: 'q7',
    question: "Who's more likely to be the group's tech support?",
    memberId: 'member-1',
    votes: { 'member-1': 3, 'member-2': 0, 'member-3': 0 }
  },
  {
    id: 'q8',
    question: "Who's more likely to finish assignments early?",
    memberId: `member-1`,
    votes: { 'member-1': 3, 'member-2': 0, 'member-3': 0 }
  }
];

const portfolio = new PortfolioManager({
  members: membersData,
  projects: projectsData,
  triviaItems: triviaData
});

function renderHeroWidgets() {
  const cluster = document.getElementById('heroAvatarCluster');
  const projectList = document.getElementById('heroProjectsList');

  const members = portfolio.getAllMembers();
  cluster.innerHTML = members
    .map(
      (m) => `
      <button class="cluster-avatar ${m.accentColor}" data-member-id="${m.id}" title="View ${m.fullName}">
        ${m.getInitials()}
      </button>
    `
    )
    .join('');

  cluster.querySelectorAll('.cluster-avatar').forEach((btn) => {
    btn.addEventListener('click', () => openMemberModal(btn.dataset.memberId));
  });

  // Polymorphic call to renderPreview()
  const projects = portfolio.getAllProjects();
  projectList.innerHTML = projects
    .map((proj) => `<div class="mini-project-item">${proj.renderPreview()}</div>`)
    .join('');
}

function renderMemberCards() {
  const grid = document.getElementById('membersGrid');
  const members = portfolio.getAllMembers();

  grid.innerHTML = members
    .map((member) => {
      const summary = member.getSummaryCardData();
      return `
        <article class="member-card" data-member-id="${member.id}">
          <div class="member-card-banner ${member.accentColor}">
            <div class="member-avatar-frame">
              ${member.avatarSvg}
            </div>
            <span class="member-age-badge">Age ${member.age}</span>
          </div>
          <div class="member-card-body">
            <h3 class="member-name">${member.fullName}</h3>
            <p class="member-nickname">aka "${member.nickname}"</p>
            <span class="member-spec-tag bg-yellow">${summary.badge}</span>
            <p class="member-intro">${member.intro}</p>
            <button class="btn ${member.accentColor} member-card-btn" data-open-id="${member.id}">
              <span>View Full Profile</span>
              <i data-lucide="arrow-up-right"></i>
            </button>
          </div>
        </article>
      `;
    })
    .join('');

  grid.querySelectorAll('[data-open-id]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openMemberModal(btn.dataset.openId);
    });
  });
}

function openMemberModal(memberId) {
  const member = portfolio.getMemberById(memberId);
  if (!member) return;

  const modal = document.getElementById('memberModal');
  const topbar = document.getElementById('modalTopbar');
  const body = document.getElementById('modalBody');

  topbar.className = `modal-topbar ${member.accentColor}`;

  body.innerHTML = `
    <div class="modal-hero-header bg-cream">
      <div class="modal-avatar-lg">${member.avatarSvg}</div>
      <div>
        <h3 id="modalMemberName" class="member-name">${member.fullName} ("${member.nickname}")</h3>
        <p class="member-nickname">Age ${member.age} • Born ${member.birthday}</p>
        <p>${member.intro}</p>
      </div>
    </div>

    <div class="dossier-grid">
      <div class="dossier-card bg-yellow">
        <h4><i data-lucide="cpu"></i> IT & Academics</h4>
        <ul class="dossier-list">
          <li><strong>Favorite Subject:</strong> ${member.academics.favoriteSubject}</li>
          <li><strong>Favorite Language:</strong> ${member.academics.favoriteLanguage}</li>
          <li><strong>Languages Known:</strong> ${member.academics.languagesKnown.join(', ')}</li>
          <li><strong>Specialization:</strong> ${member.academics.preferredSpecialization}</li>
          <li><strong>Favorite Software:</strong> ${member.academics.favoriteSoftware}</li>
          <li><strong>Skill to Learn:</strong> ${member.academics.skillToLearn}</li>
        </ul>
      </div>

      <div class="dossier-card bg-teal">
        <h4><i data-lucide="heart"></i> Personal Interests</h4>
        <ul class="dossier-list">
          <li><strong>Hobbies:</strong> ${member.interests.hobbies.join(', ')}</li>
          <li><strong>Music Genre:</strong> ${member.interests.favoriteMusicGenre}</li>
          <li><strong>Movie / Series:</strong> ${member.interests.favoriteMovieOrSeries}</li>
          <li><strong>Favorite Food:</strong> ${member.interests.favoriteFood}</li>
          <li><strong>Favorite Color:</strong> ${member.interests.favoriteColor}</li>
        </ul>
      </div>

      <div class="dossier-card bg-lavender">
        <h4><i data-lucide="sparkles"></i> Personality</h4>
        <ul class="dossier-list">
          <li><strong>Three Words:</strong> ${member.personality.threeWords.join(' • ')}</li>
          <li><strong>Biggest Pet Peeve:</strong> ${member.personality.biggestPetPeeve}</li>
          <li><strong>Personal Motto:</strong> "${member.personality.personalMotto}"</li>
          <li><strong>Random Fact:</strong> ${member.personality.randomFact}</li>
        </ul>
      </div>

      <div class="dossier-card bg-peach">
        <h4><i data-lucide="compass"></i> Goals & Aspirations</h4>
        <ul class="dossier-list">
          <li><strong>Dream Country:</strong> ${member.goals.dreamCountry}</li>
          <li><strong>Biggest Career Goal:</strong> ${member.goals.biggestCareerGoal}</li>
        </ul>
      </div>
    </div>
  `;

  modal.hidden = false;
  if (window.lucide) window.lucide.createIcons();
}

function renderSharedInterests(filter = 'all') {
  const grid = document.getElementById('sharedInterestsGrid');
  const categories = portfolio.computeAllSharedInterests();

  grid.innerHTML = categories
    .map((cat) => {
      const filteredEntries = cat.entries.filter((entry) => {
        if (filter === 'shared') return entry.members.length >= 2;
        if (filter === 'unique') return entry.members.length === 1;
        return true;
      });

      if (filteredEntries.length === 0) return '';

      return `
        <article class="shared-card">
          <div class="shared-card-header">
            <h3 class="shared-category-title">${cat.categoryTitle}</h3>
            <span class="tag-pill ${cat.accentColor}">${filteredEntries.length} items</span>
          </div>
          <div class="match-list">
            ${filteredEntries
              .map(
                (entry) => `
                <div class="match-row ${entry.members.length >= 2 ? cat.accentColor : 'bg-cream'}">
                  <div class="match-value">
                    ${entry.members.length >= 2 ? '★ ' : ''}${entry.label}
                  </div>
                  <div class="match-members">
                    ${entry.members.map((nick) => `<span class="mini-member-chip">${nick}</span>`).join('')}
                  </div>
                </div>
              `
              )
              .join('')}
          </div>
        </article>
      `;
    })
    .join('');
}

function renderTriviaCards(revealedSet = new Set()) {
  const grid = document.getElementById('triviaGrid');
  const items = portfolio.getTriviaItems();
  const allMembers = portfolio.getAllMembers();

  grid.innerHTML = items
    .map((item, idx) => {
      const isRevealed = revealedSet.has(item.id);
      const winner = item.member;
      const votes = item.votes || {};
      const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0) || 1;

      const pollRowsHtml = allMembers
        .map((m) => {
          const count = votes[m.id] || 0;
          const pct = Math.round((count / totalVotes) * 100);
          const isTop = winner && m.id === winner.id;

          return `
            <div class="poll-row">
              <div class="poll-label-line">
                <span>${isTop ? '★ ' : ''}${m.nickname}</span>
                <span>${count} ${count === 1 ? 'vote' : 'votes'} (${pct}%)</span>
              </div>
              <div class="poll-track bg-cream">
                <div class="poll-fill ${m.accentColor}" style="width: ${pct}%;"></div>
              </div>
            </div>
          `;
        })
        .join('');

      return `
        <article class="trivia-card">
          <div>
            <span class="trivia-q-number bg-yellow">WHO'S MORE LIKELY TO #0${idx + 1}</span>
            <h3 class="trivia-question">${item.question}</h3>
          </div>

          ${
            isRevealed && winner
              ? `
              <div class="trivia-answer-box ${winner.accentColor}">
                <div class="trivia-winner-row">
                  <div class="trivia-winner-avatar">${winner.avatarSvg}</div>
                  <div>
                    <div class="trivia-winner-name">${winner.fullName}</div>
                    <small><strong>Top Pick • "${winner.nickname}"</strong></small>
                  </div>
                </div>

                <div class="poll-box bg-cream">
                  <p class="poll-heading">SQUAD POLL RESULTS</p>
                  ${pollRowsHtml}
                </div>

                <button class="btn bg-cream hide-single-btn" data-hide-id="${item.id}">
                  <i data-lucide="eye-off"></i> Hide Answer
                </button>
              </div>
            `
              : `
              <button class="btn bg-teal reveal-btn" data-trivia-id="${item.id}">
                <i data-lucide="eye"></i> Reveal Answer
              </button>
            `
          }
        </article>
      `;
    })
    .join('');

  grid.querySelectorAll('.reveal-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      revealedSet.add(btn.dataset.triviaId);
      renderTriviaCards(revealedSet);
      refreshIcons();
    });
  });

  grid.querySelectorAll('.hide-single-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      revealedSet.delete(btn.dataset.hideId);
      renderTriviaCards(revealedSet);
      refreshIcons();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const revealedTrivia = new Set();

  renderHeroWidgets();
  renderMemberCards();
  renderSharedInterests('all');
  renderTriviaCards(revealedTrivia);

  document.querySelectorAll('.seg-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.seg-tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      renderSharedInterests(tab.dataset.filter);
    });
  });

  document.getElementById('revealAllBtn').addEventListener('click', () => {
    portfolio.getTriviaItems().forEach((item) => revealedTrivia.add(item.id));
    renderTriviaCards(revealedTrivia);
    if (window.lucide) window.lucide.createIcons();
  });

  document.getElementById('resetAllBtn').addEventListener('click', () => {
    revealedTrivia.clear();
    renderTriviaCards(revealedTrivia);
    if (window.lucide) window.lucide.createIcons();
  });

  const modal = document.getElementById('memberModal');
  document.getElementById('closeModalBtn').addEventListener('click', () => {
    modal.hidden = true;
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.hidden = true;
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) modal.hidden = true;
  });

  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDropdown = document.getElementById('mobileDropdown');
  mobileBtn.addEventListener('click', () => {
    mobileDropdown.classList.toggle('open');
  });

  document.querySelectorAll('.nav-tab').forEach((link) => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-tab').forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
});