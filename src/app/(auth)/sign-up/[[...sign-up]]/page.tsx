import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return <SignUp fallbackRedirectUrl="/" signInFallbackRedirectUrl="/profile" />
}

export default SignUpPage