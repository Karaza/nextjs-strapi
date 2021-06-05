import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import HeaderContext from '../contexts/HeaderContext';

const Navigation = () => {
  const router = useRouter();
  console.log(router);
  const { menuItems, color } = useContext(HeaderContext);

  return (
    <>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link href={item.slug}>
                <a
                  className={router.pathname === item.slug ? 'active' : ''}
                  style={color ? { color: '#4C9EE3' } : { color: '#000000' }}
                >
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
        }
        li {
          margin-left: 10px;
        }
        a {
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        .active {
          color: #ef6800 !important;
        }
      `}</style>
    </>
  );
};

export default Navigation;
