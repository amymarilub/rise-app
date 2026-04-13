/* ============================================
   RISE - Daily Habit Phoenix App
   ============================================ */

// ---- Constants ----

const LEVEL_THRESHOLDS = [
    { level: 1, xp: 0, title: 'Ember', avatar: '🪨' },
    { level: 2, xp: 100, title: 'Ember', avatar: '🪨' },
    { level: 3, xp: 250, title: 'Ember', avatar: '🪨' },
    { level: 4, xp: 500, title: 'Ember', avatar: '🪨' },
    { level: 5, xp: 800, title: 'Spark', avatar: '✨' },
    { level: 6, xp: 1200, title: 'Spark', avatar: '✨' },
    { level: 7, xp: 1700, title: 'Spark', avatar: '✨' },
    { level: 8, xp: 2300, title: 'Spark', avatar: '✨' },
    { level: 9, xp: 3000, title: 'Spark', avatar: '✨' },
    { level: 10, xp: 3800, title: 'Flame', avatar: '🔥' },
    { level: 11, xp: 4700, title: 'Flame', avatar: '🔥' },
    { level: 12, xp: 5700, title: 'Flame', avatar: '🔥' },
    { level: 13, xp: 6800, title: 'Flame', avatar: '🔥' },
    { level: 14, xp: 8000, title: 'Flame', avatar: '🔥' },
    { level: 15, xp: 9500, title: 'Blaze', avatar: '🦅' },
    { level: 16, xp: 11200, title: 'Blaze', avatar: '🦅' },
    { level: 17, xp: 13000, title: 'Blaze', avatar: '🦅' },
    { level: 18, xp: 15000, title: 'Blaze', avatar: '🦅' },
    { level: 19, xp: 17500, title: 'Blaze', avatar: '🦅' },
    { level: 20, xp: 20000, title: 'Inferno', avatar: '🐦‍🔥' },
    { level: 21, xp: 23000, title: 'Inferno', avatar: '🐦‍🔥' },
    { level: 22, xp: 26500, title: 'Inferno', avatar: '🐦‍🔥' },
    { level: 23, xp: 30000, title: 'Inferno', avatar: '🐦‍🔥' },
    { level: 24, xp: 34000, title: 'Inferno', avatar: '🐦‍🔥' },
    { level: 25, xp: 40000, title: 'Phoenix', avatar: '🐦‍🔥' },
];

const ACHIEVEMENTS = [
    { id: 'first_task', name: 'First Spark', icon: '✨', desc: 'Complete your first task' },
    { id: 'first_perfect', name: 'Perfect Day', icon: '⭐', desc: 'Complete all 5 tasks in a day' },
    { id: 'streak_7', name: '7-Day Fire', icon: '🔥', desc: '7-day streak' },
    { id: 'streak_14', name: 'Fortnight Flame', icon: '🔥', desc: '14-day streak' },
    { id: 'streak_30', name: 'Monthly Blaze', icon: '🌋', desc: '30-day streak' },
    { id: 'streak_60', name: 'Dual Moon', icon: '🌙', desc: '60-day streak' },
    { id: 'streak_100', name: 'Century Phoenix', icon: '🏆', desc: '100-day streak' },
    { id: 'tasks_50', name: '50 Tasks', icon: '💪', desc: 'Complete 50 tasks total' },
    { id: 'tasks_100', name: 'Centurion', icon: '⚔️', desc: 'Complete 100 tasks total' },
    { id: 'tasks_500', name: 'Commander', icon: '🛡️', desc: 'Complete 500 tasks total' },
    { id: 'tasks_1000', name: 'Legend', icon: '👑', desc: 'Complete 1000 tasks total' },
    { id: 'rise_from_ashes', name: 'Rise from Ashes', icon: '🐦‍🔥', desc: 'Recover from a broken streak' },
    { id: 'perfect_week', name: 'Perfect Week', icon: '💎', desc: '7 consecutive Perfect Days' },
    { id: 'level_5', name: 'Spark Rank', icon: '⚡', desc: 'Reach Level 5' },
    { id: 'level_10', name: 'Flame Rank', icon: '🔥', desc: 'Reach Level 10' },
    { id: 'level_25', name: 'Phoenix Rank', icon: '🏆', desc: 'Reach Level 25' },
];

