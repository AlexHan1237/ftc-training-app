import { FaHeart } from 'react-icons/fa';
function SiteFooter() {
    return (
        <footer>
          <small>
            &copy; {new Date().getFullYear()} made with{' '}
            <FaHeart style={{ color: 'red' }} /> by -{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://alexhan1237.github.io/"
            >
              Alexander Han
            </a>
          </small>
        </footer>
      );
}

export default SiteFooter;