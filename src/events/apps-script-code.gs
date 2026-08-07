/**
 * ============================================================
 * TEPOK BULU — Apps Script untuk Google Sheet
 * ============================================================
 *
 * CARA SETUP:
 * 1. Buat Google Spreadsheet baru.
 * 2. Buat 3 sheet tab dengan nama persis:
 *      - Ganda Putri
 *      - Ganda Putra
 *      - Ganda Campuran
 * 3. Setiap sheet memiliki header kolom di baris pertama:
 *      grup | posisi | namaTim | menangR1 | menangR2 | menangSemi
 *    (lihat penjelasan kolom di bawah)
 * 4. Di Google Sheet, buka menu Ekstensi > Apps Script.
 * 5. Hapus kode yang ada, paste seluruh kode ini.
 * 6. Klik Deploy > New deployment.
 *    - Pilih type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 7. Klik Deploy, lalu salin URL Web app-nya.
 * 8. Tempel URL tersebut ke SHEET_API_URL di generate-badminton.mjs.
 * 9. Jalankan: node generate-badminton.mjs
 *
 * ============================================================
 * STRUKTUR KOLOM (setiap sheet/tab kategori):
 * ============================================================
 *
 *  grup       : Huruf grup tim. Isi dengan: A, B, C, atau D
 *               Grup A dan C = sisi KIRI bracket
 *               Grup B dan D = sisi KANAN bracket
 *
 *  posisi     : Urutan tampil tim dalam grup (1, 2, 3, atau 4)
 *               Posisi 1 & 2 = pasangan Q1 pertama
 *               Posisi 3 & 4 = pasangan Q1 kedua
 *
 *  namaTim    : Nama tim / pasangan. Contoh: "Setjen A"
 *
 *  menangR1   : TRUE jika tim ini menang babak pertama (Q1).
 *               Hanya 1 tim per pasangan yang TRUE.
 *               Nama tim muncul di slot "Winner" level 1.
 *
 *  menangR2   : TRUE jika tim ini menang dari grup (Q2).
 *               Hanya 1 tim per grup (A/B/C/D) yang TRUE.
 *               Nama tim muncul di slot "Winner" level 2.
 *
 *  menangSemi : TRUE jika tim ini finalist dari sisi bracket.
 *               1 tim dari sisi KIRI (grup A atau C) dan
 *               1 tim dari sisi KANAN (grup B atau D).
 *               Nama tim muncul di slot "Finalist" (paling tengah).
 *
 * ============================================================
 * CONTOH ISI SHEET "Ganda Putri":
 * ============================================================
 *
 *  grup | posisi | namaTim    | menangR1 | menangR2 | menangSemi
 *  A    | 1      | Setjen A   | TRUE     | TRUE     | TRUE
 *  A    | 2      | Ditjen 1   | FALSE    | FALSE    | FALSE
 *  A    | 3      | Ditjen 2   | FALSE    | FALSE    | FALSE
 *  A    | 4      | Ditjen 3   | FALSE    | FALSE    | FALSE
 *  B    | 1      | Itjen A    | TRUE     | TRUE     | TRUE
 *  B    | 2      | Roum       | FALSE    | FALSE    | FALSE
 *  ...  (lanjutkan untuk grup B, C, D)
 *
 * ============================================================
 */

/**
 * Entry point Web App — dipanggil saat URL diakses via HTTP GET.
 */
function doGet() {
  const result = {};
  const categorySheets = ['Ganda Putri', 'Ganda Putra', 'Ganda Campuran'];

  for (const sheetName of categorySheets) {
    try {
      result[sheetName] = getSheetData(sheetName);
    } catch (e) {
      result[sheetName] = { error: e.message };
    }
  }

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Membaca satu sheet/tab dan mengubahnya menjadi array of objects.
 * Baris pertama dianggap sebagai header kolom.
 */
function getSheetData(sheetName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    throw new Error('Sheet "' + sheetName + '" tidak ditemukan.');
  }

  const lastRow = sheet.getLastRow();
  const lastCol = sheet.getLastColumn();

  if (lastRow < 2) return [];

  const rawData = sheet.getRange(1, 1, lastRow, lastCol).getValues();
  const headers = rawData[0].map(function(h) { return String(h).trim(); });

  const rows = [];
  for (var i = 1; i < rawData.length; i++) {
    const row = rawData[i];

    // Lewati baris kosong
    if (row.every(function(cell) { return cell === '' || cell === null || cell === undefined; })) {
      continue;
    }

    const obj = {};
    headers.forEach(function(header, idx) {
      const val = row[idx];
      if (header === 'posisi') {
        obj[header] = Number(val) || 0;
      } else if (header === 'menangR1' || header === 'menangR2' || header === 'menangSemi') {
        obj[header] = val === true || String(val).toUpperCase() === 'TRUE';
      } else {
        obj[header] = String(val).trim();
      }
    });

    if (!obj.grup || !obj.namaTim) continue;
    rows.push(obj);
  }

  return rows;
}
