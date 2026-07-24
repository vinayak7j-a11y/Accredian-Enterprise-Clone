import { NextRequest, NextResponse } from "next/server";

type EnquiryPayload = {
  name: string;
  email: string;
  company: string;
  teamSize?: string;
  message?: string;
};

// In-memory store to simulate persistence for this demo/mock API.
// In a production build this would write to a database or CRM (e.g. HubSpot, Salesforce).
const submissions: (EnquiryPayload & { id: string; receivedAt: string })[] = [];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let body: Partial<EnquiryPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Request body must be valid JSON." },
      { status: 400 }
    );
  }

  const { name, email, company, teamSize, message } = body;

  if (!name || !email || !company) {
    return NextResponse.json(
      {
        success: false,
        error: "Name, email, and company are required fields.",
      },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const record = {
    id: crypto.randomUUID(),
    name,
    email,
    company,
    teamSize: teamSize ?? "Not specified",
    message: message ?? "",
    receivedAt: new Date().toISOString(),
  };

  submissions.push(record);

  // Simulate network/processing latency of a real CRM integration.
  await new Promise((resolve) => setTimeout(resolve, 400));

  return NextResponse.json({
    success: true,
    message: "Thanks! Our enterprise team will reach out within one business day.",
    data: record,
  });
}

export async function GET() {
  return NextResponse.json({
    success: true,
    count: submissions.length,
    submissions,
  });
}
