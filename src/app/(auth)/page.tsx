import Image from "next/image";
import LoginForm from "@/components/Login/LoginForm";

export default function LoginPage() {
    return(
        <main className="flex flex-col items-center justify-center min-h-screen p-4 gap-4">
            <Image src={"/LogoSPOTMKT.png"}
            alt={"Logo of SPOT MKT"}
            height={200}    width={200}/>
            <LoginForm />
        </main>
    )
}
