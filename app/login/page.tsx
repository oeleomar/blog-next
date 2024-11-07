import { LogInIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import Image from "next/image";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }
  
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="m-auto flex max-w-[400px] flex-col justify-center rounded-2xl border p-8 shadow-md">
        <Image
          src="/logo.png"
          width={140}
          height={39}
          className="m-auto mb-8 rounded-2xl"
          alt="Logo do blog "
        />
        <h1 className="mb-4 text-4xl font-bold">Página de Login</h1>
        <p className="mb-4">
          Bem-vindo à nossa plataforma! Para acessar todas as funcionalidades e
          personalizar sua experiência conosco, utilize o botão abaixo para
          fazer login ou cadastrar-se. Sua jornada começa aqui.
        </p>
        <SignInButton>
          <Button variant="outline">
            <LogInIcon />
            Faça o login ou se cadastre.
          </Button>
        </SignInButton>
      </div>
    </div>
  );
};

export default LoginPage;
