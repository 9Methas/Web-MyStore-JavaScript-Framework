export default function Footer() {
  return (
    <footer className="py-5">
      <style jsx>{`
        span {
          font-weight: bold;
        }
      `}</style>
      <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center py-4 my-4 border-top">
        <p style={{ backgroundColor: 'aqua', textAlign: 'center' }}>
          © 2024 Company, Inc. All rights reserved.
        </p>
        <ul className="list-unstyled d-flex"></ul>
      </div>
    </footer>
  );
}
