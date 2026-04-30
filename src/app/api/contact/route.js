import { NextResponse } from 'next/server';

const phoneRegex = /^[0-9+\-\s()]{6,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PROGRAM_SLUGS = new Set([
  'gymnastics',
  'development',
  'english',
  'theatre',
  'school-prep',
  'robotics',
  'other',
]);

function validate(payload) {
  const errors = {};
  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const phone = typeof payload.phone === 'string' ? payload.phone.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const childAge = typeof payload.childAge === 'string' ? payload.childAge.trim() : '';
  const program = typeof payload.program === 'string' ? payload.program.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';

  if (name.length < 2) errors.name = 'tooShort';
  if (!phoneRegex.test(phone)) errors.phone = 'invalid';
  if (!emailRegex.test(email)) errors.email = 'invalid';
  if (childAge.length < 1) errors.childAge = 'required';
  if (!PROGRAM_SLUGS.has(program)) errors.program = 'invalid';
  if (message.length < 10) errors.message = 'tooShort';

  return {
    errors,
    data: { name, phone, email, childAge, program, message },
  };
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'invalidJson' },
      { status: 400 },
    );
  }

  const { errors, data } = validate(payload || {});
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { success: false, errors },
      { status: 400 },
    );
  }

  // Structured for nodemailer integration. Wire SMTP_* env vars
  // and replace this block with a real transporter.sendMail call.
  // eslint-disable-next-line no-console
  console.log('[contact] new submission', {
    receivedAt: new Date().toISOString(),
    ...data,
  });

  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json(
    { success: false, error: 'methodNotAllowed' },
    { status: 405 },
  );
}
