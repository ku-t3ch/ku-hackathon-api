import { NextRequest, NextResponse } from "next/server";
// import { getQualifier } from "@/utils/Qualifier";

export const dynamic = "force-dynamic";

type Payload = {
    email: string;
};

export async function POST(request: NextRequest) {
    //   if (request.method !== 'POST' || !request.body)
    //     return NextResponse.json(
    //       { status: 400, message: 'error_bad_request' },
    //       { status: 400 }
    //     );

    //   try {
    //     const body: Payload = await request.json();

    //     if (!body.email) {
    //       return NextResponse.json(
    //         { status: 400, message: 'error_bad_request' },
    //         { status: 400 }
    //       );
    //     }

    //     const result = getQualifier(body.email);

    //     if (!result) {
    //       return NextResponse.json(
    //         {
    //           status: 400,
    //           message: 'error_disqualified',
    //         },
    //         { status: 400 }
    //       );
    //     }

    //     return NextResponse.json(
    //       {
    //         status: 200,
    //         data: result,
    //       },
    //       { status: 200 }
    //     );
    //   } catch (err) {
    //     return NextResponse.json(
    //       { status: 400, message: 'error_bad_request' },
    //       { status: 400 }
    //     );
    //   }
    return NextResponse.json({
        status: 200,
    });
}
