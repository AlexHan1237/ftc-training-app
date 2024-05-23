function SiteFooter() {
    return (
        <footer>
          <small>
            &copy; {new Date().getFullYear()} made with{' '}
            <i class="bi bi-heart-fill" style={{ color: 'red' }} /> by -{' '}
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