const QUARTERLY_CHALLENGES = {
    1: {
        name: 'New Flame',
        challenges: [
            { id: 'q1_streak14', name: 'Build a 14-day streak', target: 14, type: 'streak' },
            { id: 'q1_xp1000', name: 'Earn 1,000 XP', target: 1000, type: 'quarter_xp' },
            { id: 'q1_perfect10', name: '10 Perfect Days', target: 10, type: 'quarter_perfect' },
        ]
    },
    2: {
        name: 'Rising Heat',
        challenges: [
            { id: 'q2_perfect20', name: '20 Perfect Days', target: 20, type: 'quarter_perfect' },
            { id: 'q2_level10', name: 'Reach Level 10', target: 10, type: 'level' },
            { id: 'q2_tasks200', name: 'Complete 200 tasks', target: 200, type: 'quarter_tasks' },
        ]
    },
    3: {
        name: 'Inferno',
        challenges: [
            { id: 'q3_streak30', name: '30-day streak', target: 30, type: 'streak' },
            { id: 'q3_xp2500', name: 'Earn 2,500 XP this quarter', target: 2500, type: 'quarter_xp' },
            { id: 'q3_perfect25', name: '25 Perfect Days', target: 25, type: 'quarter_perfect' },
        ]
    },
    4: {
        name: 'Phoenix Reborn',
        challenges: [
            { id: 'q4_perfect50', name: '50 Perfect Days total', target: 50, type: 'total_perfect' },
            { id: 'q4_level20', name: 'Reach Level 20', target: 20, type: 'level' },
            { id: 'q4_tasks500', name: 'Complete 500 tasks total', target: 500, type: 'total_tasks' },
        ]
    }
};

const PHOENIX_QUOTES = [
    // No-excuses accountability (Frisella energy)
    "Nobody cares about your excuses. Your results speak for themselves.",
    "You're not tired. You're uninspired. Fix your five and watch what happens.",
    "Average people make excuses. Uncommon people make progress.",
    "Stop negotiating with yourself. Do the work or stay stuck.",
    "The gap between where you are and where you want to be? It's called discipline.",
    "Comfort is the enemy of growth. Get uncomfortable today.",
    "You don't have to feel like it. You just have to do it.",
    "Your future is built in the hours nobody sees.",
    "Zero days are not an option. Period.",
    "If it was easy, everyone would do it. That's exactly why you should.",
    "Motivation is garbage. Build systems. Build habits. Build yourself.",
    "Nobody's coming to save you. That's your job now.",
    "Hard work isn't optional when you want an exceptional life.",
    "Talk is cheap. Your task list is where the truth lives.",
    "Winning isn't a sometimes thing. It's an every day thing.",

    // Self-belief & empowerment (Hollis energy)
    "You are worthy of the life you keep dreaming about. Now go build it.",
    "Stop waiting for permission to become who you're meant to be.",
    "You were not made to play small. Rise into your full power.",
    "The woman you're becoming will cost you people, comfort, and old habits. She's worth it.",
    "You don't need to be fixed. You need to be fueled.",
    "Your past does not define your potential. Today does.",
    "Stop apologizing for having goals that intimidate other people.",
    "You are allowed to be both a masterpiece and a work in progress.",
    "Girl, get up. Wash your face. Crush your five.",
    "The most powerful thing you can do is keep a promise to yourself.",
    "You are one decision away from a completely different life.",
    "Believe in the fire inside you, even when no one else can see it.",
    "Your dreams don't have an expiration date. But your excuses should.",
    "Comparison will kill your fire faster than failure ever could.",
    "You were built to rise. Act like it.",

    // Phoenix / RISE themed
    "From the ashes, we rise stronger than before.",
    "The phoenix doesn't fear the fire — it becomes it.",
    "Burn away excuses. Rise with purpose.",
    "A phoenix doesn't skip days.",
    "Show up. Do the work. Rise.",
    "The comeback is always stronger than the setback.",
    "Every day you rise, you add fuel to your fire.",
    "Be the flame, not the moth.",
    "Keep the fire burning. Keep the streak alive.",
    "Forge yourself in the daily fire.",
    "Today's effort is tomorrow's strength.",
    "The fire within you burns brighter than the fire around you.",
    "Champions are built in the mundane moments. Rise through them.",
    "One task at a time. One day at a time. One level at a time.",
    "You didn't come this far to only come this far. Keep rising."
];

// ---- State ----

let state = loadState();

// ---- Initialization ----

function getDefaultState() {
    return {
        profile: {
            level: 1,
            xp: 0,
            totalXp: 0,
            hp: 100,
            title: 'Ember',
            avatar: '🪹'
        },
        tasks: ['', '', '', '', ''],
        today: {
            date: getTodayString(),
            completed: [false, false, false, false, false],
            completionTimes: [null, null, null, null, null]
        },
        streak: {
            current: 0,
            best: 0,
            freezes: 0,
            lastCompletedDate: null,
            hadStreakBefore: false
        },
        history: {},
        achievements: [],
        stats: {
            totalTasks: 0,
            perfectDays: 0,
            totalDays: 0,
            consecutivePerfectDays: 0
        },
        taskLogs: [{}, {}, {}, {}, {}],
        quarterlyProgress: {},
        seasonalBadges: [],
        settings: {
            soundEnabled: true,
            lastLoginDate: null,
            loginXpClaimed: false
        }
    };
}

