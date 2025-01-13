export default function Footer() {
    return (
      <footer className="mt-56 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Clear:Invoice. All rights reserved.
          </p>
          <div className="mt-4">
            <a href="/privacy" className="text-gray-400 hover:text-white mx-2">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white mx-2">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    );
  }