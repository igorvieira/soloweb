export const Footer = () => (
<footer className="w-full py-8 md:py-12 bg-gray-900 border-t border-gray-800">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
    <div className="flex items-center gap-2 mb-4 md:mb-0">
        <img
        src="https://github.com/sreq-inc/Solo/blob/main/assets/logo.png?raw=true"
        alt="Logo"
        className="w-8 h-8"
        />
        <span className="text-lg font-medium">Solo</span>
    </div>
    <div className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Solo HTTP Client. All rights
        reserved.
    </div>
    </div>
</footer>
);
