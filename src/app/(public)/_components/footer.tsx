export function Footer() {
    return (
        <footer className="bg-white text-emerald-500 py-6 mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} OdontoPro. Todos os direitos reservados - 
                    <span className="hover:text-black hover:font-semibold duration-300"> @odontopro</span>
                </p>
            </div>
        </footer>
    );
}