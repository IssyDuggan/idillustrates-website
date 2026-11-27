const CONSENT = 'I agree to receive occasional marketing emails from ID Illustrates. I can unsubscribe at any time.';
function doGet() { return HtmlService.createHtmlOutputFromFile('Index').setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL).setTitle('ID Illustrates | Mailing list').addMetaTag('viewport','width=device-width, initial-scale=1'); }
function subscribe(data) {
  const email = String(data.email || '').trim().toLowerCase();
  const name = String(data.name || '').trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || name.length > 100 || data.consent !== true) throw new Error('Please enter a valid email and tick the consent box.');
  const lock = LockService.getScriptLock(); lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.openById('1BJZYV3773RVubhUO-vDoHmZwsObcNmDpgaASAS5XILc').getSheetByName('Sheet1');
    if (!sheet) throw new Error('Subscriber sheet not configured.');
    if (sheet.getLastRow() === 0) sheet.appendRow(['Date','First name','Email','Consent','Source']);
    const safe = s => /^[=+\-@\t\r]/.test(s) ? "'" + s : s;
    sheet.appendRow([new Date(),safe(name),safe(email),CONSENT,'Website / event signup']);
    return true;
  } finally { lock.releaseLock(); }
}
