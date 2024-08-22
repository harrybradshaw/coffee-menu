import { Hello } from "@/components/Hello";
import LayoutLinks from "@/components/LayoutLinks";
import LoginLogout from "@/components/LoginLogout";
import { isLoggedIn } from "@/lib/userService";

export default async function Home() {
    return (
        <div className="flex">
            <div className="mx-4">
                <h1>COFFEE MENU</h1>
                <LayoutLinks />
                <LoginLogout isLoggedIn={isLoggedIn()} />
            </div>
            <div className="flex-1">
                <Hello />
            </div>
        </div>

    );
}