function loadState() {
    try {
        const saved = localStorage.getItem('riseApp');
        if (saved) {
            const parsed = JSON.parse(saved);
            const defaults = getDefaultState();
            // Deep merge with defaults
            return deepMerge(defaults, parsed);
        }
    } catch (e) {
        console.error('Error loading state:', e);
    }
    return getDefaultState();
}

function deepMerge(target, source) {
    const result = { ...target };
    for (const key in source) {
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
            result[key] = deepMerge(target[key] || {}, source[key]);
        } else {
            result[key] = source[key];
        }
    }
    return result;
}

function saveState() {
    try {
        localStorage.setItem('riseApp', JSON.stringify(state));
    } catch (e) {
        console.error('Error saving state:', e);
    }
}

function getTodayString() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getYesterdayString() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// ---- Day Management ----

function checkNewDay() {
    const today = getTodayString();
    if (state.today.date !== today) {
        // Save yesterday to history
        const yesterdayCompleted = state.today.completed.filter(Boolean).length;
        state.history[state.today.date] = {
            completed: yesterdayCompleted,
            total: 5,
            tasks: [...state.tasks],
            completionTimes: [...state.today.completionTimes]
        };

        // Check if yesterday was a perfect day
        const wasPerfect = yesterdayCompleted === 5;

        // Update streak
        const yesterday = getYesterdayString();
        if (state.today.date === yesterday) {
            // The stored date IS yesterday
            if (yesterdayCompleted === 5) {
                state.streak.current++;
                if (state.streak.current > state.streak.best) {
                    state.streak.best = state.streak.current;
                }
            } else if (state.streak.freezes > 0 && state.streak.current > 0) {
                state.streak.freezes--;
            } else if (state.streak.current > 0) {
                state.streak.hadStreakBefore = true;
                state.streak.current = 0;
            }
        } else {
            // Missed more than one day
            if (state.streak.current > 0) {
                state.streak.hadStreakBefore = true;
                state.streak.current = 0;
            }
        }

        // Handle consecutive perfect days
        if (wasPerfect) {
            state.stats.consecutivePerfectDays++;
        } else {
            state.stats.consecutivePerfectDays = 0;
        }

        // Update stats
        if (yesterdayCompleted > 0) {
            state.stats.totalDays++;
        }

        // HP decay for missed tasks
        const missed = 5 - yesterdayCompleted;
        state.profile.hp = Math.max(0, state.profile.hp - (missed * 8));

        // Reset today
        state.today = {
            date: today,
            completed: [false, false, false, false, false],
            completionTimes: [null, null, null, null, null]
        };

        // Reset login XP
        state.settings.loginXpClaimed = false;

        saveState();
    }
}

// ---- Login XP ----

function claimLoginXP() {
    const today = getTodayString();
    if (!state.settings.loginXpClaimed) {
        state.settings.loginXpClaimed = true;
        state.settings.lastLoginDate = today;
        addXP(5);
        saveState();
        showLoginToast();
    }
}

function showLoginToast() {
    const toast = document.getElementById('login-toast');
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
}

// ---- XP & Leveling ----

function addXP(amount) {
    const streakBonus = 1 + (state.streak.current * 0.01);
    const totalGain = Math.round(amount * streakBonus);
    state.profile.xp += totalGain;
    state.profile.totalXp += totalGain;

    // Check level up
    let leveledUp = false;
    for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
        if (state.profile.totalXp >= LEVEL_THRESHOLDS[i].xp) {
            if (state.profile.level < LEVEL_THRESHOLDS[i].level) {
                leveledUp = true;
                state.profile.level = LEVEL_THRESHOLDS[i].level;
                state.profile.title = LEVEL_THRESHOLDS[i].title;
                state.profile.avatar = LEVEL_THRESHOLDS[i].avatar;
            }
            break;
        }
    }

    saveState();
    updateUI();

    if (leveledUp) {
        setTimeout(() => showLevelUp(), 300);
        checkLevelAchievements();
    }

    return totalGain;
}

function getXPForCurrentLevel() {
    const currentIdx = LEVEL_THRESHOLDS.findIndex(t => t.level === state.profile.level);
    const currentThreshold = LEVEL_THRESHOLDS[currentIdx].xp;
    const nextThreshold = currentIdx < LEVEL_THRESHOLDS.length - 1
        ? LEVEL_THRESHOLDS[currentIdx + 1].xp
        : LEVEL_THRESHOLDS[currentIdx].xp + 5000;
    const progress = state.profile.totalXp - currentThreshold;
    const needed = nextThreshold - currentThreshold;
    return { progress, needed, percent: Math.min(100, (progress / needed) * 100) };
}

// ---- Task Management ----

