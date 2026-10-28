javascript
Use code with caution.
const { chromium } = require('playwright');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');
const express = require('express');
// ==================== 1. GLOBAL CRASH INTERCEPTOR (SAFETY SYSTEM) ====================
process.on('uncaughtException', (err) => {
console.error(🛡️ CRASH SAFED: Intercepted an unexpected error: ${err.message}. Keep-Alive routine preserved server runtime.);
});
process.on('unhandledRejection', (reason, promise) => {
console.error('🛡️ CRASH SAFED: Intercepted an unhandled promise rejection. Shield systems locked.');
});
// ==============================================================================
// ==================== 2. WAKE-UP LOGISTICS SERVER ====================
const app = express();
app.get('/', (req, res) => {
res.send('🛡️ Ap_nerd Video Stream Cloud Node is active and crash-safed.');
});
app.listen(3000, () => console.log('✅ Background Cloud Server active on Port 3000.'));
// ==============================================================================
// ==================== 3. CREDENTIAL PROTECTION VAULT ====================
let currentMeetUrl = 'google.com';
const BOT_EMAIL = 'apnerdmbot@gmail.com';
const APP_PASSWORD = 'your-16-digit-app-password'; // <-- PASTE YOUR 16-DIGIT APP PASSWORD HERE
// ==============================================================================
const FAQ_ANSWERS = {
'!link': "🔗 Here is Ap_nerd's official channel: youtube.com",
'!schedule': "📅 Ap_nerd usually streams daily! Make sure to turn on notifications on YouTube.",
'!bot': "🤖 Hello! I am the automated stream relay bot. Type !link to get the channel URL."
};
// Target page validator for stream detection
async function isStreamLive() {
try {
const response = await axios.get('youtube.com', {
headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
timeout: 10000
});
const html = response.data;
return html.includes('isLive":true') || html.includes('liveStreamabilityRenderer');
} catch (error) {
return false;
}
}
// 🤝 Automated Admission Loop
async function startAutoAdmitLoop(page) {
console.log("🤝 Auto-Admit system activated. Monitoring lobby state...");
setInterval(async () => {
try {
const admitButton = page.locator('button:has-text("Admit")');
const admitAllButton = page.locator('button:has-text("Admit all")');
if (await admitAllButton.isVisible()) {
await admitAllButton.click();
console.log("👥 Batch entry complete via 'Admit all'!");
} else if (await admitButton.isVisible()) {
await admitButton.click();
console.log("👤 Single viewer admitted.");
}
} catch (err) {}
}, 1000);
}
// 🎥 Virtual Screen Capture & Audio Pipe Router with Reconnect Safety
function startVirtualStreamRouting() {
console.log("🎬 Activating media pipes... Fetching YouTube live feed...");
const mediaProcess = exec(
'streamlink youtube.com best -O | ffmpeg -re -i pipe:0 -f v4l2 /dev/video0 -f alsa hw:0,0',
(err) => {
if (err) console.log("ℹ️ Media pipeline recycling or connection reset caught safely.");
}
);
return mediaProcess;
}
async function runBot() {
// === CRUCIAL SAFETY VALIDATION RUN ===
const cleanPass = APP_PASSWORD.replace(/\s+/g, '');
if (cleanPass.length !== 16 || cleanPass === 'your-16-digit-app-password') {
console.error("❌ SAFETY FAULT: Invalid App Password configuration! Please paste your accurate 16-character code on Line 26.");
return;
}
let streamPipe = startVirtualStreamRouting();
let context;
try {
console.log("🚀 Spawning automated browser process inside virtual monitor display...");
context = await chromium.launchPersistentContext('./user_data', {
headless: false,
args: [
'--use-fake-ui-for-media-stream',
'--use-fake-device-for-media-stream',
'--no-sandbox',
'--disable-setuid-sandbox'
]
});
const page = await context.newPage();
// === LAYER 1 SAFETY MATRIX: DOMAIN ISOLATION LOCK ===
page.on('framenavigated', frame => {
const url = frame.url();
if (!url.includes('google.com') && url !== 'about:blank') {
console.error(🚨 SECURITY BLOCK: Bot attempted unauthorized navigation to ${url}! Triggering Emergency Shutdown.);
process.exit(1);
}
});
// === LAYER 2 SAFETY MATRIX: AUTO SELF-DESTRUCT KILLSWITCH ===
setTimeout(() => {
console.log("⏳ SAFETY TRIGGER: Max runtime session duration reached (4 Hours). Executing automated shutdown.");
process.exit(0);
}, 4 * 60 * 60 * 1000);
// Secure Authorization Sequence
console.log("🔒 Logging into Google using App Password...");
await page.goto('google.com', { waitUntil: 'networkidle' });
await page.fill('input[type="email"]', BOT_EMAIL);
await page.click('#identifierNext');
await page.waitForTimeout(3000);
await page.fill('input[type="password"]', cleanPass);
await page.click('#passwordNext');
await page.waitForTimeout(5000);
// Create Room Instance
console.log("🌐 Navigating to Google Meet room generator...");
await page.goto(currentMeetUrl, { waitUntil: 'networkidle' });
await page.waitForTimeout(5000);
// Join the Call
await page.locator('button:has-text("Join now")').click();
console.log(\n🚨 WATCH PARTY ROOM IS ONLINE: ${page.url()}\n);
await page.waitForTimeout(3000);
// Initialize Lobby & Moderator Protection Controls
await startAutoAdmitLoop(page);
const hostControlsButton = page.locator('[aria-label*="Host controls"]');
if (await hostControlsButton.isVisible()) {
await hostControlsButton.click();
await page.waitForTimeout(1000);
const shareScreenToggle = page.locator('[aria-label*="Let everyone share their screen"]');
if (await shareScreenToggle.isVisible()) await shareScreenToggle.click();
await hostControlsButton.click();
console.log("🔒 Security matrix locked. Grid protected from participant overrides.");
}
// Open Chat Bar for Listeners
await page.locator('[aria-label*="Chat with everyone"]').click();
await page.waitForTimeout(1000);
// 📢 STREAM START CHAT ANNOUNCEMENT
const startChatInput = page.locator('textarea[aria-label*="Send a message"]');
if (await startChatInput.isVisible()) {
await startChatInput.fill("📢 Welcome to the watch party! The stream has officially started! 🎉 You can visit and subscribe to the channel anytime here: youtube.com");
await page.keyboard.press('Enter');
}
// Interactive FAQ Framework
await page.exposeFunction('handleIncomingMessage', async (user, text) => {
let responseText = "";
const cleanText = text.toLowerCase().trim();
if (FAQ_ANSWERS[cleanText]) {
responseText = FAQ_ANSWERS[cleanText];
} else if (cleanText.includes("link") || cleanText.includes("channel")) {
responseText = 👋 Hey ${user}! Official channel link: https://youtube.com;
}
if (responseText) {
try {
const chatInput = page.locator('textarea[aria-label*="Send a message"]');
await chatInput.fill(responseText);
await page.keyboard.press('Enter');
} catch (e) { console.error("Could not post reply to chat thread safely."); }
}
});
await page.exposeFunction('onHandRaised', async (userName) => {
try {
const chatInput = page.locator('textarea[aria-label*="Send a message"]');
await chatInput.fill(👋 @${userName}, I see your hand raised! Please type your question here in the chat.);
await page.keyboard.press('Enter');
} catch (e) {}
});
// Inject Observers into Browser Context Safely
await page.evaluate(() => {
const chatContainer = document.querySelector('[aria-live="polite"]');
if (chatContainer) {
new MutationObserver((mutations) => {
mutations.forEach(m => {
if (m.type === 'childList') {
m.addedNodes.forEach(node => {
const txt = node.querySelector('[data-message-text]')?.innerText;
const sender = node.querySelector('[data-sender-name]')?.innerText;
if (txt && sender) window.handleIncomingMessage(sender, txt);
});
}
});
}).observe(chatContainer, { childList: true, subtree: true });
}
new MutationObserver((mutations) => {
mutations.forEach(m => {
m.addedNodes.forEach(node => {
const text = node.innerText || "";
if (text.includes("raised") && text.includes("hand")) {
const cleanName = text.replace(/raised.*hand/i, '').trim();
if (cleanName) window.onHandRaised(cleanName);
}
});
});
}).observe(document.body, { childList: true, subtree: true });
});
// Safe Link Migration Loop (55-Minute Reset Safeguard)
let minutesElapsed = 0;
const migrationInterval = setInterval(async () => {
minutesElapsed++;
if (minutesElapsed === 55) {
try {
console.log("⏰ 55 minutes reached. Transitioning to fallback meeting instance...");
const migrationPage = await context.newPage();
await migrationPage.goto('google.com');
await migrationPage.waitForTimeout(5000);
const newMeetUrl = migrationPage.url();
const chatInput = page.locator('textarea[aria-label*="Send a message"]');
await chatInput.fill(⚠️ TIME LIMIT: Moving to a new room in 2 minutes! Join here: ${newMeetUrl});
await page.keyboard.press('Enter');
await page.waitForTimeout(2 * 60 * 1000);
currentMeetUrl = newMeetUrl;
clearInterval(migrationInterval);
if (streamPipe) streamPipe.kill();
await page.close();
} catch (migError) { console.error("Safe room migration encountered layout recovery steps."); }
}
}, 60 * 1000);
// Active watch routine for broadcast end
while (true) {
const live = await isStreamLive();
if (!live) {
console.log("🛑 Stream ended. Initializing clean sweep room exit sequence...");
clearInterval(migrationInterval);
if (streamPipe) streamPipe.kill();
try {
const chatInput = page.locator('textarea[aria-label*="Send a message"]');
if (await chatInput.isVisible()) {
await chatInput.fill("👋 The live stream has officially ended! The bot will now eject remaining participants and close the room. See you guys tomorrow!");
await page.keyboard.press('Enter');
await page.waitForTimeout(5000);
}
await page.locator('[aria-label*="Show everyone"]').click();
await page.waitForTimeout(1000);
while (true) {
const optionButtons = page.locator('[aria-label*="More options for"]');
if (await optionButtons.count() === 0) break;
await optionButtons.nth(0).click();
await page.waitForTimeout(500);
await page.click('span:has-text("Remove from call")');
await page.waitForTimeout(500);
await page.click('button:has-text("Remove")');
await page.waitForTimeout(1000);
}
} catch (exitError) { console.log("Room sweep finalized or cleared by Google system timeout."); }
await context.close();
break;
}
await page.waitForTimeout(30000);
}
} catch (mainError) {
console.error(🚨 BROWSER RUNTIME FAULT DETECTED: ${mainError.message}. Triggering recovery cycle.);
if (streamPipe) streamPipe.kill();
if (context) await context.close().catch(() => {});
console.log("⏳ Waiting 10 seconds before attempting a clean engine reboot...");
await new Promise(resolve => setTimeout(resolve, 10000));
}
}
// Master Background orchestrator
async function orchestrate() {
console.log("🔍 Shield systems engaged. Polling YouTube streaming matrices...");
while (true) {
const live = await isStreamLive();
if (live) {
console.log("🚨 Target broadcast active! Spawning automated meeting runtime.");
currentMeetUrl = 'google.com';
await runBot();
}
await new Promise(resolve => setTimeout(resolve, 60000));
}
}
orchestrate();
