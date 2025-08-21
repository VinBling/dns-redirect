import { redirect, RedirectType } from 'next/navigation'

export default function Home() {
  redirect(process.env.NEXT_PUBLIC_REDIRECT_URL || "/");
  return null;
}
