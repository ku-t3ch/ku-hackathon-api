// import { GoogleSpreadsheetWorksheet } from 'google-spreadsheet';
// import { getCheckpointSheet } from './GoogleSheets';

// const cols: string[] = ['A', 'AQ'];
// const headerSize = 3;

// export async function getScoreboard(): Promise<Record<string, number>[]> {
//     const sheet: GoogleSpreadsheetWorksheet = await getCheckpointSheet();
//     const teams: string[] = [];
//     const score: number[] = [];

//     for (let col of cols) {
//         sheet.resetLocalCache(true);
//         await sheet.loadCells(`${col}${headerSize+1}:${col}`);

//         const numbers = Array.from(
//             { length: sheet.cellStats.loaded },
//             (_, i) => i + 1 + headerSize
//         );
        
//         if (col == cols[0]) {
//             for await (let i of numbers) {
//                 const s = sheet.getCellByA1(`${col}${i}`).value?.toString();
//                 if (s) {
//                     teams.push(s);
//                 } else {
//                     teams.push("");
//                 }
//             }
//         } else if (col == cols[1]) {
//             for await (let i of numbers) {
//                 const s = sheet.getCellByA1(`${col}${i}`).value?.toString();
//                 if (s) {
//                     score.push(parseFloat(s));
//                 } else {
//                     score.push(0);
//                 }
//             }
//         }
//     }

//     return teams.map((v, idx) => {
//         return { [v]: score[idx] }
//     })
// }