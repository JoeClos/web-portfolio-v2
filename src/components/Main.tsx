import type { MainStyleProps } from "../types/MainStyleProps";

const Main = ({ children }: MainStyleProps) => {
    return (
        <main className="w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto py-10 space-y-24 animate-fade-in">
            {children}
        </main>
    )
}

export default Main;