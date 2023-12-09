import { getCache, setCache } from '@/utils/Cache';
// import { getScoreboard } from '@/utils/GSheetToCheckpoint';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request | NextRequest) {
//   const cached = getCache('scoreboard');

//   if (cached) {
//     return NextResponse.json(cached, { status: 200 });
//   }

//   let res = await getScoreboard();

//   // set cache
//   setCache(2 * 60, 'scoreboard', res);

  return NextResponse.json({}, { status: 200 });
}
