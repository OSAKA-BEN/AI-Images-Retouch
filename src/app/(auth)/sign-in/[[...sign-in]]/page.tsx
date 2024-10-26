import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return <SignIn fallbackRedirectUrl="/profile" signUpFallbackRedirectUrl="/" />
}

export default SignInPage