function toggleTask(index) {
    const wasCompleted = state.today.completed[index];
    state.today.completed[index] = !wasCompleted;

    if (!wasCompleted) {
        // Task completed
        state.today.completionTimes[index] = new Date().toISOString();
        state.stats.totalTasks++;
        const gained = addXP(10);

        // Visual feedback
        const taskEl = document.querySelectorAll('.task-item')[index];
        if (taskEl) {
            taskEl.classList.add('just-completed');
            createSparks(taskEl);
            setTimeout(() => taskEl.classList.remove('just-completed'), 800);
        }

        // HP heal
        state.profile.hp = Math.min(100, state.profile.hp + 10);

        // Check for perfect day
        const completedCount = state.today.completed.filter(Boolean).length;
        if (completedCount === 5) {
            setTimeout(() => {
                addXP(25);
                showPerfectDay();
                state.stats.perfectDays++;

                // Update streak for today
                if (state.streak.current === 0 && state.streak.hadStreakBefore) {
                    // Rise from ashes!
                    state.streak.hadStreakBefore = false;
                    unlockAchievement('rise_from_ashes');
                }
                state.streak.lastCompletedDate = getTodayString();

                // Award streak freeze every 10 perfect days
                if (state.stats.perfectDays % 10 === 0) {
                    state.streak.freezes++;
                }

                saveState();
            }, 500);
        }

        // Check achievements
        checkTaskAchievements();
    } else {
        // Task uncompleted
        state.today.completionTimes[index] = null;
        state.stats.totalTasks = Math.max(0, state.stats.totalTasks - 1);
        state.profile.hp = Math.max(0, state.profile.hp - 10);
    }

    saveState();
    updateUI();
    updateStakesAndNudges();
}

function updateTaskText(index, text) {
    state.tasks[index] = text;
    saveState();
}

let expandedTaskIndex = -1;

function toggleTaskExpand(index) {
    expandedTaskIndex = expandedTaskIndex === index ? -1 : index;
    const details = document.querySelectorAll('.task-details');
    details.forEach((d, i) => {
        d.classList.toggle('expanded', i === expandedTaskIndex);
    });
}

function updateTaskLog(index, field, value) {
    if (!state.taskLogs[index]) state.taskLogs[index] = {};

    const today = getTodayString();
    if (!state.taskLogs[index][today]) {
        state.taskLogs[index][today] = { steps: '', workout: '', notes: '' };
    }
    state.taskLogs[index][today][field] = value;
    saveState();
}

function getTaskLog(index) {
    const today = getTodayString();
    if (!state.taskLogs[index]) state.taskLogs[index] = {};
    return state.taskLogs[index][today] || { steps: '', workout: '', notes: '' };
}

function refreshTaskDetails(index) {
    const log = getTaskLog(index);
    const wrapper = document.querySelectorAll('.task-wrapper')[index];
    if (!wrapper) return;
    const tags = wrapper.querySelectorAll('.workout-tag');
    const workoutTypes = ['Run', 'Walk', 'Weights', 'HIIT', 'Yoga', 'Cycling', 'Swimming', 'Other'];
    tags.forEach((tag, ti) => {
        tag.classList.toggle('active', workoutTypes[ti] === log.workout);
    });
}

function createSparks(element) {
    const rect = element.getBoundingClientRect();
    const count = state.today.completed.filter(Boolean).length;
    const sparkCount = count >= 4 ? 12 : count >= 2 ? 6 : 3;

    for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
        spark.className = 'task-spark';
        const angle = (Math.PI * 2 * i) / sparkCount;
        const dist = 30 + Math.random() * 30;
        spark.style.setProperty('--tx', `${Math.cos(angle) * dist}px`);
        spark.style.setProperty('--ty', `${Math.sin(angle) * dist}px`);
        spark.style.left = '24px';
        spark.style.top = '50%';
        element.appendChild(spark);
        setTimeout(() => spark.remove(), 600);
    }
}

// ---- Streak ----

function updateStreakDisplay() {
    const flame = document.getElementById('streak-flame');
    const count = document.getElementById('streak-count');
    const best = document.getElementById('best-streak');
    const mult = document.getElementById('streak-multiplier');
    const freezes = document.getElementById('freeze-count');

    // Check if today is a perfect day and streak should include today
    const todayPerfect = state.today.completed.filter(Boolean).length === 5;
    const displayStreak = state.streak.current + (todayPerfect ? 1 : 0);

    count.textContent = displayStreak;
    best.textContent = Math.max(state.streak.best, displayStreak);
    mult.textContent = `${(1 + displayStreak * 0.01).toFixed(2)}x`;
    freezes.textContent = state.streak.freezes;

    // Flame animation
    flame.className = 'streak-flame';
    if (displayStreak >= 14) {
        flame.classList.add('big-fire');
        flame.textContent = '🔥';
    } else if (displayStreak >= 3) {
        flame.classList.add('fire');
        flame.textContent = '🔥';
    } else if (displayStreak >= 1) {
        flame.textContent = '🔥';
    } else {
        flame.textContent = '💨';
    }
}

