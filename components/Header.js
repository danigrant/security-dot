import Link from 'next/link'

const Header = () => (
  <div className="header">
    <Link href="/">
      <a>Security Status Page</a>
    </Link>
    <p>Login</p>
    <style jsx>{`
      .header {
        padding: 5px 30px;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      p, a {
        display: inline-block;
      }
      p:last-child {
        float: right;
      }
    `}</style>
  </div>
)

export default Header