// ---- Stakes & Nudges ----

function updateStakesAndNudges() {
    const stakesBar = document.getElementById('stakes-bar');
    const stakesText = document.getElementById('stakes-text');
    const nudgeBar = document.getElementById('nudge-bar');
    const nudgeText = document.getElementById('nudge-text');

    const remaining = 5 - state.today.completed.filter(Boolean).length;
    const currentHour = new Date().getHours();

    // Stakes
    if (state.streak.current > 0 && remaining > 0 && currentHour >= 16) {
        stakesBar.classList.remove('hidden');
        stakesText.textContent = `Your ${state.streak.current}-day streak is on the line. Complete ${remaining} more to keep it alive!`;
    } else {
        stakesBar.classList.add('hidden');
    }

    // Nudges
    if (remaining > 0 && remaining < 5) {
        nudgeBar.classList.remove('hidden');
        if (remaining === 1) {
            nudgeText.textContent = `Just 1 more task for a Perfect Day! That's +25 bonus XP.`;
        } else {
            nudgeText.textContent = `${remaining} tasks left today. Keep the momentum going!`;
        }
    } else if (remaining === 0) {
        nudgeBar.classList.remove('hidden');
        nudgeText.textContent = `All tasks done! You're a machine. 🔥`;
    } else {
        nudgeBar.classList.add('hidden');
    }
}

// ---- Achievements ----

function unlockAchievement(id) {
    if (state.achievements.includes(id)) return;
    state.achievements.push(id);
    saveState();

    const achievement = ACHIEVEMENTS.find(a => a.id === id);
    if (achievement) {
        showAchievementToast(achievement);
    }
}

function showAchievementToast(achievement) {
    const toast = document.getElementById('achievement-toast');
    const text = document.getElementById('achievement-toast-text');
    text.textContent = `${achievement.name} — ${achievement.desc}`;
    toast.classList.remove('hidden');

    // Re-trigger animation
    toast.style.animation = 'none';
    toast.offsetHeight;
    toast.style.animation = '';

    setTimeout(() => toast.classList.add('hidden'), 4000);
}

function checkTaskAchievements() {
    if (state.stats.totalTasks >= 1) unlockAchievement('first_task');
    if (state.stats.totalTasks >= 50) unlockAchievement('tasks_50');
    if (state.stats.totalTasks >= 100) unlockAchievement('tasks_100');
    if (state.stats.totalTasks >= 500) unlockAchievement('tasks_500');
    if (state.stats.totalTasks >= 1000) unlockAchievement('tasks_1000');

    const todayCount = state.today.completed.filter(Boolean).length;
    if (todayCount === 5) unlockAchievement('first_perfect');

    const displayStreak = state.streak.current + (todayCount === 5 ? 1 : 0);
    if (displayStreak >= 7) unlockAchievement('streak_7');
    if (displayStreak >= 14) unlockAchievement('streak_14');
    if (displayStreak >= 30) unlockAchievement('streak_30');
    if (displayStreak >= 60) unlockAchievement('streak_60');
    if (displayStreak >= 100) unlockAchievement('streak_100');

    if (state.stats.consecutivePerfectDays >= 7) unlockAchievement('perfect_week');
}

function checkLevelAchievements() {
    if (state.profile.level >= 5) unlockAchievement('level_5');
    if (state.profile.level >= 10) unlockAchievement('level_10');
    if (state.profile.level >= 25) unlockAchievement('level_25');
}

// ---- Quarterly Challenges ----

function getCurrentQuarter() {
    const month = new Date().getMonth();
    return Math.floor(month / 3) + 1;
}

function getQuarterKey() {
    const year = new Date().getFullYear();
    return `${year}-Q${getCurrentQuarter()}`;
}

function getQuarterProgress() {
    const key = getQuarterKey();
    if (!state.quarterlyProgress[key]) {
        state.quarterlyProgress[key] = { xp: 0, tasks: 0, perfectDays: 0 };
    }
    return state.quarterlyProgress[key];
}

function getChallengeProgress(challenge) {
    const qp = getQuarterProgress();
    switch (challenge.type) {
        case 'streak': return Math.min(state.streak.current, challenge.target);
        case 'quarter_xp': return Math.min(qp.xp || 0, challenge.target);
        case 'quarter_perfect': return Math.min(qp.perfectDays || 0, challenge.target);
        case 'quarter_tasks': return Math.min(qp.tasks || 0, challenge.target);
        case 'level': return Math.min(state.profile.level, challenge.target);
        case 'total_perfect': return Math.min(state.stats.perfectDays, challenge.target);
        case 'total_tasks': return Math.min(state.stats.totalTasks, challenge.target);
        default: return 0;
    }
}

// ---- Modals ----

function showLevelUp() {
    const modal = document.getElementById('levelup-modal');
    const phoenix = document.getElementById('levelup-phoenix');
    const title = document.getElementById('levelup-title');
    const level = document.getElementById('levelup-level');

    phoenix.textContent = state.profile.avatar;
    title.textContent = state.profile.title;
    level.textContent = `Level ${state.profile.level}`;
    modal.classList.remove('hidden');

    fireParticles('gold');
}

function closeLevelUp() {
    document.getElementById('levelup-modal').classList.add('hidden');
}

function showPerfectDay() {
    const modal = document.getElementById('perfect-modal');
    modal.classList.remove('hidden');
    fireParticles('ember');
}

function closePerfectDay() {
    document.getElementById('perfect-modal').classList.add('hidden');
}

function showWeeklyRecap() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    // Show recap on Monday if we haven't shown it yet this week
    if (dayOfWeek !== 1) return;
    const recapKey = `recap_${getTodayString()}`;
    if (state.settings[recapKey]) return;

    // Calculate last week's stats
    let weekTasks = 0;
    let weekPerfect = 0;
    const lastWeekDates = [];
    for (let i = 1; i <= 7; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        lastWeekDates.push(dateStr);
        const dayData = state.history[dateStr];
        if (dayData) {
            weekTasks += dayData.completed;
            if (dayData.completed === 5) weekPerfect++;
        }
    }

    // Prev week for comparison
    let prevWeekTasks = 0;
    for (let i = 8; i <= 14; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        const dayData = state.history[dateStr];
        if (dayData) prevWeekTasks += dayData.completed;
    }

    const change = prevWeekTasks > 0 ? Math.round(((weekTasks - prevWeekTasks) / prevWeekTasks) * 100) : 0;

    const content = document.getElementById('recap-content');
    content.innerHTML = `
        <div class="recap-stat">
            <span class="recap-stat-label">Tasks Completed</span>
            <span class="recap-stat-value">${weekTasks} / 35</span>
        </div>
        <div class="recap-stat">
            <span class="recap-stat-label">Perfect Days</span>
            <span class="recap-stat-value">${weekPerfect} / 7</span>
        </div>
        <div class="recap-stat">
            <span class="recap-stat-label">Completion Rate</span>
            <span class="recap-stat-value">${Math.round((weekTasks / 35) * 100)}%</span>
        </div>
        <div class="recap-stat">
            <span class="recap-stat-label">vs Last Week</span>
            <span class="recap-stat-value ${change >= 0 ? 'up' : 'down'}">${change >= 0 ? '+' : ''}${change}%</span>
        </div>
    `;

    document.getElementById('recap-modal').classList.remove('hidden');
    state.settings[recapKey] = true;
    saveState();
}

function closeRecap() {
    document.getElementById('recap-modal').classList.add('hidden');
}

// ---- Section Navigation ----

function showSection(name) {
    const sections = ['tasks', 'stats', 'achievements', 'challenges'];
    sections.forEach(s => {
        const el = document.getElementById(`section-${s}`);
        if (el) {
            el.classList.toggle('hidden', s !== name);
        }
    });

    // Update active tab
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.section === name);
    });

    if (name === 'stats') renderStats();
    if (name === 'achievements') renderAchievements();
    if (name === 'challenges') renderChallenges();
}

// ---- Rendering ----

function updateUI() {
    // Phoenix card
    document.getElementById('phoenix-avatar').textContent = state.profile.avatar;
    document.getElementById('phoenix-title').textContent = state.profile.title;
    document.getElementById('phoenix-level').textContent = state.profile.level;

    const xpInfo = getXPForCurrentLevel();
    document.getElementById('xp-bar').style.width = `${xpInfo.percent}%`;
    document.getElementById('xp-text').textContent = `${xpInfo.progress} / ${xpInfo.needed} XP`;

    document.getElementById('hp-bar').style.width = `${state.profile.hp}%`;

    // Avatar glow at high levels
    const avatarEl = document.getElementById('phoenix-avatar');
    avatarEl.classList.toggle('glow', state.profile.level >= 10);

    // Streak
    updateStreakDisplay();

    // Task progress
    const completed = state.today.completed.filter(Boolean).length;
    document.getElementById('task-progress').textContent = `${completed}/5`;

    // Daily quote
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    document.getElementById('quote-text').textContent = PHOENIX_QUOTES[dayOfYear % PHOENIX_QUOTES.length];
}

function renderTasks() {
    const list = document.getElementById('tasks-list');
    list.innerHTML = '';

    const workoutTypes = ['Run', 'Walk', 'Weights', 'HIIT', 'Yoga', 'Cycling', 'Swimming', 'Other'];

    for (let i = 0; i < 5; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'task-wrapper';

        const item = document.createElement('div');
        item.className = `task-item${state.today.completed[i] ? ' completed' : ''}`;

        const checkbox = document.createElement('div');
        checkbox.className = 'task-checkbox';
        checkbox.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleTask(i);
            renderTasks();
        });

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'task-text';
        input.value = state.tasks[i];
        input.placeholder = `Task ${i + 1}`;
        input.addEventListener('change', (e) => updateTaskText(i, e.target.value));
        input.addEventListener('blur', (e) => updateTaskText(i, e.target.value));
        input.addEventListener('click', (e) => e.stopPropagation());

        const xpLabel = document.createElement('span');
        xpLabel.className = 'task-xp';
        xpLabel.textContent = '+10 XP';

        const expandBtn = document.createElement('button');
        expandBtn.className = 'task-expand-btn';
        expandBtn.textContent = '›';
        expandBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleTaskExpand(i);
        });

        item.appendChild(checkbox);
        item.appendChild(input);
        item.appendChild(xpLabel);
        item.appendChild(expandBtn);

        // Detail panel
        const log = getTaskLog(i);
        const details = document.createElement('div');
        details.className = 'task-details';

        details.innerHTML = `
            <div class="detail-row">
                <label class="detail-label">👟 Steps</label>
                <input type="number" class="detail-input" placeholder="0" value="${log.steps || ''}"
                    onchange="updateTaskLog(${i}, 'steps', this.value)"
                    onblur="updateTaskLog(${i}, 'steps', this.value)">
            </div>
            <div class="detail-row">
                <label class="detail-label">💪 Workout</label>
                <div class="workout-tags">
                    ${workoutTypes.map(w => `
                        <button class="workout-tag ${log.workout === w ? 'active' : ''}"
                            onclick="updateTaskLog(${i}, 'workout', '${w}'); refreshTaskDetails(${i});">${w}</button>
                    `).join('')}
                </div>
            </div>
            <div class="detail-row">
                <label class="detail-label">📝 Notes</label>
                <textarea class="detail-textarea" placeholder="What did you do today?"
                    onchange="updateTaskLog(${i}, 'notes', this.value)"
                    onblur="updateTaskLog(${i}, 'notes', this.value)">${log.notes || ''}</textarea>
            </div>
        `;

        // Preserve expanded state
        if (i === expandedTaskIndex) {
            details.classList.add('expanded');
        }

        wrapper.appendChild(item);
        wrapper.appendChild(details);
        list.appendChild(wrapper);
    }
}

function renderStats() {
    document.getElementById('stat-total-tasks').textContent = state.stats.totalTasks;
    document.getElementById('stat-perfect-days').textContent = state.stats.perfectDays;
    document.getElementById('stat-total-xp').textContent = state.profile.totalXp;
    document.getElementById('stat-total-days').textContent = state.stats.totalDays;

    renderHeatMap();
    renderWeeklyTrend();
}

function renderHeatMap() {
    const heatmap = document.getElementById('heatmap');
    heatmap.innerHTML = '';

    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - 364);

    // Adjust to start on Sunday
    startDate.setDate(startDate.getDate() - startDate.getDay());

    for (let i = 0; i < 364; i++) {
        const d = new Date(startDate);
        d.setDate(d.getDate() + i);
        const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

        const cell = document.createElement('div');
        cell.className = 'heatmap-cell';

        const dayData = state.history[dateStr];
        if (dayData) {
            const level = Math.ceil((dayData.completed / 5) * 5);
            if (level > 0) cell.classList.add(`level-${level}`);
        }

        // Today
        if (dateStr === getTodayString()) {
            const todayCompleted = state.today.completed.filter(Boolean).length;
            const level = Math.ceil((todayCompleted / 5) * 5);
            if (level > 0) cell.classList.add(`level-${level}`);
        }

        cell.title = dateStr;
        heatmap.appendChild(cell);
    }
}

function renderWeeklyTrend() {
    const container = document.getElementById('weekly-bars');
    container.innerHTML = '';

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    const todayDay = today.getDay();

    for (let i = 0; i < 7; i++) {
        const d = new Date(today);
        d.setDate(d.getDate() - todayDay + i);
        const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

        let completed = 0;
        if (dateStr === getTodayString()) {
            completed = state.today.completed.filter(Boolean).length;
        } else {
            const dayData = state.history[dateStr];
            if (dayData) completed = dayData.completed;
        }

        const day = document.createElement('div');
        day.className = 'trend-day';

        const barWrapper = document.createElement('div');
        barWrapper.className = 'trend-bar-wrapper';

        const bar = document.createElement('div');
        bar.className = `trend-bar${dateStr === getTodayString() ? ' today' : ''}`;
        bar.style.height = `${(completed / 5) * 100}%`;

        const label = document.createElement('span');
        label.className = 'trend-label';
        label.textContent = days[i];

        barWrapper.appendChild(bar);
        day.appendChild(barWrapper);
        day.appendChild(label);
        container.appendChild(day);
    }
}

function renderAchievements() {
    const shelf = document.getElementById('bookmarks-shelf');
    shelf.innerHTML = '';

    ACHIEVEMENTS.forEach(a => {
        const earned = state.achievements.includes(a.id);
        const bookmark = document.createElement('div');
        bookmark.className = `bookmark${earned ? ' earned' : ''}`;

        bookmark.innerHTML = `
            <div class="bookmark-ribbon"></div>
            <span class="bookmark-icon">${a.icon}</span>
            <span class="bookmark-name">${a.name}</span>
        `;

        bookmark.title = a.desc;
        shelf.appendChild(bookmark);
    });
}

function renderChallenges() {
    const q = getCurrentQuarter();
    const qData = QUARTERLY_CHALLENGES[q];
    document.getElementById('quarter-title').textContent = `Q${q} — ${qData.name}`;

    const list = document.getElementById('challenges-list');
    list.innerHTML = '';

    let allComplete = true;

    qData.challenges.forEach(ch => {
        const progress = getChallengeProgress(ch);
        const isComplete = progress >= ch.target;
        if (!isComplete) allComplete = false;

        const item = document.createElement('div');
        item.className = `challenge-item${isComplete ? ' completed' : ''}`;

        item.innerHTML = `
            <div class="challenge-header">
                <span class="challenge-name">${ch.name}</span>
                <span class="challenge-status">${isComplete ? '✓ Done' : `${progress}/${ch.target}`}</span>
            </div>
            <div class="challenge-progress-bar">
                <div class="challenge-progress-fill" style="width: ${Math.min(100, (progress / ch.target) * 100)}%"></div>
            </div>
        `;

        list.appendChild(item);
    });

    // Seasonal badges
    renderSeasonalBadges(allComplete, q);
}

function renderSeasonalBadges(currentQuarterComplete, currentQ) {
    const grid = document.getElementById('seasonal-grid');
    grid.innerHTML = '';

    const seasonNames = ['New Flame', 'Rising Heat', 'Inferno', 'Phoenix Reborn'];
    const seasonIcons = ['🌱', '☀️', '🔥', '🐦‍🔥'];

    for (let i = 0; i < 4; i++) {
        const q = i + 1;
        const key = `${new Date().getFullYear()}-Q${q}`;
        const earned = state.seasonalBadges.includes(key) || (q === currentQ && currentQuarterComplete);

        if (q === currentQ && currentQuarterComplete && !state.seasonalBadges.includes(key)) {
            state.seasonalBadges.push(key);
            saveState();
        }

        const badge = document.createElement('div');
        badge.className = `seasonal-badge${earned ? ' earned' : ''}`;
        badge.innerHTML = `
            <span class="seasonal-badge-icon">${seasonIcons[i]}</span>
            <span class="seasonal-badge-label">Q${q}</span>
        `;
        grid.appendChild(badge);
    }
}

// ---- Particles ----

function fireParticles(color) {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = color === 'gold'
        ? ['#d4a842', '#e8c252', '#c49832', '#f0d060']
        : ['#c45d2c', '#e8722e', '#d4a842', '#ff8844'];

    for (let i = 0; i < 60; i++) {
        particles.push({
            x: canvas.width / 2 + (Math.random() - 0.5) * 100,
            y: canvas.height / 2,
            vx: (Math.random() - 0.5) * 8,
            vy: -Math.random() * 10 - 2,
            size: Math.random() * 4 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: 1,
            decay: Math.random() * 0.02 + 0.01
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;

        particles.forEach(p => {
            if (p.life <= 0) return;
            alive = true;
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.15;
            p.life -= p.decay;

            ctx.globalAlpha = p.life;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });

        if (alive) requestAnimationFrame(animate);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    animate();
}

// ---- Initialize ----

function init() {
    checkNewDay();
    renderTasks();
    updateUI();
    updateStakesAndNudges();
    claimLoginXP();

    // Weekly recap check
    setTimeout(showWeeklyRecap, 1000);

    // Check time periodically for nudges
    setInterval(() => {
        updateStakesAndNudges();
    }, 60000);
}

// ---- Theme Toggle ----

function toggleTheme() {
    const isLight = document.body.classList.toggle('light');
    localStorage.setItem('riseTheme', isLight ? 'light' : 'dark');
    document.getElementById('theme-btn').textContent = isLight ? '🌙' : '☀️';
}

function loadTheme() {
    const saved = localStorage.getItem('riseTheme');
    if (saved === 'light') {
        document.body.classList.add('light');
        document.getElementById('theme-btn').textContent = '🌙';
    }
}

// Start the app
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    init();
});
